import React from "react";
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

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProfesoresProvider>
					<MateriasProvider>
						<EscuelasProvider>
							<EstrategiasProvider>
								<AlumnosProvider>
									<ActividadesProvider>
										<ErrorBoundary>
											<App />
										</ErrorBoundary>
									</ActividadesProvider>
								</AlumnosProvider>
							</EstrategiasProvider>
						</EscuelasProvider>
					</MateriasProvider>
				</ProfesoresProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
