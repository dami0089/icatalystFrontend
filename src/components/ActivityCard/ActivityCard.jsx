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
}) => {
	const navigate = useNavigate();

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
				<div className="p-4 flex items-center">
					<img
						className="w-12 h-12 rounded-full mr-4"
						src={teacherImage}
						alt={teacherName}
					/>
					<div>
						<h3 className="text-lg font-bold">{teacherName}</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default ActivityCard;
