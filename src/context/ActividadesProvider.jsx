/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const ActividadesContext = createContext();

//  OJO QUE COPIE DE ESTRATEGIAS Y SOLO CAMBIE EL GET
//  OJO QUE COPIE DE ESTRATEGIAS Y SOLO CAMBIE EL GET
//  OJO QUE COPIE DE ESTRATEGIAS Y SOLO CAMBIE EL GET


const ActividadesProvider = ({ children }) => {
	const [modalNuevaActividad, setModalNuevaActividad] = useState(false);
	const [nombreActividad, setNombreActividad] = useState("");
	const [explicacionActividad, setExplicacionActividad] = useState("");
	const [sistemaActividad, setSistemaActividad] = useState("");
	const [fileActividad, setFileActividad] = useState([]);
	const [actualizarActividades, setActualizarActividades] = useState(false);
	const [idActividadEditar, setIdActividadEditar] = useState("");
	const [modalEditarActividad, setModalEditarActividad] = useState(false);

	const handleModalEditarActividad = () => {
		setModalEditarActividad(!modalEditarActividad);
	};

	const handleModalNuevaActividad = () => {
		setModalNuevaActividad(!modalNuevaActividad);
	};

	const nuevaActividad = async (formData) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "multipart/form-data", // Asegúrate de especificar que estás enviando datos multipart
				},
			};
			const { data } = await clienteAxios.post(
				`/Actividades/nueva-Actividad/`,
				formData,
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
			});
		}
	};

	const [Actividades, setActividades] = useState([]);

	const obtenerActividades = async () => {
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
				`/Actividades/obtener-Actividades`,
				config
			);
			console.log(data);
			setActividades(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ActividadesContext.Provider
			value={{
				modalNuevaActividad,
				handleModalNuevaActividad,
				explicacionActividad,
				setExplicacionActividad,
				sistemaActividad,
				setSistemaActividad,
				fileActividad,
				setFileActividad,
				nombreActividad,
				setNombreActividad,
				nuevaActividad,
				Actividades,
				obtenerActividades,
				actualizarActividades,
				setActualizarActividades,
				idActividadEditar,
				setIdActividadEditar,
				modalEditarActividad,
				handleModalEditarActividad,
			}}
		>
			{children}
		</ActividadesContext.Provider>
	);
};

export { ActividadesProvider };
export default ActividadesContext;
