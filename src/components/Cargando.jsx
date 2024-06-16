import useAuth from "../hooks/useAuth";
import animation from "../Lotties/Animation - 1718466534505.json";
import Lottie from "lottie-react";

const Cargando = () => {
	const { cargandoModal } = useAuth();

	return (
		cargandoModal && (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
				<Lottie
					loop
					autoplay
					style={{ width: "100%", maxWidth: "400px", height: "auto" }}
					animationData={animation}
				/>
			</div>
		)
	);
};

export default Cargando;
