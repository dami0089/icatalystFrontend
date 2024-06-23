/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const MateriasContext = createContext();

const MateriasProvider = ({ children }) => {
	const [modalAgregarMateria, setModalAgregarMateria] = useState(false);
	const [modalEditarMateria, setModalEditarMateria] = useState(false);
	const [nombreMateria, setNombreMateria] = useState("");
	const [lenguaMateria, setLenguaMateria] = useState("");
	const [idMateria, setIdMateria] = useState("");
	const [gradoMateria, setGradoMateria] = useState("");
	const [actualizarListados, setActualizarListados] = useState(false);
	const [materiasAsignadas, setMateriasAsignadas] = useState([]);

	const handleModalAgregarMateria = () => {
		setModalAgregarMateria(!modalAgregarMateria);
	};

	const handleModalEditarMateria = () => {
		setModalEditarMateria(!modalEditarMateria);
	};

	const nuevaMateria = async (nombre, lengua, grado) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) return;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await clienteAxios.post(
				`/materias/nueva-materia/`,
				{ nombre, lengua, grado },
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

	const [materias, setMaterias] = useState([]);

	const obtenerMaterias = async () => {
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

			const { data } = await clienteAxios(`/materias/obtener-materias`, config);
			setMaterias(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<MateriasContext.Provider
			value={{
				nuevaMateria,
				materias,
				obtenerMaterias,
				nombreMateria,
				setNombreMateria,
				lenguaMateria,
				setLenguaMateria,
				idMateria,
				setIdMateria,
				handleModalAgregarMateria,
				modalAgregarMateria,
				handleModalEditarMateria,
				actualizarListados,
				setActualizarListados,
				materiasAsignadas,
				setMateriasAsignadas,
				gradoMateria,
				setGradoMateria,
			}}
		>
			{children}
		</MateriasContext.Provider>
	);
};

export { MateriasProvider };
export default MateriasContext;
