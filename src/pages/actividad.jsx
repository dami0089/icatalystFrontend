import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Actividad() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between m-4">
        <button className="mr-auto" onClick={() => navigate(-1)}>🡨 Volver</button>
        <button className="md:hidden bg-blue-500 text-white py-1 px-2 rounded-lg" onClick={handleModalOpen}>
          Ver Descripción
        </button>
      </div>
      <div className="h-full">
        <div className="relative flex max-w-screen h-full rounded-lg border-solid border-2">
          <div className="w-full flex flex-col md:p-4">
            <div className="py-10 px-4 md:px-20">
              <div className="relative bg-gray-400/20 w-max py-2 px-4 pl-8 rounded-lg">
                <img
                  className="absolute rounded-full w-[30px] h-[30px] top-[-6px] left-[-6px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1m79JBqwoOt-fzl9jgxiOOkDM9q-wgDuow&s"
                  alt=""
                />
                <p className="text-sm">Hola!</p>
              </div>
            </div>
            <div className="mt-auto mx-auto w-full max-w-[90%] p-4 md:p-6 relative">
              <div className="relative">
                <input
                  className="border-solid border-2 rounded-lg w-full p-2 pl-4 pr-14 outline-0"
                  type="text"
                  name=""
                  id=""
                  placeholder="Envía un mensaje"
                />
                <img
                  width="30px"
                  height="30px"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  src="/public/imgs/send.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col w-[500px] border-l-solid border-l-2 p-6 border-l-gray-200">
            <img
              className="rounded-lg max-w-40 mx-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1m79JBqwoOt-fzl9jgxiOOkDM9q-wgDuow&s"
              alt=""
            />
            <h2 className="mt-4 text-xl font-semibold text-center">
              Historia de Argentina
            </h2>
            <p className="mt-1 text-sm font-thin text-center">
              El general Güemes te relata la historia argentina y responde tus dudas
            </p>
            <div className="flex items-center mt-auto w-full">
              <img
                className="rounded-full w-14 h-14"
                src="https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg"
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-4 border-2 border-solid">
            <button className="absolute top-4 right-4 text-black" onClick={handleModalClose}>
              ✖
            </button>
            <img
              className="rounded-lg max-w-40 mx-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1m79JBqwoOt-fzl9jgxiOOkDM9q-wgDuow&s"
              alt=""
            />
            <h2 className="mt-4 text-xl font-semibold text-center">
              Historia de Argentina
            </h2>
            <p className="mt-1 text-sm font-thin text-center">
              El general Güemes te relata la historia argentina y responde tus dudas
            </p>
            <div className="flex items-center mt-14 w-full">
              <img
                className="rounded-full w-14 h-14"
                src="https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg"
                alt=""
              />
              <div className="ml-2">
                <p className="text-xs font-semibold">Damian Oliva</p>
                <p className="text-xs">Profesor de Química y Física de 1° año</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Actividad;
