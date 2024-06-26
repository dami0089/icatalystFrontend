import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useActividades from "../hooks/useActividades";

export function ChatLayout() {
	const navigate = useNavigate();
	const { actividad, obtenerActividad } = useActividades();
	const { id } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const obtenerAct = async () => {
			await obtenerActividad(id);
		};
		obtenerAct();
	}, []);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="h-screen flex flex-col">
			<header className="flex justify-between p-4 bg-blue-500 text-white">
				<button className="mr-auto" onClick={() => navigate(-1)}>
					🡨 Volver
				</button>
				<button
					className="md:hidden bg-blue-500 text-white py-1 px-2 rounded-lg"
					onClick={handleModalOpen}
				>
					Ver Descripción
				</button>
			</header>
			<div className="flex-grow flex overflow-hidden p-8">
				<Outlet />

				<aside className="hidden md:flex flex-col w-[500px] border-l-solid border-l-2 p-6 border-l-gray-200">
					<img
						className="rounded-lg max-w-40 mx-auto"
						src={`/${actividad.imagen}`}
						alt=""
					/>
					<h2 className="mt-4 text-xl font-semibold text-center">
						{actividad.nombreActividad}
					</h2>
					<p className="mt-1 text-sm font-thin text-center">
						{actividad.explicacion}
					</p>
					<div className="flex items-center mt-auto w-full">
						<img
							className="rounded-full w-14 h-14"
							src="/imgs/36506d4a22a9d5cbb4d4c5db7bd1d1e1.webp.jpeg"
							alt=""
						/>
						<div className="ml-2">
							<p className="text-xs font-semibold">
								{actividad.profesor && actividad.profesor.nombre}{" "}
								{actividad.profesor && actividad.profesor.apellido}
							</p>
							<p className="text-xs">
								Profesor de {actividad.materia && actividad.materia.nombre}{" "}
								{actividad.materia && actividad.materia.grado}
							</p>
						</div>
					</div>
				</aside>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-4 border-2 border-solid">
						<button
							className="absolute top-4 right-4 text-black"
							onClick={handleModalClose}
						>
							✖
						</button>
						<img
							className="rounded-lg max-w-40 mx-auto"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1m79JBqwoOt-fzl9jgxiOOkDM9q-wgDuow&s"
							alt=""
						/>
						<h2 className="mt-4 text-xl font-semibold text-center">
							Historia de Argentina
						</h2>
						<p className="mt-1 text-sm font-thin text-center">
							El general Güemes te relata la historia argentina y responde tus
							dudas
						</p>
						<div className="flex items-center mt-14 w-full">
							<img
								className="rounded-full w-14 h-14"
								src="/imgs/36506d4a22a9d5cbb4d4c5db7bd1d1e1.webp.jpeg"
								alt=""
							/>
							<div className="ml-2">
								<p className="text-xs font-semibold">Damian Oliva</p>
								<p className="text-xs">
									Profesor de Química y Física de 1° año
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ChatLayout;
