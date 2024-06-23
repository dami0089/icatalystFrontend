import Modal from "react-modal";
import useEstrategias from "../../hooks/useEstrategias";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

Modal.setAppElement("#root");

const ModalEstrategia = () => {
	const {
		modalNuevaEstrategia,
		handleModalNuevaEstrategia,
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
	} = useEstrategias();

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

	const handleAddTemplate = () => {
		setTemplateActividad([
			...templateActividad,
			{ nombre: "", descripcion: "" },
		]);
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
		formData.append("templates", JSON.stringify(templateActividad));

		handleCargando();
		await nuevaEstrategia(formData);
		setNombreEstrategia("");
		setExplicacionEstrategia("");
		setSistemaEstrategia("");
		setFileEstrategia(null);
		setTemplateActividad([]);
		setActualizarEstrategias(true);
		handleModalNuevaEstrategia();
		handleCargando();
	};

	return (
		<Modal
			isOpen={modalNuevaEstrategia}
			onRequestClose={handleModalNuevaEstrategia}
			className="fixed inset-0 z-50 flex items-center justify-center"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
		>
			<div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6  overflow-scroll">
				<button
					type="button"
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					onClick={handleModalNuevaEstrategia}
				>
					<span className="sr-only">Cerrar</span>
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
				<h3 className="text-xl font-bold leading-6 text-gray-900 mb-4">
					Nueva Estrategia
				</h3>
				<form className="mx-2 my-2" onSubmit={handleSubmit}>
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

					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="templates"
						>
							Templates
						</label>

						{templateActividad.map((template, index) => (
							<div key={index} className="flex flex-col mt-2">
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
										handleTemplateChange(index, "descripcion", e.target.value)
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
					</div>

					<input
						type="submit"
						className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-300"
						value="Crear Estrategia"
					/>
				</form>
			</div>
		</Modal>
	);
};

export default ModalEstrategia;
