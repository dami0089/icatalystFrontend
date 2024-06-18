import { useContext } from "react";
import ActividadesContext from "../context/ActividadesProvider";

const useActividades = () => {
	return useContext(ActividadesContext);
};

export default useActividades;
