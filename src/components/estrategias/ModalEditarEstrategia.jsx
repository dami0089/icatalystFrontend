import Modal from "react-modal";
import useEstrategias from "../../hooks/useEstrategias";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";

Modal.setAppElement("#root");

const ModalEditarEstrategia = () => {
	const {
		modalEditarEstrategia,
		handleModalEditarEstrategia,
		setActualizarEstrategias,
		idEstrategiaEditar,
	} = useEstrategias();

	const { handleCargando } = useAuth();

	const [nombreEstrategia, setNombreEstrategia] = useState("");
	const [explicacionEstrategia, setExplicacionEstrategia] = useState("");
	const [sistemaEstrategia, setSistemaEstrategia] = useState("");
	const [fileEstrategia, setFileEstrategia] = useState(null);
	const [imagenActual, setImagenActual] = useState("");

	useEffect(() => {
		const obtenerEstrategia = async () => {
			try {
				const token = localStorage.getItem("token");
				if (!token) return;
				const config = {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
				const { data } = await axios.get(
					`/api/estrategia/${idEstrategiaEditar}`,
					config
				);
				setNombreEstrategia(data.nombre);
				setExplicacionEstrategia(data.explicacion);
				setSistemaEstrategia(data.sistema);
				setImagenActual(data.imagen);
			} catch (error) {
				console.log(error);
			}
		};

		if (idEstrategiaEditar) {
			obtenerEstrategia();
		}
	}, [idEstrategiaEditar]);

	const handleFileSelected = (e) => {
		setFileEstrategia(e.target.files[0]);
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

		handleCargando();
		const token = localStorage.getItem("token");
		if (!token) return;
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data",
			},
		};

		try {
			await axios.put(
				`/api/estrategia/${idEstrategiaEditar}`,
				formData,
				config
			);
			setNombreEstrategia("");
			setExplicacionEstrategia("");
			setSistemaEstrategia("");
			setFileEstrategia(null);
			setImagenActual("");
			setActualizarEstrategias(true);
			handleModalEditarEstrategia();
			handleCargando();
		} catch (error) {
			console.log(error);
			handleCargando();
		}
	};

	return (
		<Modal
			isOpen={modalEditarEstrategia}
			onRequestClose={handleModalEditarEstrategia}
			className="fixed inset-0 z-50 flex items-center justify-center"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
		>
			<div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
				<button
					type="button"
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					onClick={handleModalEditarEstrategia}
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
					Editar Estrategia
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
							Sube una nueva imagen de la estrategia (opcional)
						</label>
						<input
							id="archivo"
							type="file"
							className="mt-2 w-full"
							onChange={handleFileSelected}
						/>
					</div>
					{imagenActual && (
						<div className="mb-1">
							<label className="text-sm font-bold uppercase text-gray-700">
								Imagen actual:
							</label>
							<div className="mt-2">
								<img
									src={`/api/uploads/${imagenActual}`}
									alt="Imagen actual"
									className="w-full h-auto"
								/>
							</div>
						</div>
					)}
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
							htmlFor="sistema"
						>
							Sistema
						</label>
						<input
							id="sistema"
							type="text"
							placeholder="Sistema"
							className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
							autoComplete="off"
							value={sistemaEstrategia}
							onChange={(e) => setSistemaEstrategia(e.target.value)}
						/>
					</div>
					<input
						type="submit"
						className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-300"
						value="Actualizar Estrategia"
					/>
				</form>
			</div>
		</Modal>
	);
};

export default ModalEditarEstrategia;
