import { useEffect } from "react";
import CardBackground from "../components/CardBackground/CardBackground";
import CardEstrategy from "../components/CardBackground/CardEstrategy";
import useEstrategias from "../hooks/useEstrategias";
import useActividades from "../hooks/useActividades";
import useAuth from "../hooks/useAuth";

export function HomeProfes() {
	const { estrategias, obtenerEstrategias } = useEstrategias();

	const { actividadesProfe, obtenerActividadesProfesor } = useActividades();

	const { auth } = useAuth();

	useEffect(() => {
		const obtenerEstr = async () => {
			await obtenerEstrategias();
			await obtenerActividadesProfesor(auth._id);
		};
		obtenerEstr();
	}, []);

	return (
		<div className="p-[50px]">
			<section className="mb-10 bg-neutral-300/50 p-5 rounded-lg">
				<h2 className="text-3xl font-semibold">Estrategias</h2>
				<p className="text-base font-extralight mb-2">
					Selecciona una estrategia para armar tu actividad
				</p>

				<div className="flex gap-4">
					{estrategias.map((estrategia) => (
						<CardEstrategy
							key={estrategia._id}
							title={estrategia.nombre}
							description={estrategia.explicacion}
							background={`/public/${estrategia.imagen}`}
							backgroundColor={"bg-[#4F6D7A]/85"} // Ejemplo de color de fondo, ajusta según necesites
							navigateTo={`/crear-actividad/${estrategia._id}`}
						/>
					))}
				</div>
			</section>
			<section>
				<h2 className="text-3xl font-semibold">Tus Actividades</h2>
				<p className="text-base font-extralight mb-2">
					Este es tu listado de actividades en curso
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{actividadesProfe.map((actividad) => (
						<CardBackground
							key={actividad._id}
							title={actividad.nombreActividad}
							description={actividad.explicacion}
							background={`/${actividad.imagen}`}
							backgroundColor={"bg-[#4F6D7A]/85"}
							navigateTo={`/actividades/${actividad._id}`}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export default HomeProfes;
