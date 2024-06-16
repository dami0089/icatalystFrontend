import { useContext } from "react";
import EscuelaContext from "../context/EscuelasProvider";

const useEscuelas = () => {
	return useContext(EscuelaContext);
};

export default useEscuelas;
