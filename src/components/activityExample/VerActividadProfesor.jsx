import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import useProfesores from "../../hooks/useProfesores";

import useActividades from "../../hooks/useActividades";
import ListadoAlumnosActividad from "../profesores/ListadoAlumnosActividad";
import ChatProfesor from "../profesores/ChatProfesor";
import useAuth from "../../hooks/useAuth";
import useDialogo from "../../hooks/useDialogo";
import ModalVerChatAlumno from "../profesores/ModalVerChatAlumno";
import Swal from "sweetalert2";

const VerActividadProfesor = () => {
	const { id } = useParams();
	const { auth } = useAuth();
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

		//VER ACTIVIDAD PROFE
		actividad,
		obtenerActividad,
	} = useActividades();

	const { obtenerDialogosActividad, modalVerDialogoAlumno } = useDialogo();

	useEffect(() => {
		const traerEstrategia = async () => {
			await obtenerMateriasProfesor(auth._id);
			await obtenerDialogosActividad(id);
		};
		traerEstrategia();
	}, []);

	const { materiasProfe, obtenerMateriasProfesor, detallesProfe } =
		useProfesores();
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const [inputValues, setInputValues] = useState({});

	useEffect(() => {
		const traerEstrategia = async () => {
			await obtenerActividad(id);
		};
		traerEstrategia();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

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

		await nuevaActividad(formData);
		setNombreActividad("");
		setExplicacionActividad("");
		setIdMateria("");
		setFileActividad(null);
		setTemplates([]);
		setTemperaturaActividad("");
	};

	useEffect(() => {
		if (actividad.templates) {
			const initialInputs = actividad.templates.reduce((acc, template) => {
				acc[template.nombre] = ""; // Valor inicial vacío
				return acc;
			}, {});
			setInputValues(initialInputs);

			const initialTemplates = actividad.templates.map((template) => ({
				nombre: template.nombre,
				descripcion: "", // Valor inicial vacío
			}));
			setTemplates(initialTemplates);
		}
	}, [actividad]);

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

	const handleTerminar = (e) => {
		e.preventDefault();
		Swal.fire({
			title: "¿Estás seguro?",
			text: "Una vez terminada la actividad no se podrá reanudar",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, detener actividad!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Terminada!", "La actividad ha sido Terminada.", "success");
			}
		});
	};

	const handlePausar = (e) => {
		e.preventDefault();
		Swal.fire({
			title: "¿Estás seguro?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, detener actividad!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Pausada!", "La actividad ha sido Pausada.", "success");
			}
		});
	};

	return (
		<>
			<div className="bg-white rounded-lg shadow-lg p-10 w-full mx-auto flex space-x-6 h-max overflow-none ">
				{/* Left Section */}
				<div className="w-full">
					<div className="items-center">
						<img
							className="h-[350px] w-[1000px] object-cover rounded-lg shadow-lg"
							src={`/${actividad.imagen}`}
							alt="activity Icon"
						/>
					</div>

					<div className="flex space-x-4 items-start mt-4">
						<div className="w-full">
							<h2 className="text-2xl font-bold">
								{actividad.nombreActividad}
							</h2>
							<p className="text-gray-600 mt-1">{actividad.explicacion}</p>

							<div className="mt-4">
								<label
									className="block text-sm font-bold uppercase text-gray-700"
									htmlFor="escuela"
								>
									Materia de la actividad
								</label>
								<select
									id="escuela"
									className="mt-2 w-full rounded-md border-2 p-2"
									value={actividad.materia && actividad.materia._id}
									onChange={(e) => setIdMateria(e.target.value)}
									disabled
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
									value={actividad.nombreActividad}
									disabled
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
									value={actividad.explicacion}
									disabled
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
										{actividad.templates &&
											actividad.templates.map((template) => (
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
														value={template.descripcion}
														disabled
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
									value={actividad.temperatura}
									disabled
									onChange={(e) => setTemperaturaActividad(e.target.value)}
								/>
							</div>

							<div className="flex justify-between mt-4">
								<div className="mb-1">
									<button
										className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center "
										onClick={(e) => handleTerminar(e)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="mr-3"
										>
											<path
												fill="currentColor"
												d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 14.5a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13M5 5h6v6H5z"
											/>
										</svg>
										Terminar
									</button>
								</div>

								<div className="mb-1">
									<button
										className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
										onClick={(e) => handlePausar(e)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 512 512"
											className="mr-3"
										>
											<path
												fill="currentColor"
												d="M208 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16m144 0h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16"
											/>
										</svg>
										Pausar
									</button>
								</div>

								<div className="mt-1 flex space-x-2 mb-4">
									<button
										className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
										// onClick={(e) => handleSubmit(e)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 1024 1024"
											className="mr-3"
										>
											<path
												fill="currentColor"
												d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
											/>
											<path
												fill="currentColor"
												d="m469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
											/>
										</svg>
										Editar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Right Section (Chat) */}
				<ChatProfesor />
			</div>
			<div className="bg-white rounded-lg shadow-lg p-10 w-full mt-12 flex space-x-6  ">
				<ListadoAlumnosActividad />
			</div>

			{modalVerDialogoAlumno ? <ModalVerChatAlumno /> : null}
		</>
	);
};

export default VerActividadProfesor;
