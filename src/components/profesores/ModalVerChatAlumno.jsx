import Modal from "react-modal";
import { useEffect, useRef, useState } from "react";
import useDialogo from "../../hooks/useDialogo";
import Lottie from "react-lottie";
import writingAnimation from "../../Lotties/typing.json"; // Asegúrate de reemplazar este path con el correcto

Modal.setAppElement("#root"); // Asegúrate de que esto esté configurado correctamente

const ModalVerChatAlumno = () => {
	const {
		handleModlaVerChatAlumno,
		modalVerDialogoAlumno,
		idDialogo,
		dialogoAlumno,
		obtenerDialogoAlumno,
	} = useDialogo();
	const [mensaje, setMensaje] = useState("");
	const [chat, setChat] = useState([]);
	const [isWriting, setIsWriting] = useState(false); // Nuevo estado para la animación de escritura
	const chatEndRef = useRef(null);

	useEffect(() => {
		const comienza = async () => {
			await obtenerDialogoAlumno(idDialogo);
		};
		comienza();
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [chat]);

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

	const handleEnviar = () => {};

	return (
		<Modal
			isOpen={modalVerDialogoAlumno}
			onRequestClose={handleModlaVerChatAlumno}
			className="fixed inset-0 z-50 flex items-center justify-center"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
		>
			<div className="relative bg-white rounded-lg h-[800px] overflow-scroll shadow-lg  max-w-lg p-6">
				<button
					type="button"
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					onClick={handleModlaVerChatAlumno}
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
				<div className="flex flex-col border-solid border-2 rounded-lg w-full h-full overflow-scroll">
					<div className="flex-grow flex flex-col p-4 ">
						{dialogoAlumno.map((msg, index) => (
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
									className="border-solid border-2 rounded-lg w-full p-2 pl-4 pr-14 outline-0 hover:cursor-not-allowed"
									type="text"
									placeholder="Envía un mensaje"
									value={mensaje}
									onChange={(e) => setMensaje(e.target.value)}
									disabled
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
			</div>
		</Modal>
	);
};

export default ModalVerChatAlumno;
