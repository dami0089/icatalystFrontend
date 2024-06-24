/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const AlumnosContext = createContext();

const AlumnosProvider = ({ children }) => {
	const [modalNuevoAlumno, setModalNuevoAlumno] = useState(false);
	const [modalEditarAlumno, setModalEditarAlumno] = useState(false);
	const [nombreAlumno, setNombreAlumno] = useState("");
	const [apellidoAlumno, setApellidoAlumno] = useState("");
	const [emailAlumno, setEmailAlumno] = useState("");
	const [idEditarAlumno, setIdEditarAlumno] = useState("");
	const [escuelaAlumno, setEscuelaAlumno] = useState("");
	const [actualizarListado, setActualizarListado] = useState(false);
	const [gradoAlumno, setGradoAlumno] = useState("");

	const handleModalEditarAlumno = () => {
		setModalEditarAlumno(!modalEditarAlumno);
	};

	const handleModalNuevoAlumno = () => {
		setModalNuevoAlumno(!modalNuevoAlumno);
	};

	const nuevoAlumno = async (nombre, apellido, email, escuela, grado) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await clienteAxios.post(
				`alumnos/nuevo-alumno/`,
				{ nombre, apellido, email, escuela, grado },
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

	const [alumnos, setAlumnos] = useState([]);

	const obtenerAlumnos = async () => {
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

			const { data } = await clienteAxios(`/alumnos/obtener-alumnos`, config);
			setAlumnos(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AlumnosContext.Provider
			value={{
				modalNuevoAlumno,
				handleModalNuevoAlumno,
				handleModalEditarAlumno,
				modalEditarAlumno,
				nombreAlumno,
				setNombreAlumno,
				apellidoAlumno,
				setApellidoAlumno,
				emailAlumno,
				setEmailAlumno,
				idEditarAlumno,
				setIdEditarAlumno,
				nuevoAlumno,
				alumnos,
				obtenerAlumnos,
				escuelaAlumno,
				setEscuelaAlumno,
				actualizarListado,
				setActualizarListado,
				gradoAlumno,
				setGradoAlumno,
			}}
		>
			{children}
		</AlumnosContext.Provider>
	);
};

export { AlumnosProvider };
export default AlumnosContext;
