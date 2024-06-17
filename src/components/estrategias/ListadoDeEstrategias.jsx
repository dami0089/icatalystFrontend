import { CardBody, Typography } from "@material-tailwind/react";
// import { EyeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

// import { useEffect } from "react";

const ListadoDeEstrategias = () => {
	// useEffect(() => {
	// 	const obtenerProf = async () => {
	// 		await obtenerProfesores();
	// 	};
	// 	obtenerProf();
	// }, []);

	return (
		<>
			<div>
				<Typography variant="h6" color="blue-gray" className="mb-3 ml-4">
					Listado de Estrategias
				</Typography>
			</div>
			<CardBody className="overflow-x-scroll px-0 pb-2 pt-0">
				<div className="hidden md:block">
					<table className="w-full min-w-[640px] table-auto">
						<thead>
							<tr>
								{["Nombre", "Apellido", "Instituto", "Accion"].map((el) => (
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
						{/* <tbody>
							{profesores.map(
								({ _id, nombre, apellido, nombreEscuela }, key) => {
									const className = `py-3 px-5 ${
										key === profesores.length - 1
											? ""
											: "border-b border-blue-gray-50"
									}`;

									return (
										<tr key={_id}>
											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<Typography variant="small" className="font-bold">
														{nombre}
													</Typography>
												</div>
											</td>
											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<Typography variant="small" className="font-bold">
														{apellido}
													</Typography>
												</div>
											</td>
											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<Typography variant="small" className="font-bold">
														{nombreEscuela}
													</Typography>
												</div>
											</td>

											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<EyeIcon className="h-8 w-8 hover:cursor-pointer" />
													<PencilSquareIcon className="h-8 w-8 hover:cursor-pointer" />
												</div>
											</td>
										</tr>
									);
								}
							)}
						</tbody> */}
					</table>
				</div>
				{/* <div className="mb-3 mt-3  block  md:hidden">
					{profesores.map(({ _id, nombre, apellido, nombreEscuela }) => (
						<div
							key={_id}
							className="mb-4 rounded-lg border border-blue-gray-50 p-4"
						>
							<div className="mb-2 flex items-center justify-between">
								<Typography variant="small" className="font-bold">
									Nombre: {nombre}
								</Typography>
								<div className="flex items-center gap-4">
									<EyeIcon
										className="h-6 w-6 hover:cursor-pointer"
										// onClick={(e) =>
										// 	verEmpresa(
										// 		e,
										// 		_id,
										// 		numeroLocal,
										// 		nombreTitularLocal,
										// 		nombreInquilino,
										// 		nombreLocal
										// 	)
										// }
									/>
									<PencilSquareIcon
										className="h-6 w-6 hover:cursor-pointer"
										// onClick={(e) =>
										// 	handleEditarEmpresa(e, _id, nombre, direccion, cuit)
										// }
									/>
								</div>
							</div>
							<Typography variant="small" className="mb-1 font-bold">
								Apellido: {apellido}
							</Typography>
							<Typography variant="small" className="mb-1 font-bold">
								Instituto: {nombreEscuela}
							</Typography>
						</div>
					))}
				</div> */}
			</CardBody>
		</>
	);
};

export default ListadoDeEstrategias;
