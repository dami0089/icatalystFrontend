/* eslint-disable no-mixed-spaces-and-tabs */
import { Outlet } from "react-router-dom";

// import useAuth from "@/hooks/useAuth";
// import Cargando from "@/components/Cargando";
import DashboardNavbar from "../widgets/layout/dashboard-navbar";
import Footer from "../widgets/layout/footer";

const RutaProtegida = () => {
	return (
		<>
			<div className="flex min-h-screen flex-col bg-gray-50">
				<div className="flex-grow p-4">
					<DashboardNavbar />
					<Outlet />
				</div>
				<div className="text-blue-gray-600">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default RutaProtegida;
