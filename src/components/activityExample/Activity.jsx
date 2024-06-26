import { useParams } from "react-router-dom";

import useEstrategias from "../../hooks/useEstrategias";
import { useEffect, useState } from "react";

import useProfesores from "../../hooks/useProfesores";
import useAuth from "../../hooks/useAuth";
import useActividades from "../../hooks/useActividades";
import Swal from "sweetalert2";

const SidekickComponent = () => {
	const { id } = useParams();
	const { estrategia, obtenerEstrategia } = useEstrategias();
	const {
		nuevaActividad,
		explicacionActividad,
		setExplicacionActividad,
		fileActividad,
		setFileActividad,
		nombreActividad,
		setNombreActividad,
		idMateria,
		setIdMateria,
		templates,
		setTemplates,
		temperaturaActividad,
		setTemperaturaActividad,
	} = useActividades();

	const {
		materiasProfe,
		obtenerMateriasProfesor,
		obtenerDetallesProfe,
		detallesProfe,
	} = useProfesores();
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const [inputValues, setInputValues] = useState({});

	const { auth, handleCargando } = useAuth();

	useEffect(() => {
		const traerEstrategia = async () => {
			await obtenerEstrategia(id);
			await obtenerMateriasProfesor(auth._id);
			await obtenerDetallesProfe(auth._id);
		};
		traerEstrategia();
	}, []);

	useEffect(() => {
		if (estrategia.templates) {
			const initialTemplates = estrategia.templates.map((template) => ({
				nombre: template.nombre,
				descripcion: "",
			}));
			setTemplates(initialTemplates);
		}
	}, [estrategia]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// if(!fileActividad){
		// 	return Swal.fire({
		// 		icon: "error",
		// 		title: "Oops...",
		// 		text: `Debes subir una imagen para la actividad`,
		// 	})
		// }

		// if (!idMateria, !nombreActividad, !explicacionActividad, !temperaturaActividad) {
		// 	return Swal.fire({
		// 		icon: "error",
		// 		title: "Oops...",
		// 		text: `Debes subir una imagen para la actividad`,
		// 	});
		// }

		const formData = new FormData();
		if (fileActividad) {
			formData.append("imagen", fileActividad);
		}
		formData.append("estrategia", id);
		formData.append("materia", idMateria);
		formData.append("profesor", detallesProfe.profesorId);
		formData.append("escuela", detallesProfe.escuelaId);
		formData.append("nombreActividad", nombreActividad);
		formData.append("explicacion", explicacionActividad);
		formData.append("estado", "Activa");
		formData.append("templates", JSON.stringify(templates));
		formData.append("temperatura", temperaturaActividad);

		// Depuración: Imprimir el contenido de FormData
		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}

		handleCargando();

		await nuevaActividad(formData);
		setNombreActividad("");
		setExplicacionActividad("");
		setIdMateria("");
		setFileActividad(null);
		setTemplates([]);
		setTemperaturaActividad("");
		handleCargando();
	};

	useEffect(() => {
		if (estrategia.templates) {
			const initialInputs = estrategia.templates.reduce((acc, template) => {
				acc[template.nombre] = ""; // Valor inicial vacío
				return acc;
			}, {});
			setInputValues(initialInputs);

			const initialTemplates = estrategia.templates.map((template) => ({
				nombre: template.nombre,
				descripcion: "", // Valor inicial vacío
			}));
			setTemplates(initialTemplates);
		}
	}, [estrategia]);

	const handleTemplateChange = (nombre, value) => {
		setInputValues({
			...inputValues,
			[nombre]: value,
		});

		setTemplates((prevTemplates) =>
			prevTemplates.map((template) =>
				template.nombre === nombre
					? { ...template, descripcion: value }
					: template
			)
		);
	};

	const toggleAccordion = () => {
		setIsAccordionOpen(!isAccordionOpen);
	};

	const handleFileSelected = (e) => {
		setFileActividad(e.target.files[0]);
	};

	return (
		<div className="bg-white rounded-lg shadow-lg p-10 w-full mx-auto flex space-x-6 h-max overflow-scroll ">
			{/* Left Section */}
			<div className="w-full">
				<div className="items-center">
					<img
						className="h-[230px] w-[1000px] object-cover rounded-lg shadow-lg"
						src={`/${estrategia.imagen}`}
						alt="activity Icon"
					/>
				</div>

				<div className="flex space-x-4 items-start mt-4">
					<div>
						<h2 className="text-2xl font-bold">{estrategia.nombre}</h2>
						<p className="text-gray-600 mt-1">{estrategia.explicacion}</p>

						<div className="mt-4">
							<label
								className="block text-sm font-bold uppercase text-gray-700"
								htmlFor="escuela"
							>
								Elije la materia para la actividad
							</label>
							<select
								id="escuela"
								className="mt-2 w-full rounded-md border-2 p-2"
								value={idMateria}
								onChange={(e) => setIdMateria(e.target.value)}
							>
								<option value="">--Selecciona una Materia--</option>
								{materiasProfe.map((escuela) => (
									<option key={escuela._id} value={escuela._id}>
										{escuela.nombre}
									</option>
								))}
							</select>
						</div>

						<div className="mt-4">
							<label
								className="block text-sm font-bold uppercase text-gray-700"
								htmlFor="nombre"
							>
								Nombre de la actividad
							</label>
							<input
								id="nombre"
								className="w-full resize-none px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
								placeholder="Ingresa un nombre para la actividad"
								value={nombreActividad}
								onChange={(e) => setNombreActividad(e.target.value)}
							/>
						</div>

						<div className="mb-1">
							<label
								className="text-sm font-bold uppercase text-gray-700"
								htmlFor="texto"
							>
								Explicacion
							</label>
							<textarea
								id="texto"
								type="text"
								placeholder="Explica tu estrategia"
								className="mt-2 resize-none w-full rounded-md border-2 p-2 placeholder-gray-400"
								rows={5}
								autoComplete="off"
								value={explicacionActividad}
								onChange={(e) => setExplicacionActividad(e.target.value)}
							/>
						</div>

						<div className="mt-4">
							<button
								onClick={toggleAccordion}
								className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
							>
								{isAccordionOpen ? "Plegar Templates" : "Desplegar Templates"}
							</button>
							{isAccordionOpen && (
								<div className="bg-gray-100 p-4 mt-2 rounded-lg">
									{estrategia.templates &&
										estrategia.templates.map((template) => (
											<div className="mt-4" key={template._id}>
												<label
													className="block text-gray-700 text-sm font-bold mb-2"
													htmlFor={template.nombre}
													title={template.descripcion}
												>
													{template.nombre}{" "}
													<span className="text-red-500">*</span>
												</label>
												<input
													id={template.nombre}
													className="w-full resize-none px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
													placeholder={template.descripcion}
													value={inputValues[template.nombre]}
													onChange={(e) =>
														handleTemplateChange(
															template.nombre,
															e.target.value
														)
													}
												/>
											</div>
										))}
								</div>
							)}
						</div>

						<div className="mt-4">
							<label
								className="block text-sm font-bold uppercase text-gray-700"
								htmlFor="temp"
							>
								Temperatura
							</label>
							<input
								id="temp"
								className="w-full resize-none px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
								placeholder="Ingresa una temperatura para la actividad"
								value={temperaturaActividad}
								onChange={(e) => setTemperaturaActividad(e.target.value)}
							/>
						</div>

						<div className="flex justify-between mt-8">
							<div className="mb-1">
								<label
									className="text-sm font-bold uppercase text-gray-700"
									htmlFor="archivo"
								>
									Sube la imagen de la actividad
								</label>
								<input
									id="archivo"
									type="file"
									className="mt-2 w-full"
									onChange={handleFileSelected}
								/>
							</div>

							<div className="mt-4 flex space-x-2 mb-4">
								<button
									className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
									onClick={(e) => handleSubmit(e)}
								>
									Crear
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Right Section (Chat) */}
			<div className="bg-gray-100 rounded-lg p-4 flex flex-col w-full h-screen">
				<div className="flex-1 overflow-y-auto">
					{/* Chat messages */}
					<div className="mb-4">
						<div className="flex justify-start mb-2">
							<div className="bg-white p-3 rounded-lg shadow w-[200px]">
								<p className="text-sm text-gray-600">
									Hello! How can I assist you today?
								</p>
							</div>
						</div>
						<div className="flex justify-end mb-2">
							<div className="bg-blue-500 text-white p-3 rounded-lg shadow w-[200px]">
								<p className="text-sm">I need help with my homework.</p>
							</div>
						</div>
						{/* More messages */}
					</div>
				</div>
				<div className="mt-2 mb-5">
					<div className="flex">
						<input
							type="text"
							className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
							placeholder="Send a message"
							disabled
						/>
						<button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									fillOpacity=".25"
									stroke="currentColor"
									d="m16.205 5.265l-6.49 2.164c-1.634.544-2.45.816-2.776 1.129a2 2 0 0 0 0 2.884c.325.313 1.142.585 2.775 1.13c.33.11.494.164.64.241a2 2 0 0 1 .833.833c.077.146.132.31.242.64c.544 1.633.816 2.45 1.129 2.775a2 2 0 0 0 2.884 0c.313-.325.585-1.142 1.13-2.775l2.163-6.491c.552-1.656.828-2.484.391-2.921c-.437-.437-1.265-.161-2.92.39Z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidekickComponent;
