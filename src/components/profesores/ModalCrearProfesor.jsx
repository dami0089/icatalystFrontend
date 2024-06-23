import Modal from "react-modal";
import useProfesores from "../../hooks/useProfesores";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import useEscuelas from "../../hooks/useEscuelas";
import useMaterias from "../../hooks/useMaterias";

Modal.setAppElement("#root"); // Asegúrate de que esto esté configurado correctamente

const ModalCrearProfesor = () => {
	const {
		modalAgregarProfesor,
		handleModalAgregarProfesor,
		nuevoProfesor,
		nombreProfesor,
		setNombreProfesor,
		apellidoProfesor,
		setApellidoProfesor,
		emailProfesor,
		setEmailProfesor,
		idEscuela,
		setIdEscuela,
		setActualizarListados,
	} = useProfesores();
	const { handleCargando } = useAuth();

	const { obtenerEscuelas, escuelas } = useEscuelas();
	const { obtenerMaterias, materias } = useMaterias();

	const [materiasAsignadas, setMateriasAsignadas] = useState([]);

	useEffect(() => {
		const obtenerEsc = async () => {
			await obtenerEscuelas();
			await obtenerMaterias();
		};
		obtenerEsc();
	}, []);

	const handleAddMateria = () => {
		setMateriasAsignadas([...materiasAsignadas, ""]);
	};

	const handleChangeMateria = (index, value) => {
		const nuevasMaterias = [...materiasAsignadas];
		nuevasMaterias[index] = value;
		setMateriasAsignadas(nuevasMaterias);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleCargando();
		await nuevoProfesor(
			nombreProfesor,
			apellidoProfesor,
			emailProfesor,
			idEscuela,
			materiasAsignadas
		);

		setNombreProfesor("");
		setApellidoProfesor("");
		setEmailProfesor("");
		setIdEscuela("");
		setMateriasAsignadas([]);
		setActualizarListados(true);
		handleCargando();
		handleModalAgregarProfesor();
	};

	return (
		<Modal
			isOpen={modalAgregarProfesor}
			onRequestClose={handleModalAgregarProfesor}
			className="fixed inset-0 z-50 flex items-center justify-center"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
		>
			<div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
				<button
					type="button"
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					onClick={handleModalAgregarProfesor}
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
					Nuevo Profesor
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
							value={nombreProfesor}
							onChange={(e) => setNombreProfesor(e.target.value)}
						/>
					</div>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="apellido"
						>
							Apellido
						</label>
						<input
							id="apellido"
							type="text"
							placeholder="Apellido"
							className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
							autoComplete="off"
							value={apellidoProfesor}
							onChange={(e) => setApellidoProfesor(e.target.value)}
						/>
					</div>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="email"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Email"
							className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
							autoComplete="off"
							value={emailProfesor}
							onChange={(e) => setEmailProfesor(e.target.value)}
						/>
					</div>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="escuela"
						>
							Escuela
						</label>
						<select
							id="escuela"
							className="mt-2 w-full rounded-md border-2 p-2"
							value={idEscuela}
							onChange={(e) => setIdEscuela(e.target.value)}
						>
							<option value="">--Selecciona una escuela--</option>
							{escuelas.map((escuela) => (
								<option key={escuela._id} value={escuela._id}>
									{escuela.nombre}
								</option>
							))}
						</select>
					</div>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="materias"
						>
							Materias
						</label>

						{materiasAsignadas.map((materia, index) => (
							<div key={index} className="flex items-center mt-2">
								<select
									id={`materia-${index}`}
									className="w-full rounded-md border-2 p-2"
									value={materia}
									onChange={(e) => handleChangeMateria(index, e.target.value)}
								>
									<option value="">--Selecciona una materia--</option>
									{materias.map((materia) => (
										<option key={materia._id} value={materia._id}>
											{materia.nombre}
										</option>
									))}
								</select>
							</div>
						))}
						<button
							type="button"
							className="mt-2 w-full flex justify-center rounded bg-blue-600 p-2 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-700"
							onClick={handleAddMateria}
						>
							+ Agregar Materia
						</button>
					</div>
					<div>
						<input
							type="submit"
							className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-700"
							value="Nuevo Profesor"
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default ModalCrearProfesor;
