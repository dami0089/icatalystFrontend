import { Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

// import Cargando from "@/components/Cargando";

export function Home() {
	const navigate = useNavigate();

	const handleVerProfesores = (e) => {
		e.preventDefault();
		navigate("/listado-profesores");
	};

	const handleVerEscuelas = (e) => {
		e.preventDefault();
		navigate("/listado-escuelas");
	};

	// const handleVerUsuarios = (e) => {
	// 	e.preventDefault();
	// 	navigate("/listado-usuarios");
	// };

	const handleListadoEstrategias = (e) => {
		e.preventDefault();
		navigate("/listado-estrategias");
	};

	return (
		<>
			<div className="mt-10 flex flex-wrap justify-center gap-10">
				<Card
					className="flex w-full max-w-md hover:scale-105 flex-row items-center p-6 hover:cursor-pointer md:max-w-lg lg:max-w-xl"
					onClick={(e) => handleVerEscuelas(e)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.25em"
						height="1em"
						viewBox="0 0 640 512"
						className="h-12 w-12 text-gray-500"
					>
						<path
							fill="currentColor"
							d="M337.8 5.4c-10.8-7.2-24.8-7.2-35.6 0L166.3 96H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h208v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96h208c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM232 176a88 88 0 1 1 176 0a88 88 0 1 1-176 0m88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16"
						/>
					</svg>
					<div className="ml-4">
						<Typography variant="h5" color="blue-gray">
							Listado de Escuelas
						</Typography>
						<Typography
							variant="subtitle1"
							className="font-normal text-blue-gray-600"
						>
							Ver todos las Escuelas
						</Typography>
					</div>
				</Card>
				<Card
					className="flex w-full max-w-md hover:scale-105 flex-row items-center p-6 hover:cursor-pointer md:max-w-lg lg:max-w-xl"
					onClick={(e) => handleVerProfesores(e)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.25em"
						height="1em"
						viewBox="0 0 640 512"
						className="h-12 w-12 text-blue-500"
					>
						<path
							fill="currentColor"
							d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"
						/>
					</svg>
					<div className="ml-4">
						<Typography variant="h5" color="blue-gray">
							Listado de Profesores
						</Typography>
						<Typography
							variant="subtitle1"
							className="font-normal text-blue-gray-600"
						>
							Ver todos los profesores
						</Typography>
					</div>
				</Card>
				<Card
					className="flex w-full max-w-md flex-row items-center p-6 hover:cursor-pointer md:max-w-lg lg:max-w-xl hover:scale-105"
					onClick={(e) => handleListadoEstrategias(e)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 32 32"
						className="h-12 w-12 text-green-500"
					>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 16h6l4-11l6 22l4-11h6"
						/>
					</svg>
					<div className="ml-4">
						<Typography variant="h5" color="blue-gray">
							Listado de Estrategias
						</Typography>
						<Typography
							variant="subtitle1"
							className="font-normal text-blue-gray-600"
						>
							Ver todas las estrategias disponibles
						</Typography>
					</div>
				</Card>
				<Card
					className="flex w-full max-w-md flex-row items-center p-6 hover:cursor-pointer md:max-w-lg lg:max-w-xl hover:scale-105"
					// onClick={(e) => handleVerUsuarios(e)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						className="h-12 w-12 text-blue-500"
					>
						<path
							fill="currentColor"
							d="M6.05 17.775q-.5-.275-.775-.737T5 16v-4.8L2.6 9.875q-.275-.15-.4-.375T2.075 9t.125-.5t.4-.375l8.45-4.6q.225-.125.463-.188T12 3.275t.488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17t-.712-.288T21 16v-5.9l-2 1.1V16q0 .575-.275 1.038t-.775.737l-5 2.7q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188zM12 12.7L18.85 9L12 5.3L5.15 9zm0 6.025l5-2.7V12.25l-4.025 2.225q-.225.125-.475.188t-.5.062t-.5-.062t-.475-.188L7 12.25v3.775zm0-3"
						/>
					</svg>
					<div className="ml-4">
						<Typography variant="h5" color="blue-gray">
							Listado de alumnos
						</Typography>
						<Typography
							variant="subtitle1"
							className="font-normal text-blue-gray-600"
						>
							Ver listado de alumnos
						</Typography>
					</div>
				</Card>
				<Card
					className="flex w-full max-w-md flex-row items-center p-6 hover:cursor-pointer md:max-w-lg lg:max-w-xl hover:scale-105"
					// onClick={handleModalNotificacionAdmin}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						className="h-12 w-12 text-pink-500"
					>
						<g
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							color="currentColor"
						>
							<path d="M13.5 19.49c-1.467.02-2.929.01-4.401-.027c-3.149-.079-4.723-.118-5.854-1.254c-1.131-1.135-1.164-2.668-1.23-5.733a69 69 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254c1.131 1.135 1.164 2.668 1.23 5.733Q22 10.264 22 11" />
							<path d="m7 7.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5M16 16c.491-.506 1.8-2.5 2.5-2.5M21 16c-.491-.506-1.8-2.5-2.5-2.5m0 0v8" />
						</g>
					</svg>
					<div className="ml-4">
						<Typography variant="h5" color="blue-gray">
							Enviar notificacion
						</Typography>
						<Typography
							variant="subtitle1"
							className="font-normal text-blue-gray-600"
						>
							Se enviara a todos los profesores
						</Typography>
					</div>
				</Card>

				{/* <Cargando /> */}
			</div>
		</>
	);
}

export default Home;
