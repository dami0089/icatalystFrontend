/* eslint-disable no-mixed-spaces-and-tabs */
import { Outlet } from "react-router-dom";

// import useAuth from "@/hooks/useAuth";
// import Cargando from "@/components/Cargando";
import DashboardNavbar from "../widgets/layout/dashboard-navbar";
import Footer from "../widgets/layout/footer";

const RutaProtegida = () => {
	// const { auth, cargando } = useAuth();

	// if (cargando) return <Cargando />;

	return (
		<>
			{/* {(auth._id && auth.rol === "superAdmin") ||
			auth.rol === "administrador" ||
			auth.rol === "consejo" ? (
				<div className="flex min-h-screen flex-col bg-blue-gray-50/50">
					<div className="flex-grow p-4">
						<DashboardNavbar />
						<Outlet />
					</div>
					<div className="text-blue-gray-600">
						<Footer />
					</div>
				</div>
			) : (auth._id && auth.rol === "usuario") ||
			  auth.rol === "encargado" ||
			  auth.rol === "seguridad" ? (
				<div className="flex min-h-screen flex-col bg-blue-gray-50/50">
					<div className="flex-grow ">
						<DashboardNavbar />
						<Outlet />
					</div>
					<div className="text-blue-gray-600">
						<Footer />
					</div>
				</div>
			) : (
				<Navigate to="/" />
			)} */}
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
