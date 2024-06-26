import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDialogo from "../hooks/useDialogo";
import useAuth from "../hooks/useAuth";
import Lottie from "react-lottie";
import writingAnimation from "../Lotties/typing.json"; // Asegúrate de reemplazar este path con el correcto

export function Actividad() {
	const navigate = useNavigate();
	const { id } = useParams();
	const { auth } = useAuth();
	const { dialogo, flowDialogo, dialogoInicial } = useDialogo();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [mensaje, setMensaje] = useState("");
	const [chat, setChat] = useState([]);
	const [isWriting, setIsWriting] = useState(false); // Nuevo estado para la animación de escritura
	const chatEndRef = useRef(null);

	useEffect(() => {
		if (dialogo && dialogo.chat) {
			setChat(dialogo.chat);
			scrollToBottom();
		}
	}, [dialogo]);

	useEffect(() => {
		const comienza = async () => {
			await dialogoInicial(auth._id, id);
		};
		comienza();
	}, []);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleEnviar = async (e) => {
		e.preventDefault();
		if (mensaje.trim() === "") return;

		const nuevoMensaje = { role: "user", content: mensaje };
		setChat((prevChat) => [...prevChat, nuevoMensaje]);
		setMensaje("");
		setIsWriting(true); // Mostrar animación de escritura

		await flowDialogo(mensaje, auth._id, id, dialogo._id);

		setIsWriting(false); // Ocultar animación de escritura
		scrollToBottom();
	};

	const scrollToBottom = () => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: writingAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			<div className="flex justify-between m-4">
				<button className="mr-auto" onClick={() => navigate(-1)}>
					🡨 Volver
				</button>
				<button
					className="md:hidden bg-blue-500 text-white py-1 px-2 rounded-lg"
					onClick={handleModalOpen}
				>
					Ver Descripción
				</button>
			</div>
			<div className="h-full flex flex-col">
				<div className="relative flex flex-grow rounded-lg border-solid border-2 overflow-hidden">
					<div className="w-full flex flex-col md:p-4">
						<div className="flex-grow flex flex-col space-y-4 p-4 overflow-y-auto">
							{chat.map((msg, index) => (
								<div
									key={index}
									className={`relative max-w-[70%] py-2 px-4 rounded-lg mb-2 ${
										msg.role === "user"
											? "bg-blue-300 self-end"
											: "bg-gray-200 self-start"
									}`}
								>
									<img
										className="absolute rounded-full w-[30px] h-[30px] top-[-16px] left-[-16px]"
										src="/imgs/36506d4a22a9d5cbb4d4c5db7bd1d1e1.webp.jpeg"
										alt=""
									/>
									<p className="text-sm">{msg.content}</p>
								</div>
							))}
							{isWriting && (
								<div className="relative max-w-[70%] py-2 px-4 rounded-lg mb-2 bg-gray-400 self-start">
									<Lottie options={defaultOptions} height={40} width={40} />
								</div>
							)}
							<div ref={chatEndRef} />
						</div>
						<div className="p-4">
							<form onSubmit={handleEnviar}>
								<div className="relative">
									<input
										className="border-solid border-2 rounded-lg w-full p-2 pl-4 pr-14 outline-0"
										type="text"
										placeholder="Envía un mensaje"
										value={mensaje}
										onChange={(e) => setMensaje(e.target.value)}
									/>
									<button type="submit">
										<img
											width="30px"
											height="30px"
											className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
											src="/public/imgs/send.svg"
											alt="Enviar"
										/>
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="hidden md:flex flex-col w-[500px] border-l-solid border-l-2 p-6 border-l-gray-200">
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
						<div className="flex items-center mt-auto w-full">
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
		</>
	);
}

export default Actividad;
