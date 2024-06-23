import { useContext } from "react";
import MateriasContext from "../context/MateriasProvider";

const useMaterias = () => {
	return useContext(MateriasContext);
};

export default useMaterias;
