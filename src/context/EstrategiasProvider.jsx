/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const EstrategiasContext = createContext();

const EstrategiasProvider = ({ children }) => {
	const [modalNuevaEstrategia, setModalNuevaEstrategia] = useState(false);

	const handleModalNuevaEstrategia = () => {
		setModalNuevaEstrategia(!modalNuevaEstrategia);
	};
	return (
		<EstrategiasContext.Provider
			value={{ modalNuevaEstrategia, handleModalNuevaEstrategia }}
		>
			{children}
		</EstrategiasContext.Provider>
	);
};

export { EstrategiasProvider };
export default EstrategiasContext;
