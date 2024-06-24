/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import CardEstrategy from "../components/CardBackground/CardEstrategy";
import Carousel from "../components/Carousel/Carousel";
import useEstrategias from "../hooks/useEstrategias";

export function HomeAlumnos() {
  const strategies = [
    {
      activityImage:
        "https://docentesyeducacion.com/wp-content/uploads/2023/12/x8q3egP4gx8.jpg",
      activityName: "División de dos cifras",
      teacherImage:
        "https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg",
      teacherName: "Juan Pérez",
      subject: "Matemática",
      navigateTo: "/actividad/lasjfñkdjf",
    },
    {
      activityImage:
        "https://docentesyeducacion.com/wp-content/uploads/2023/12/x8q3egP4gx8.jpg",
      activityName: "División de dos cifras",
      teacherImage:
        "https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg",
      teacherName: "Juan Pérez",
      subject: "Matemática",
      navigateTo: "/actividad/lasjfñkdjf",
    },
    {
      activityImage:
        "https://docentesyeducacion.com/wp-content/uploads/2023/12/x8q3egP4gx8.jpg",
      activityName: "División de dos cifras",
      teacherImage:
        "https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg",
      teacherName: "Juan Pérez",
      subject: "Matemática",
      navigateTo: "/actividad/lasjfñkdjf",
    },
    {
      activityImage:
        "https://docentesyeducacion.com/wp-content/uploads/2023/12/x8q3egP4gx8.jpg",
      activityName: "División de dos cifras",
      teacherImage:
        "https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg",
      teacherName: "Juan Pérez",
      subject: "Matemática",
      navigateTo: "/actividad/lasjfñkdjf",
    },
    {
      activityImage:
        "https://docentesyeducacion.com/wp-content/uploads/2023/12/x8q3egP4gx8.jpg",
      activityName: "División de dos cifras",
      teacherImage:
        "https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg",
      teacherName: "Juan Pérez",
      subject: "Matemática",
      navigateTo: "/actividad/lasjfñkdjf",
    },
  ];

  const { estrategias, obtenerEstrategias } = useEstrategias();
  useEffect(() => {
    const getEstrategias = async () => {
      await obtenerEstrategias();
    };
    getEstrategias();
  }, []);
  return (
    <div className="container mt-5 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6">
        {strategies.map(({activityImage, activityName, teacherImage, teacherName, subject, navigateTo}) => (
          <ActivityCard
            activityImage={activityImage}
            activityName={activityName}
			teacherImage={teacherImage}
			teacherName={teacherName}
			subject={subject}
			navigateTo={navigateTo}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeAlumnos;
