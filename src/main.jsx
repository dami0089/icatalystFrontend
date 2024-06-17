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

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProfesoresProvider>
					<EscuelasProvider>
						<EstrategiasProvider>
							<ErrorBoundary>
								<App />
							</ErrorBoundary>
						</EstrategiasProvider>
					</EscuelasProvider>
				</ProfesoresProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
