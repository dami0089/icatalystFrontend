/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const DialogoContext = createContext();

const DialogoProvider = ({ children }) => {
	const [dialogo, setDialogo] = useState([]);
	const [idAlumnoVerChat, setIdAlumnoVerChat] = useState("");
	const [idDialogo, setIdDialogo] = useState("");
	const [modalVerDialogoAlumno, setModalVerDialogoAlumno] = useState(false);

	const handleModlaVerChatAlumno = async () => {
		setModalVerDialogoAlumno(!modalVerDialogoAlumno);
	};

	const flowDialogo = async (mensaje, usuario, id_actividad, id_dialogo) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await clienteAxios.post(
				`/dialogo/`,
				{ mensaje, usuario, id_actividad, id_dialogo },
				config
			);
			console.log(data);
			setDialogo(data);
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.response.data.msg}`,
			});
		}
	};

	const dialogoInicial = async (usuario, id_actividad) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await clienteAxios.post(
				`/dialogo/iniciar`,
				{ usuario, id_actividad },
				config
			);
			console.log(data);
			setDialogo(data);
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.response.data.msg}`,
			});
		}
	};

	const dialogoInicialProfe = async (usuario, id_actividad) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await clienteAxios.post(
				`/dialogo/iniciar-profesor`,
				{ usuario, id_actividad },
				config
			);
			console.log(data);
			setDialogo(data);
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.response.data.msg}`,
			});
		}
	};

	const [dialogosActividad, setDialogosActividad] = useState([]);

	const obtenerDialogosActividad = async (id) => {
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

			const { data } = await clienteAxios(`/dialogo/dialogos/${id}`, config);
			console.log(data);
			setDialogosActividad(data);
		} catch (error) {
			console.log(error);
		}
	};

	const [dialogoAlumno, setDialogoAlumno] = useState([]);

	const obtenerDialogoAlumno = async (id) => {
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

			const { data } = await clienteAxios(
				`/dialogo/obtener-dialogo-alumno/${id}`,
				config
			);
			console.log(data.chat);
			setDialogoAlumno(data.chat);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<DialogoContext.Provider
			value={{
				dialogo,
				flowDialogo,
				dialogoInicialProfe,
				dialogoInicial,
				dialogosActividad,
				obtenerDialogosActividad,
				handleModlaVerChatAlumno,
				modalVerDialogoAlumno,
				idAlumnoVerChat,
				setIdAlumnoVerChat,
				idDialogo,
				setIdDialogo,
				dialogoAlumno,
				obtenerDialogoAlumno,
			}}
		>
			{children}
		</DialogoContext.Provider>
	);
};

export { DialogoProvider };
export default DialogoContext;
