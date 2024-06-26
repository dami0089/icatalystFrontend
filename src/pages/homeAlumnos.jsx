/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import useActividades from "../hooks/useActividades";
import useAuth from "../hooks/useAuth";

export function HomeAlumnos() {
	const { actividadesEscuela, obtenerActividadesEscuela } = useActividades();
	const teacherImage = "/imgs/36506d4a22a9d5cbb4d4c5db7bd1d1e1.webp.jpeg";
	const teacherName = "Juan Pérez";

	const { auth } = useAuth();

	useEffect(() => {
		const getEstrategias = async () => {
			await obtenerActividadesEscuela(auth._id);
		};
		getEstrategias();
	}, []);

	return (
		<div className="container max-h-max mt-5 mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6">
				{actividadesEscuela.map(
					({ imagen, nombreActividad, profesor, _id, estado }) => (
						<ActivityCard
							key={_id}
							activityImage={`/${imagen}`}
							activityName={nombreActividad}
							teacherImage={teacherImage}
							teacherName={profesor}
							navigateTo={_id}
							estado={estado}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default HomeAlumnos;
