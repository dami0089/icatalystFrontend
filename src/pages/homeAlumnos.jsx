/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import useProfesores from "../hooks/useProfesores";
import CardEstrategy from "../components/CardBackground/CardEstrategy";
import Carousel from "../components/Carousel/Carousel";

export function HomeAlumnos() {
	const { profesores, obtenerProfesores } = useProfesores();
	useEffect(() => {
		const obtenerProfes = async () => {
			await obtenerProfesores();
		};
		obtenerProfes();
	}, []);
	return (
		<>
			<div className="p-10">
				<h2 className="text-2xl font-bold mb-10">Seleccioná el profesor</h2>
				<Carousel
					children={profesores.map((profe) => {
						return (
							<CardEstrategy
								title={`${profe.nombre} ${profe.apellido}`}
								description={"Profesor de Química y Física de 1° año"}
								background={
									"https://img.freepik.com/foto-gratis/hombre-sonriente-brazos-cruzados-posando_23-2148306586.jpg?t=st=1718688196~exp=1718691796~hmac=a80929d93a95dbffe9b1c27e3aed750a3b628c1faf0c9b2ba2242e6543f46a0b&w=996"
								}
								navigateTo={"/actividades"}
							></CardEstrategy>
						);
					})}
				></Carousel>
			</div>
		</>
	);
}

export default HomeAlumnos;
