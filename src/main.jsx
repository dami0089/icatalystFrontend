import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ProfesoresProvider } from "./context/ProfesoresProvider.jsx";
import ErrorBoundary from "./components/error/error.jsx";
import { EscuelasProvider } from "./context/EscuelasProvider.jsx";
import { EstrategiasProvider } from "./context/EstrategiasProvider.jsx";
import { AlumnosProvider } from "./context/AlumnosProvider.jsx";
import { MateriasProvider } from "./context/MateriasProvider.jsx";
import { ActividadesProvider } from "./context/ActividadesProvider.jsx";
import { DialogoProvider } from "./context/DialogoProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AuthProvider>
			<ProfesoresProvider>
				<MateriasProvider>
					<EscuelasProvider>
						<EstrategiasProvider>
							<AlumnosProvider>
								<ActividadesProvider>
									<DialogoProvider>
										<ErrorBoundary>
											<App />
										</ErrorBoundary>
									</DialogoProvider>
								</ActividadesProvider>
							</AlumnosProvider>
						</EstrategiasProvider>
					</EscuelasProvider>
				</MateriasProvider>
			</ProfesoresProvider>
		</AuthProvider>
	</BrowserRouter>
);
