import { useContext } from "react";
import DialogoContext from "../context/DialogoProvider";

const useDialogo = () => {
	return useContext(DialogoContext);
};

export default useDialogo;
