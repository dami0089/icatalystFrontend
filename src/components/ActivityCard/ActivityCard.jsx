/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-children-prop */

const ActivityCard = ({
	activityImage,
	activityName,
	navigateTo,
	teacherImage,
	teacherName,
	estado,
}) => {
	const navigate = useNavigate();

	console.log(teacherName);

	return (
		<>
			<div
				className="w-full sm:w-90 rounded overflow-hidden shadow-lg bg-slate-50 cursor-pointer"
				onClick={() => navigate(`/actividad/${navigateTo}`)}
			>
				{/* Top section with background image and title */}
				<div className="relative">
					<img
						className="w-full h-48 object-cover rounded-t"
						src={activityImage}
						alt={activityName}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-transparent rounded-t"></div>
					<div className="absolute top-0 left-0 m-4">
						<h2 className="text-lg font-bold text-white">{activityName}</h2>
					</div>
				</div>
				{/* Bottom section with teacher info */}
				<div className="p-4 flex ">
					<img
						className="w-12 h-12 rounded-full mr-4"
						src={teacherImage}
						alt={teacherName && teacherName.nombre}
					/>
					<div>
						<h3 className="text-lg font-bold">
							{teacherName && teacherName.nombre}{" "}
							{teacherName && teacherName.apellido}
						</h3>
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								className="mr-2 text-green-900"
							>
								<g fill="none" stroke="currentColor" strokeLinecap="round">
									<path d="M12 21a9 9 0 1 0-6.364-2.636" />
									<path d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2c-.44.02-.803-.343-1.527-1.067L8 13" />
								</g>
							</svg>
							<p className="text-sm text-green-900">{estado}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ActivityCard;
