/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const EscuelaContext = createContext();

const EscuelasProvider = ({ children }) => {
	const [modalAgregarEscuela, setModalAgregarEscuela] = useState(false);
	const [modalEditarEscuela, setModalEditarEscuela] = useState(false);
	const [nombreEscuela, setNombreEscuela] = useState("");
	const [actualizarListado, setActualizarListado] = useState(false);

	const handleModalAgregarEscuela = () => {
		setModalAgregarEscuela(!modalAgregarEscuela);
	};

	const handleModalEditarEscuela = () => {
		setModalEditarEscuela(!modalEditarEscuela);
	};

	const nuevaEscuela = async (nombre) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await clienteAxios.post(
				`escuelas/nueva-escuela/`,
				{ nombre },
				config
			);

			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `${data.msg}`,
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.response.data.msg}`,
				footer: '<a href="#">Why do I have this issue?</a>',
			});
		}
	};

	const [escuelas, setEscuelas] = useState([]);

	const obtenerEscuelas = async () => {
		//obtiene todos los casos procesados!!
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			};

			const { data } = await clienteAxios(`/escuelas/obtener-escuelas`, config);
			setEscuelas(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<EscuelaContext.Provider
			value={{
				handleModalAgregarEscuela,
				modalAgregarEscuela,
				handleModalEditarEscuela,
				modalEditarEscuela,
				nuevaEscuela,
				nombreEscuela,
				setNombreEscuela,
				escuelas,
				obtenerEscuelas,
				actualizarListado,
				setActualizarListado,
			}}
		>
			{children}
		</EscuelaContext.Provider>
	);
};

export { EscuelasProvider };
export default EscuelaContext;
