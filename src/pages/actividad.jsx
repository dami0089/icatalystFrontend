import { useEffect } from "react";
import CardEstrategy from "../components/CardBackground/CardEstrategy";
import Carousel from "../components/Carousel/Carousel";

export function Actividad() {
  return (
    <div class="h-full p-2">
      <div class="flex max-w-screen h-full rounded-lg border-solid border-2">
        <div className="w-full flex flex-col">
          <div className="py-10 px-20">
            <div className="relative bg-gray-400/20 w-max py-2 px-4 pl-8 rounded-lg">
              <img
                className="absolute rounded-full w-[30px] h-[30px] top-[-6px] left-[-6px]"
                src="https://statics.eleconomista.com.ar/2022/06/62a74e0c4a6cb.jpg"
                alt=""
              />
              <p className="text-sm">Hola!</p>
            </div>
          </div>
          <div className="mt-auto mx-auto w-full max-w-[90%] p-6 relative">
            <img
              width="30px"
              height="30px"
              className="absolute right-[34px] top-[30px] cursor-pointer"
              src="/public/imgs/send.svg"
              alt=""
            />
            <input
              className="border-solid border-2 rounded-lg w-full p-2 outline-0"
              type="text"
              name=""
              id=""
              placeholder="Envía un mensaje"
            />
          </div>
        </div>
        <div className="flex flex-col w-[500px] border-l-solid border-l-2 p-6">
          <img
            className="rounded-lg"
            src="https://statics.eleconomista.com.ar/2022/06/62a74e0c4a6cb.jpg"
            alt=""
          />

          <h2 className="mt-4 text-xl font-semibold text-center">
            Historia de Argentina
          </h2>
          <p className="mt-1 text-sm font-thin text-center">
            El general Güemes te relata la historia argentina y responde tus
            dudas
          </p>
          <div className="flex items-center mt-auto w-full">
            <img
              width="80px"
              height="80px"
              className="rounded-lg"
              src="https://img.freepik.com/foto-gratis/hombre-sonriente-brazos-cruzados-posando_23-2148306586.jpg?t=st=1718688196~exp=1718691796~hmac=a80929d93a95dbffe9b1c27e3aed750a3b628c1faf0c9b2ba2242e6543f46a0b&w=996"
              alt=""
            />
            <div className="ml-2">
              <p className="text-xs font-semibold">Damian Oliva</p>
              <p className="text-xs">Profesor de Química y Física de 1° año</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actividad;
`{
    title: "Historia de Argentina",
    description:
      "El general Güemes te relata la historia argentina y responde tus dudas",
    background:
      "https://statics.eleconomista.com.ar/2022/06/62a74e0c4a6cb.jpg",
    backgroundColor: "",
  },`;
