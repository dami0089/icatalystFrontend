/* eslint-disable no-mixed-spaces-and-tabs */
import { Outlet } from "react-router-dom";

// import useAuth from "@/hooks/useAuth";
// import Cargando from "@/components/Cargando";
import DashboardNavbar from "../widgets/layout/dashboard-navbar";
import Footer from "../widgets/layout/footer";

const RutaProtegida = () => {
	return (
		<>
			<div className="flex max-h-max flex-col ">
				<div className="flex flex-col  max-h-max p-4">
					<DashboardNavbar />
					<Outlet />
				</div>
				<div className="text-blue-gray-600 ">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default RutaProtegida;
