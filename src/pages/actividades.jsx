import { useEffect } from "react";
import CardEstrategy from "../components/CardBackground/CardEstrategy";
import Carousel from "../components/Carousel/Carousel";

export function Actividades() {
  const actividades = [
    {
      title: "Historia de Argentina",
      description:
        "El general Güemes te relata la historia argentina y responde tus dudas",
      background:
        "https://statics.eleconomista.com.ar/2022/06/62a74e0c4a6cb.jpg",
      backgroundColor: "",
    },
    {
      title: "Sumar y restar",
      description: "Ejercicios interactivos de suma y resta",
      background:
        "https://image.slidesharecdn.com/pptsumasyrestas-150506074435-conversion-gate02/85/sumas-y-restas-para-ninos-pequenos-1-320.jpg",
      backgroundColor: "",
    },
  ];
  return (
    <>
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-10">Escogé una actividad</h2>
        <Carousel
          children={actividades.map(({ title, description, background }) => {
            return (
              <CardEstrategy
                title={title}
                description={description}
                background={background}
                navigateTo="/actividad/332432ab324"
              ></CardEstrategy>
            );
          })}
        ></Carousel>
      </div>
    </>
  );
}

export default Actividades;
