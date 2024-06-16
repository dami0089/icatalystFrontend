import { Route, Routes } from "react-router-dom";

import RutaProtegida from "./layouts/RutaProtegida";
import Home from "./pages/home";
import Profesores from "./pages/listadoProfesores";
import EjemplosPage from "./pages/ejemplosPage";
import ActivityExample from "./pages/ejemploActividad";
import useAuth from "./hooks/useAuth";
import Escuelas from "./pages/escuelas";
import PrimerPassword from "./pages/auth/PrimerPassword";
import OlvidePassword from "./pages/auth/OlvidePassword";
import NuevoPassword from "./pages/auth/NuevoPassword";
import Login from "./pages/auth/loginPage";

function App() {
	const { auth } = useAuth();
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="crear-password/:token" element={<PrimerPassword />} />
			<Route path="olvide-password" element={<OlvidePassword />} />
			<Route path="olvide-password/:token" element={<NuevoPassword />} />

			{auth.rol === "admin" ? (
				<>
					<Route path="/inicio" element={<RutaProtegida />}>
						<Route index element={<Home />} />
					</Route>

					<Route path="/listado-profesores" element={<RutaProtegida />}>
						<Route index element={<Profesores />} />
					</Route>

					<Route path="/listado-escuelas" element={<RutaProtegida />}>
						<Route index element={<Escuelas />} />
					</Route>

					<Route path="/listado-actividades" element={<RutaProtegida />}>
						<Route index element={<Home />} />
					</Route>

					<Route path="/listado-alumnos" element={<RutaProtegida />}>
						<Route index element={<Home />} />
					</Route>

					<Route path="/notificaciones" element={<RutaProtegida />}>
						<Route index element={<Home />} />
					</Route>
				</>
			) : auth.rol === "profesor" ? (
				<>
					<Route path="/inicio" element={<RutaProtegida />}>
						<Route index element={<EjemplosPage />} />
					</Route>

					<Route path="/ejemplo-actividad" element={<RutaProtegida />}>
						<Route index element={<ActivityExample />} />
					</Route>
				</>
			) : auth.rol === "alumno" ? (
				<></>
			) : null}
		</Routes>
	);
}

export default App;
