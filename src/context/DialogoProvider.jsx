/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const DialogoContext = createContext();

const DialogoProvider = ({ children }) => {
	const [dialogo, setDialogo] = useState([]);

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
			});
		}
	};

	return (
		<DialogoContext.Provider
			value={{
				dialogo,
				flowDialogo,
				dialogoInicial,
			}}
		>
			{children}
		</DialogoContext.Provider>
	);
};

export { DialogoProvider };
export default DialogoContext;
