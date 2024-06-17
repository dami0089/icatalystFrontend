import { useContext } from "react";
import EstrategiasContext from "../context/EstrategiasProvider";

const useEstrategias = () => {
	return useContext(EstrategiasContext);
};

export default useEstrategias;
