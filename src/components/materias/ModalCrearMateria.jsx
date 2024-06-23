import Modal from "react-modal";
import useAuth from "../../hooks/useAuth";
import useMaterias from "../../hooks/useMaterias";

Modal.setAppElement("#root"); // Asegúrate de que esto esté configurado correctamente

const ModalCrearMateria = () => {
	const { handleCargando } = useAuth();

	const {
		nombreMateria,
		setNombreMateria,
		lenguaMateria,
		setLenguaMateria,
		nuevaMateria,
		setActualizarListados,
		handleModalAgregarMateria,
		modalAgregarMateria,
		gradoMateria,
		setGradoMateria,
	} = useMaterias();

	const idiomas = ["Español", "Inglés", "Francés", "Alemán", "Italiano"];
	const grados = [
		"PRIMARIA - Primer grado",
		"PRIMARIA - Segundo grado",
		"PRIMARIA - Tercer grado",
		"PRIMARIA - Cuarto grado",
		"PRIMARIA - Quinto grado",
		"PRIMARIA - Sexto grado",
		"PRIMARIA - Septimo grado",
		"PRIMARIA - Octavo grado",
		"SECUNDARIA - Primer grado",
		"SECUNDARIA - Segundo grado",
		"SECUNDARIA - Tercer grado",
		"SECUNDARIA - Cuarto grado",
		"SECUNDARIA - Quinto grado",
		"SECUNDARIA - Sexto grado",
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleCargando();
		await nuevaMateria(nombreMateria, lenguaMateria, gradoMateria);
		setNombreMateria("");
		setLenguaMateria("");
		setActualizarListados(true);
		handleCargando();
		handleModalAgregarMateria();
	};

	return (
		<Modal
			isOpen={modalAgregarMateria}
			onRequestClose={handleModalAgregarMateria}
			className="fixed inset-0 z-50 flex items-center justify-center"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
		>
			<div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
				<button
					type="button"
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					onClick={handleModalAgregarMateria}
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
					Nueva Materia
				</h3>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
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
							value={nombreMateria}
							onChange={(e) => setNombreMateria(e.target.value)}
						/>
					</div>

					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="escuela"
						>
							Grado
						</label>
						<select
							id="escuela"
							className="mt-2 w-full rounded-md border-2 p-2"
							value={gradoMateria}
							onChange={(e) => setGradoMateria(e.target.value)}
						>
							<option value="">--Selecciona un grado--</option>

							{grados.map((escuela) => (
								<option key={escuela} value={escuela}>
									{escuela}
								</option>
							))}
						</select>
					</div>

					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="escuela"
						>
							Lengua
						</label>
						<select
							id="escuela"
							className="mt-2 w-full rounded-md border-2 p-2"
							value={lenguaMateria}
							onChange={(e) => setLenguaMateria(e.target.value)}
						>
							<option value="">--Selecciona una escuela--</option>

							{idiomas.map((escuela) => (
								<option key={escuela} value={escuela}>
									{escuela}
								</option>
							))}
						</select>
					</div>

					<div>
						<input
							type="submit"
							className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-700"
							value="Nueva Materia"
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default ModalCrearMateria;
