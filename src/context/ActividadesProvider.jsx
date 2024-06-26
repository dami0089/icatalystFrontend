/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
	const [idProfesor, setIdProfesor] = useState("");
	const [idMateria, setIdMateria] = useState("");
	const [idEscuela, setIdEscuela] = useState("");
	const [templates, setTemplates] = useState([]);
	const [temperaturaActividad, setTemperaturaActividad] = useState("");
	const navigate = useNavigate();

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
					"Content-Type": "multipart/form-data",
				},
			};

			// Depuración: Imprimir el contenido de FormData
			for (let pair of formData.entries()) {
				console.log(pair[0] + ": " + pair[1]);
			}

			const { data } = await clienteAxios.post(
				`/actividades/agregar-actividad/`,
				formData,
				config
			);

			navigate(`/ver-actividad/${data.actividad._id}`);
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
				`/actividades/obtener-actividades`,
				config
			);
			console.log(data);
			setActividades(data);
		} catch (error) {
			console.log(error);
		}
	};

	const [actividadesProfe, setActividadesProfe] = useState([]);

	const obtenerActividadesProfesor = async (id) => {
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
				`/actividades/obtener-actividades-profesor/${id}`,
				config
			);
			console.log(data);
			setActividadesProfe(data);
		} catch (error) {
			console.log(error);
		}
	};

	const [actividadesEscuela, setActividadesEscuela] = useState([]);

	const obtenerActividadesEscuela = async (id) => {
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
				`/actividades/obtener-actividades-escuela/${id}`,
				config
			);
			console.log(data);
			setActividadesEscuela(data);
		} catch (error) {
			console.log(error);
		}
	};

	const [actividad, setActividad] = useState([]);

	const obtenerActividad = async (id) => {
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
				`/actividades/obtener-actividad/${id}`,
				config
			);

			setActividad(data);
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
				idProfesor,
				setIdProfesor,
				idMateria,
				setIdMateria,
				idEscuela,
				setIdEscuela,
				templates,
				setTemplates,
				temperaturaActividad,
				setTemperaturaActividad,
				actividadesProfe,
				obtenerActividadesProfesor,
				actividadesEscuela,
				obtenerActividadesEscuela,
				actividad,
				obtenerActividad,
			}}
		>
			{children}
		</ActividadesContext.Provider>
	);
};

export { ActividadesProvider };
export default ActividadesContext;
