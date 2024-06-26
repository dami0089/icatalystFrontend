/* eslint-disable react/prop-types */

const CardBackground = ({
	title,
	description,
	background,
	backgroundColor,
}) => {
	const cardStyle = {
		position: "relative", // Agregar posición relativa para que los pseudo-elementos se posicionen correctamente
		backgroundImage: `url(${background})`,
		backgroundSize: "cover",
	};

	const overlayStyle = {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.6)", // Color oscuro con opacidad
		borderRadius: "inherit", // Heredar el redondeo de la tarjeta
	};

	const contentStyle = {
		position: "relative", // Agregar posición relativa para que los elementos secundarios se posicionen correctamente
		zIndex: 1, // Asegurarse de que el contenido esté por encima del overlay oscuro
	};

	const truncateText = (text, limit) => {
		if (text.length > limit) {
			return `${text.substring(0, limit)}...`;
		}
		return text;
	};

	return (
		<div
			style={cardStyle}
			className="flex flex-col justify-between rounded-lg shadow-lg max-w-sm cursor-pointer p-6 self-stretch transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-[300px] h-[200px]"
		>
			<div className="flex flex-wrap items-center" style={contentStyle}>
				<p className="font-bold  text-lg text-neutral-50 drop-shadow-md mb-2">
					{title}
				</p>
			</div>
			<div style={overlayStyle}></div>{" "}
			{/* Pseudo-elemento para el overlay oscuro */}
			<div
				className={`${backgroundColor} rounded-lg p-4 relative z-10`}
				style={contentStyle}
			>
				<p className="text-lg" title={description}>
					{truncateText(description, 40)}
				</p>
			</div>
		</div>
	);
};

export default CardBackground;
