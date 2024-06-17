import {
	Typography,
	Card,
	CardHeader,
	CardBody,
	Button,
} from "@material-tailwind/react";

import Cargando from "../components/Cargando";
import useAuth from "../hooks/useAuth";
import ListadoAlumnos from "../components/alumnos/ListadoAlumnos";
import ModalNuevoAlumno from "../components/alumnos/ModalNuevoAlumno";
import useAlumnos from "../hooks/useAlumnos";
import ModalEditarAlumno from "../components/alumnos/ModalEditarAlumno";

export function Alumnos() {
	const { cargandoModal } = useAuth();

	const { modalNuevoAlumno, handleModalNuevoAlumno, modalEditarAlumno } =
		useAlumnos();

	const handleModalAlumnos = () => {
		handleModalNuevoAlumno();
	};

	return (
		<div className="mt-12">
			<div className="mb-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4 ">
				<Card className="hover:cursor-pointer" onClick={handleModalAlumnos}>
					<Button
						className="absolute -mt-4 grid h-14  place-items-center bg-white text-black"
						style={{ pointerEvents: "none" }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							className="h-8 w-8"
						>
							<g
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								color="currentColor"
							>
								<path d="M2 2h14c1.886 0 2.828 0 3.414.586S20 4.114 20 6v6c0 1.886 0 2.828-.586 3.414S17.886 16 16 16H9m1-9.5h6M2 17v-4c0-.943 0-1.414.293-1.707S3.057 11 4 11h2m-4 6h4m-4 0v5m4-5v-6m0 6v5m0-11h6" />
								<path d="M6 6.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
							</g>
						</svg>
					</Button>
					<CardBody className="p-4 text-right">
						<Typography
							variant="small"
							className="font-normal text-blue-gray-600"
						>
							Nuevo alumno
						</Typography>
					</CardBody>
				</Card>
			</div>
			<div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
				<Card className="overflow-hidden xl:col-span-3">
					<CardHeader
						floated={false}
						shadow={false}
						color="transparent"
						className="m-0 flex items-center justify-between p-6"
					></CardHeader>
					<ListadoAlumnos />
				</Card>
			</div>
			{modalNuevoAlumno ? <ModalNuevoAlumno /> : ""}
			{modalEditarAlumno ? <ModalEditarAlumno /> : ""}

			{cargandoModal ? <Cargando /> : ""}
		</div>
	);
}

export default Alumnos;
