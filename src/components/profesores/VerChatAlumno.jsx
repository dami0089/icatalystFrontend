import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Lottie from "react-lottie";
import writingAnimation from "../../Lotties/typing.json"; // Asegúrate de reemplazar este path con el correcto
import useAuth from "../../hooks/useAuth";
import useDialogo from "../../hooks/useDialogo";

export function ChatAlumno() {
	const { id } = useParams();
	const { auth } = useAuth();
	const { dialogo, flowDialogo, dialogoInicial } = useDialogo();
	const [mensaje, setMensaje] = useState("");
	const [chat, setChat] = useState([]);
	const [isWriting, setIsWriting] = useState(false); // Nuevo estado para la animación de escritura
	const chatEndRef = useRef(null);

	useEffect(() => {
		if (dialogo && dialogo.chat) {
			setChat(dialogo.chat);
		}
	}, [dialogo]);

	useEffect(() => {
		const comienza = async () => {
			await dialogoInicial(auth._id, id);
		};
		comienza();
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [chat]);

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
		<div className="flex flex-col w-full md:w-2/3 border-solid border-2 rounded-lg overflow-hidden">
			<div className="flex-grow flex flex-col p-4 overflow-y-auto">
				{chat.map((msg, index) => (
					<div
						key={index}
						className={`relative max-w-[70%] py-2 px-4 rounded-lg mb-12 mt-4 ml-2 ${
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
			<div className="p-4 bg-white">
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
	);
}

export default ChatAlumno;
