import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardProfe = ({
	title,
	description,

	backgroundColor,
	navigateTo,
}) => {
	const navigate = useNavigate();

	// Función para truncar el texto y añadir puntos suspensivos
	const truncateText = (text, limit) => {
		if (text.length > limit) {
			return `${text.substring(0, limit)}...`;
		}
		return text;
	};

	return (
		<div
			className="flex flex-col justify-between rounded-lg shadow-lg max-w-sm cursor-pointer p-5 self-stretch transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-[350px] w-[300px] overflow-visible "
			onClick={() => {
				console.log(navigateTo);
				navigate(navigateTo);
			}}
		>
			<div className="flex flex-wrap items-center relative z-10">
				<p className="font-bold  text-lg text-neutral-50 drop-shadow-md mb-2">
					{title}
				</p>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-60 rounded-lg"></div>
			<div
				className={`${backgroundColor} rounded-lg p-4 relative z-20 text-white mt-4`}
			>
				<p className="text-lg" title={description}>
					{truncateText(description, 75)}
				</p>
			</div>
		</div>
	);
};

export default CardProfe;
