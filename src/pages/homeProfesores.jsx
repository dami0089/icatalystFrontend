import { useEffect } from "react";
import CardBackground from "../components/CardBackground/CardBackground";
import CardEstrategy from "../components/CardBackground/CardEstrategy";
import useEstrategias from "../hooks/useEstrategias";

export function HomeProfes() {
	const { estrategias, obtenerEstrategias } = useEstrategias();

	useEffect(() => {
		const obtenerEstr = async () => {
			await obtenerEstrategias();
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

				<div className="flex gap-4">
					<CardBackground
						title={"Actividad 1"}
						description={"Esta es la actividad 1"}
						background={
							"https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg"
						}
						backgroundColor={"bg-[#4F6D7A]/85"}
						navigateTo={""}
					></CardBackground>

					<CardBackground
						title={"Actividad 2"}
						description={"Esta es la actividad 2"}
						background={
							"https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg"
						}
						backgroundColor={"bg-[#4F6D7A]/85"}
						navigateTo={""}
					></CardBackground>

					<CardBackground
						title={"Actividad 3"}
						description={"Esta es la actividad 3"}
						background={
							"https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg"
						}
						backgroundColor={"bg-[#4F6D7A]/85"}
						navigateTo={""}
					></CardBackground>
				</div>
			</section>
		</div>
	);
}

export default HomeProfes;
