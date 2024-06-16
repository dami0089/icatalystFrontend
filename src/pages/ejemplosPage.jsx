import MainCardImage from "../components/MainCardImage/MainCardImage";
import robot from "../assets/robot.png";
import avatar from "../assets/avatar.png";
import brain from "../assets/brain.png";
import edu from "../assets/edu.png";
import sc from "../assets/sc.png";
import CardBackground from "../components/CardBackground/CardBackground";
import background from "../assets/illus.webp";
import TutorFollowCard from "../components/TutorFollowCard/TutorFollowCard";
import icon from "../assets/icon.jpg";
import Example1 from "../components/schoolaiICards/Example1";
import Example2 from "../components/schoolaiICards/Example2";
// import { useNavigate } from "react-router-dom";

// import Cargando from "@/components/Cargando";

export function EjemplosPage() {
	return (
		<>
			<div className="mt-10 flex flex-wrap justify-center gap-10">
				{/* <Cargando /> */}
			</div>
			<div className="mt-10 flex flex-wrap items-center justify-center gap-10">
				<MainCardImage
					title={"Actividad 1"}
					description={
						"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
					}
					image={robot}
				></MainCardImage>
				<CardBackground
					title={"Actividad 2"}
					description={
						"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
					}
					avatar={avatar}
					backgroundColor={"bg-blue-600/85"}
					background={background}
				></CardBackground>
				<div>
					<div className="mb-5">
						<TutorFollowCard
							name={"Juan Perez"}
							username={"jp2233"}
							avatar={icon}
						></TutorFollowCard>
					</div>
					<div className="mb-5">
						<TutorFollowCard
							name={"Juan Perez"}
							username={"jp2233"}
							avatar={icon}
						></TutorFollowCard>
					</div>
					<div className="mb-5">
						<TutorFollowCard
							name={"Juan Perez"}
							username={"jp2233"}
							avatar={icon}
						></TutorFollowCard>
					</div>
					<div className="mb-5">
						<TutorFollowCard
							name={"Juan Perez"}
							username={"jp2233"}
							avatar={icon}
						></TutorFollowCard>
					</div>
					<div>
						<TutorFollowCard
							name={"Juan Perez"}
							username={"jp2233"}
							avatar={icon}
						></TutorFollowCard>
					</div>
				</div>
			</div>

			<div className="mt-10 flex flex-wrap items-center justify-center gap-10 bg-white rounded-2xl shadow-xl p-5 w-[1250px] ml-20">
				<Example1
					title={"Actividad 1"}
					description={
						"Descripción de la actividad 1, lorem ipsum dolor sit amet, consectetur adipiscing elit."
					}
					image={brain}
				></Example1>

				<Example1
					title={"Actividad 1"}
					description={
						"Descripción de la actividad 1, lorem ipsum dolor sit amet, consectetur adipiscing elit."
					}
					image={edu}
				></Example1>

				<Example1
					title={"Actividad 1"}
					description={
						"Descripción de la actividad 1, lorem ipsum dolor sit amet, consectetur adipiscing elit."
					}
					image={sc}
				></Example1>
			</div>

			<div className="mt-10 flex flex-wrap items-center justify-center gap-10 bg-white rounded-2xl shadow-xl p-5 w-[1250px] ml-20">
				<Example2
					title={"Actividad 1"}
					description={"Descripción de la actividad 1"}
					image={brain}
				></Example2>

				<Example2
					title={"Actividad 2"}
					description={"Descripción de la actividad 1"}
					image={edu}
				></Example2>

				<Example2
					title={"Actividad 3"}
					description={"Descripción de la actividad 1"}
					image={sc}
				></Example2>
			</div>
		</>
	);
}

export default EjemplosPage;
