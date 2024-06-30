import Modal from "react-modal";
import useEstrategias from "../../hooks/useEstrategias";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cargando from "../Cargando";

Modal.setAppElement("#root");

const NuevaEstrategia = () => {
	const {
		explicacionEstrategia,
		setExplicacionEstrategia,
		sistemaEstrategia,
		setSistemaEstrategia,
		nombreEstrategia,
		setNombreEstrategia,
		nuevaEstrategia,
		setActualizarEstrategias,
		templateActividad,
		setTemplateActividad,
		tipoTemplateEstrategia,
		setTipoTemplateEstrategia,
	} = useEstrategias();
	const navigate = useNavigate();
	const tipoTemplate = ["Simple", "Combinado"];

	const { handleCargando } = useAuth();
	const [fileEstrategia, setFileEstrategia] = useState(null);

	const handleFileSelected = (e) => {
		setFileEstrategia(e.target.files[0]);
	};

	const handleTemplateChange = (index, key, value) => {
		const newTemplates = [...templateActividad];
		newTemplates[index][key] = value;
		setTemplateActividad(newTemplates);
	};

	const handleCombinadoChange = (index, key, value, subIndex, subKey) => {
		const newTemplates = [...templateActividad];
		if (subKey !== null) {
			newTemplates[index][key][subIndex][subKey] = value;
		} else {
			newTemplates[index][key] = value;
		}
		setTemplateActividad(newTemplates);
	};

	const handleAddTemplate = () => {
		if (tipoTemplateEstrategia === "Simple") {
			setTemplateActividad([
				...templateActividad,
				{ nombre: "", descripcion: "" },
			]);
		} else if (tipoTemplateEstrategia === "Combinado") {
			setTemplateActividad([
				...templateActividad,
				{
					objeto1: { nombre: "", descripcion: "" },
					objeto2: [{ nombre: "", descripcion: "" }],
				},
			]);
		}
	};

	const handleAddObjeto2 = (index) => {
		const newTemplates = [...templateActividad];
		newTemplates[index].objeto2.push({ nombre: "", descripcion: "" });
		setTemplateActividad(newTemplates);
	};

	const handleRemoveTemplate = (index) => {
		const newTemplates = templateActividad.filter((_, i) => i !== index);
		setTemplateActividad(newTemplates);
	};

	const handleRemoveObjeto1 = (index) => {
		const newTemplates = [...templateActividad];
		delete newTemplates[index].objeto1;
		setTemplateActividad(newTemplates);
	};

	const handleRemoveObjeto2 = (index, subIndex) => {
		const newTemplates = [...templateActividad];
		newTemplates[index].objeto2 = newTemplates[index].objeto2.filter(
			(_, i) => i !== subIndex
		);
		setTemplateActividad(newTemplates);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		if (fileEstrategia) {
			formData.append("imagen", fileEstrategia);
		}
		formData.append("nombre", nombreEstrategia);
		formData.append("explicacion", explicacionEstrategia);
		formData.append("sistema", sistemaEstrategia);
		formData.append("tipoTemplate", tipoTemplateEstrategia);

		if (tipoTemplateEstrategia === "Simple") {
			formData.append("templates", JSON.stringify(templateActividad));
		} else if (tipoTemplateEstrategia === "Combinado") {
			formData.append("templatesCombinado", JSON.stringify(templateActividad));
		}

		handleCargando();
		await nuevaEstrategia(formData);
		setNombreEstrategia("");
		setExplicacionEstrategia("");
		setSistemaEstrategia("");
		setFileEstrategia(null);
		setTemplateActividad([]);
		setActualizarEstrategias(true);
		navigate("/listado-estrategias");
		handleCargando();
	};

	return (
		<>
			<h3 className="text-xl font-bold leading-6 text-gray-900 mb-4">
				Nueva Estrategia
			</h3>
			<form className="mx-2 my-2" onSubmit={handleSubmit}>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<div className="mb-1">
							<label
								className="text-sm font-bold uppercase text-gray-700"
								htmlFor="nombre"
							>
								Nombre
							</label>
							<input
								id="nombre"
								type="text"
								placeholder="Nombre"
								className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
								autoComplete="off"
								value={nombreEstrategia}
								onChange={(e) => setNombreEstrategia(e.target.value)}
							/>
						</div>
						<div className="mb-1">
							<label
								className="text-sm font-bold uppercase text-gray-700"
								htmlFor="archivo"
							>
								Sube la imagen de la estrategia
							</label>
							<input
								id="archivo"
								type="file"
								className="mt-2 w-full"
								onChange={handleFileSelected}
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
								value={explicacionEstrategia}
								onChange={(e) => setExplicacionEstrategia(e.target.value)}
							/>
						</div>

						<div className="mb-1">
							<label
								className="text-sm font-bold uppercase text-gray-700"
								htmlFor="texto"
							>
								Sistema Estrategia
							</label>
							<textarea
								id="texto"
								type="text"
								placeholder="Sistema estrategia"
								className="mt-2 resize-none w-full rounded-md border-2 p-2 placeholder-gray-400"
								rows={5}
								autoComplete="off"
								value={sistemaEstrategia}
								onChange={(e) => setSistemaEstrategia(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<div className="mb-4">
							<label
								className="block text-sm font-bold uppercase text-gray-700"
								htmlFor="escuela"
							>
								Tipo de Template
							</label>
							<select
								id="escuela"
								className="mt-2 w-full rounded-md border-2 p-2"
								value={tipoTemplateEstrategia}
								onChange={(e) => setTipoTemplateEstrategia(e.target.value)}
							>
								<option value="">--Selecciona un tipo de Template--</option>
								{tipoTemplate.map((template) => (
									<option key={template} value={template}>
										{template}
									</option>
								))}
							</select>
						</div>

						{tipoTemplateEstrategia === "Simple" ? (
							<>
								<label
									className="block text-sm font-bold uppercase text-gray-700"
									htmlFor="templates"
								>
									Templates
								</label>
								{templateActividad.map((template, index) => (
									<div
										key={index}
										className="relative flex flex-col mt-2 border rounded-xl p-5"
									>
										<button
											type="button"
											className="absolute top-1 right-1 text-gray-400 hover:text-gray-500 focus:outline-none"
											onClick={() => handleRemoveTemplate(index)}
										>
											<span className="sr-only">Eliminar</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 "
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
										<input
											type="text"
											placeholder="Nombre Template"
											className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
											autoComplete="off"
											value={template.nombre}
											onChange={(e) =>
												handleTemplateChange(index, "nombre", e.target.value)
											}
										/>
										<input
											type="text"
											placeholder="Descripción Template"
											className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
											autoComplete="off"
											value={template.descripcion}
											onChange={(e) =>
												handleTemplateChange(
													index,
													"descripcion",
													e.target.value
												)
											}
										/>
									</div>
								))}
								<button
									type="button"
									className="mt-2 w-full flex justify-center rounded bg-blue-600 p-2 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-700"
									onClick={handleAddTemplate}
								>
									+ Agregar Template
								</button>
							</>
						) : tipoTemplateEstrategia === "Combinado" ? (
							<>
								<label
									className="block text-sm font-bold uppercase text-gray-700"
									htmlFor="templates"
								>
									Templates
								</label>
								{templateActividad.map((template, index) => (
									<div
										key={index}
										className="relative flex flex-col mt-2 border rounded-xl p-5"
									>
										<button
											type="button"
											className="absolute top-1 right-1 text-gray-400 hover:text-gray-500 focus:outline-none"
											onClick={() => handleRemoveTemplate(index)}
										>
											<span className="sr-only">Eliminar</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-black border-2 rounded-full border-black bg-gray-100"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
										{template.objeto1 && (
											<div className="mb-4 relative">
												<button
													type="button"
													className="absolute top-1 right-1 text-gray-400 hover:text-gray-500 focus:outline-none"
													onClick={() => handleRemoveObjeto1(index)}
												>
													<span className="sr-only">Eliminar</span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-6 w-6"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M6 18L18 6M6 6l12 12"
														/>
													</svg>
												</button>
												<label
													className="text-sm font-bold uppercase text-gray-700"
													htmlFor={`objeto1-nombre-${index}`}
												>
													Nombre
												</label>
												<input
													id={`objeto1-nombre-${index}`}
													type="text"
													placeholder="Nombre"
													className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
													autoComplete="off"
													value={template.objeto1.nombre}
													onChange={(e) =>
														handleCombinadoChange(
															index,
															"objeto1",
															e.target.value,
															"nombre"
														)
													}
												/>
												<label
													className="text-sm font-bold uppercase text-gray-700"
													htmlFor={`objeto1-descripcion-${index}`}
												>
													Descripción
												</label>
												<input
													id={`objeto1-descripcion-${index}`}
													type="text"
													placeholder="Descripción"
													className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
													autoComplete="off"
													value={template.objeto1.descripcion}
													onChange={(e) =>
														handleCombinadoChange(
															index,
															"objeto1",
															e.target.value,
															"descripcion"
														)
													}
												/>
											</div>
										)}

										<div className="mb-4">
											<label
												className="text-sm font-bold uppercase text-gray-700"
												htmlFor={`objeto2-${index}`}
											>
												Combinado
											</label>
											{template.objeto2.map((objeto2Item, subIndex) => (
												<div
													key={subIndex}
													className="relative flex flex-col mt-2 border rounded-xl p-5"
												>
													<button
														type="button"
														className="absolute top-1 right-1 text-gray-400 hover:text-gray-500 focus:outline-none"
														onClick={() => handleRemoveObjeto2(index, subIndex)}
													>
														<span className="sr-only">Eliminar</span>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-6 w-6"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																d="M6 18L18 6M6 6l12 12"
															/>
														</svg>
													</button>
													<input
														type="text"
														placeholder="Nombre"
														className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
														autoComplete="off"
														value={objeto2Item.nombre}
														onChange={(e) =>
															handleCombinadoChange(
																index,
																"objeto2",
																e.target.value,
																subIndex,
																"nombre"
															)
														}
													/>
													<input
														type="text"
														placeholder="Descripción"
														className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
														autoComplete="off"
														value={objeto2Item.descripcion}
														onChange={(e) =>
															handleCombinadoChange(
																index,
																"objeto2",
																e.target.value,
																subIndex,
																"descripcion"
															)
														}
													/>
												</div>
											))}
											<button
												type="button"
												className="mt-2 w-full flex justify-center rounded bg-blue-600 p-2 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-700"
												onClick={() => handleAddObjeto2(index)}
											>
												+ Agregar Objeto2
											</button>
										</div>
									</div>
								))}
								<button
									type="button"
									className="mt-2 w-full flex justify-center rounded bg-blue-600 p-2 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-700"
									onClick={handleAddTemplate}
								>
									+ Agregar Template
								</button>
							</>
						) : null}
					</div>
				</div>

				<input
					type="submit"
					className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-300"
					value="Crear Estrategia"
				/>
			</form>
			<Cargando />
		</>
	);
};

export default NuevaEstrategia;
