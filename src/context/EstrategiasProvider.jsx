/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import clienteAxios from "../configs/clinteAxios";
import Swal from "sweetalert2";

const EstrategiasContext = createContext();

const EstrategiasProvider = ({ children }) => {
	const [modalNuevaEstrategia, setModalNuevaEstrategia] = useState(false);
	const [nombreEstrategia, setNombreEstrategia] = useState("");
	const [explicacionEstrategia, setExplicacionEstrategia] = useState("");
	const [sistemaEstrategia, setSistemaEstrategia] = useState("");
	const [fileEstrategia, setFileEstrategia] = useState([]);
	const [actualizarEstrategias, setActualizarEstrategias] = useState(false);
	const [idEstrategiaEditar, setIdEstrategiaEditar] = useState("");
	const [modalEditarEstrategia, setModalEditarEstrategia] = useState(false);

	const handleModalEditarEstrategia = () => {
		setModalEditarEstrategia(!modalEditarEstrategia);
	};

	const handleModalNuevaEstrategia = () => {
		setModalNuevaEstrategia(!modalNuevaEstrategia);
	};

	const nuevaEstrategia = async (formData) => {
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
				`/estrategias/nueva-estrategia/`,
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

	const [estrategias, setEstrategias] = useState([]);

	const obtenerEstrategias = async () => {
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
				`/estrategias/obtener-estrategias`,
				config
			);
			setEstrategias(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<EstrategiasContext.Provider
			value={{
				modalNuevaEstrategia,
				handleModalNuevaEstrategia,
				explicacionEstrategia,
				setExplicacionEstrategia,
				sistemaEstrategia,
				setSistemaEstrategia,
				fileEstrategia,
				setFileEstrategia,
				nombreEstrategia,
				setNombreEstrategia,
				nuevaEstrategia,
				estrategias,
				obtenerEstrategias,
				actualizarEstrategias,
				setActualizarEstrategias,
				idEstrategiaEditar,
				setIdEstrategiaEditar,
				modalEditarEstrategia,
				handleModalEditarEstrategia,
			}}
		>
			{children}
		</EstrategiasContext.Provider>
	);
};

export { EstrategiasProvider };
export default EstrategiasContext;
