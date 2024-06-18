/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const ProfesoresContext = createContext();

const ProfesoresProvider = ({ children }) => {
	const [modalAgregarProfesor, setModalAgregarProfesor] = useState(false);
	const [modalEditarProfesor, setModalEditarProfesor] = useState(false);
	const [nombreProfesor, setNombreProfesor] = useState("");
	const [apellidoProfesor, setApellidoProfesor] = useState("");
	const [emailProfesor, setEmailProfesor] = useState("");
	const [idEscuela, setIdEscuela] = useState("");
	const [actualizarListados, setActualizarListados] = useState(false);

	const handleModalAgregarProfesor = () => {
		setModalAgregarProfesor(!modalAgregarProfesor);
	};

	const handleModalEditarProfesor = () => {
		setModalEditarProfesor(!modalEditarProfesor);
	};

	const nuevoProfesor = async (nombre, apellido, email, escuela) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await clienteAxios.post(
				`/profesores/nuevo-profesor/`,
				{ nombre, apellido, email, escuela },
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

	const [profesores, setProfesores] = useState([]);

	const obtenerProfesores = async () => {
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
				`/profesores/obtener-profesores`,
				config
			);
			setProfesores(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ProfesoresContext.Provider
			value={{
				modalAgregarProfesor,
				handleModalAgregarProfesor,
				modalEditarProfesor,
				handleModalEditarProfesor,
				nuevoProfesor,
				profesores,
				obtenerProfesores,
				nombreProfesor,
				setNombreProfesor,
				apellidoProfesor,
				setApellidoProfesor,
				emailProfesor,
				setEmailProfesor,
				idEscuela,
				setIdEscuela,
				actualizarListados,
				setActualizarListados,
			}}
		>
			{children}
		</ProfesoresContext.Provider>
	);
};

export { ProfesoresProvider };
export default ProfesoresContext;
