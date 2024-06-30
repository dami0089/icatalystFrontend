import { Route, Routes } from "react-router-dom";

import RutaProtegida from "./layouts/RutaProtegida";
import Home from "./pages/home";
import Profesores from "./pages/listadoProfesores";
import useAuth from "./hooks/useAuth";
import Escuelas from "./pages/escuelas";
import PrimerPassword from "./pages/auth/PrimerPassword";
import OlvidePassword from "./pages/auth/OlvidePassword";
import NuevoPassword from "./pages/auth/NuevoPassword";
import Login from "./pages/auth/loginPage";
import Estrategias from "./pages/estrategias";
import Alumnos from "./pages/alumnos";
import HomeProfes from "./pages/homeProfesores";
import SidekickComponent from "./components/activityExample/Activity";
import HomeAlumnos from "./pages/homeAlumnos";
import Actividades from "./pages/actividades";
import Materias from "./pages/materias";
import ChatLayout from "./layouts/ChatLayout";
import ChatAlumno from "./components/alumnos/ChatAlumno";
import VerActividadProfesor from "./components/activityExample/VerActividadProfesor";
import NuevaEstrategia from "./components/estrategias/NuevaEstrategia";

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

					<Route path="/listado-estrategias" element={<RutaProtegida />}>
						<Route index element={<Estrategias />} />
					</Route>

					<Route path="/nueva-estrategia" element={<RutaProtegida />}>
						<Route index element={<NuevaEstrategia />} />
					</Route>

					<Route path="/listado-alumnos" element={<RutaProtegida />}>
						<Route index element={<Alumnos />} />
					</Route>

					<Route path="/listado-materias" element={<RutaProtegida />}>
						<Route index element={<Materias />} />
					</Route>

					<Route path="/notificaciones" element={<RutaProtegida />}>
						<Route index element={<Home />} />
					</Route>
				</>
			) : auth.rol === "profesor" ? (
				<>
					<Route path="/inicio" element={<RutaProtegida />}>
						<Route index element={<HomeProfes />} />
					</Route>

					<Route path="/crear-actividad/:id" element={<RutaProtegida />}>
						<Route index element={<SidekickComponent />} />
					</Route>

					<Route path="/ver-actividad/:id" element={<RutaProtegida />}>
						<Route index element={<VerActividadProfesor />} />
					</Route>
				</>
			) : auth.rol === "alumno" ? (
				<>
					<Route path="/inicio" element={<RutaProtegida />}>
						<Route index element={<HomeAlumnos />} />
					</Route>

					<Route path="/actividades" element={<RutaProtegida />}>
						<Route index element={<Actividades />} />
					</Route>

					<Route path="/actividad/:id" element={<ChatLayout />}>
						<Route index element={<ChatAlumno />} />
					</Route>
				</>
			) : null}
		</Routes>
	);
}

export default App;
