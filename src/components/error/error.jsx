/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Aquí puedes agregar lógica adicional, como enviar errores a un servicio de registro de errores
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Puedes personalizar el mensaje de error que se muestra al usuario
			return <h1>¡Ups! Algo salió mal.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
