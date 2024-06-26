import { CardBody, Typography } from "@material-tailwind/react";

import useDialogo from "../../hooks/useDialogo";
import { formatearFecha } from "../../helpers/formatearFecha";
import Swal from "sweetalert2";

const ListadoAlumnosActividad = () => {
	const {
		dialogosActividad,
		handleModlaVerChatAlumno,
		setIdAlumnoVerChat,
		setIdDialogo,
	} = useDialogo();

	const handleVerDialogo = (e, id, idDialogo) => {
		e.preventDefault();
		setIdAlumnoVerChat(id);
		setIdDialogo(idDialogo);
		handleModlaVerChatAlumno();
	};

	const handleDetener = (e) => {
		e.preventDefault();
		Swal.fire({
			title: "¿Estás seguro?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, detener actividad!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Detenida!", "La actividad ha sido detenida.", "success");
			}
		});
	};

	return (
		<>
			<div className="flex-col w-full">
				<div>
					<Typography variant="h6" color="blue-gray" className="mb-3 ml-4">
						Alumnos Interactuando
					</Typography>
				</div>
				<CardBody className="overflow-x-scroll px-0 pb-2 pt-0">
					<div className="hidden md:block">
						<table className="w-full min-w-[640px] table-auto">
							<thead>
								<tr>
									{[
										"Nombre Alumno",
										"Hora inicio",
										"Ultima Actividad",
										"Accion",
									].map((el) => (
										<th
											key={el}
											className="border-b border-blue-gray-50 px-6 py-3 text-center"
										>
											<Typography
												variant="small"
												className="text-[11px] font-medium uppercase text-blue-gray-400"
											>
												{el}
											</Typography>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{dialogosActividad.map(
									({ _id, alumno, updatedAt, createdAt }, key) => {
										const className = `py-3 px-5 ${
											key === dialogosActividad.length - 1
												? ""
												: "border-b border-blue-gray-50"
										}`;

										return (
											<tr key={_id}>
												<td className={className}>
													<div className="flex items-center justify-center gap-4">
														<Typography variant="small" className="font-bold">
															{alumno && alumno.nombre}{" "}
															{alumno && alumno.apellido}
															{!alumno ? "Profesor" : ""}
														</Typography>
													</div>
												</td>
												<td className={className}>
													<div className="flex items-center justify-center gap-4">
														<Typography variant="small" className="font-bold">
															{formatearFecha(createdAt)}
														</Typography>
													</div>
												</td>
												<td className={className}>
													<div className="flex items-center justify-center gap-4">
														<Typography variant="small" className="font-bold">
															{formatearFecha(updatedAt)}
														</Typography>
													</div>
												</td>

												<td className={className}>
													<div className="flex items-center justify-center gap-4">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="1em"
															height="1em"
															viewBox="0 0 24 24"
															className="h-8 w-8 hover:cursor-pointer text-red-700"
															onClick={(e) => handleDetener(e)}
														>
															<path
																fill="currentColor"
																fillRule="evenodd"
																d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-4.906-3.68L18.32 7.094A8 8 0 0 1 7.094 18.32M5.68 16.906A8 8 0 0 1 16.906 5.68z"
															/>
														</svg>

														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="1em"
															height="1em"
															viewBox="0 0 24 24"
															className="h-8 w-8 hover:cursor-pointer"
															onClick={(e) =>
																handleVerDialogo(e, alumno && alumno._id, _id)
															}
														>
															<g
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="1.5"
															>
																<path d="M3 13c3.6-8 14.4-8 18 0" />
																<path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
															</g>
														</svg>
													</div>
												</td>
											</tr>
										);
									}
								)}
							</tbody>
						</table>
					</div>
				</CardBody>
			</div>
		</>
	);
};

export default ListadoAlumnosActividad;
