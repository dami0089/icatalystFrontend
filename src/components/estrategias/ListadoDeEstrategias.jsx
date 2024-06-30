import { CardBody, Typography } from "@material-tailwind/react";
import useEstrategias from "../../hooks/useEstrategias";
import ModalEditarEstrategia from "./ModalEditarEstrategia";
// import { EyeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

// import { useEffect } from "react";

const ListadoDeEstrategias = () => {
	const {
		estrategias,
		handleModalEditarEstrategia,
		setIdEstrategiaEditar,
		modalEditarEstrategia,
	} = useEstrategias();

	const editEstrategia = (e, id) => {
		e.preventDefault();
		setIdEstrategiaEditar(id);
		handleModalEditarEstrategia();
	};

	return (
		<>
			<div>
				<Typography variant="h6" color="blue-gray" className="mb-3 ml-4">
					Listado de Estrategias
				</Typography>
			</div>
			<CardBody className="overflow-x-scroll px-0 pb-2 pt-0 rounded-xl shadow-xl">
				<div className="hidden md:block">
					<table className="w-full min-w-[640px] table-auto">
						<thead>
							<tr>
								{["Nombre", "Sistema", "Accion"].map((el) => (
									<th
										key={el}
										className="border-b bg-blue-100 border-blue-gray-50 px-6 py-3 text-center"
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
							{estrategias.map(({ _id, nombre, sistema }, key) => {
								const className = `py-3 px-5 ${
									key === estrategias.length - 1
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
													{sistema}
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
													className="h-8 w-8 hover:cursor-pointer"
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
													onClick={(e) => editEstrategia(e, _id)}
												>
													<path
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1.5"
														d="M14.074 3.885c.745-.807 1.117-1.21 1.513-1.446a3.1 3.1 0 0 1 3.103-.047c.403.224.787.616 1.555 1.4c.768.785 1.152 1.178 1.37 1.589a3.29 3.29 0 0 1-.045 3.17c-.23.404-.625.785-1.416 1.546l-9.403 9.057c-1.498 1.443-2.247 2.164-3.183 2.53s-1.965.338-4.023.285l-.28-.008c-.626-.016-.94-.024-1.121-.231c-.183-.207-.158-.526-.108-1.164l.027-.346c.14-1.796.21-2.694.56-3.502s.956-1.463 2.166-2.774zM13 4l7 7m-6 11h8"
														color="currentColor"
													/>
												</svg>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="mb-3 mt-3  block  md:hidden">
					{estrategias.map(({ _id, nombre, sistema }) => (
						<div
							key={_id}
							className="mb-4 rounded-lg border border-blue-gray-50 p-4"
						>
							<div className="mb-2 flex items-center justify-between">
								<Typography variant="small" className="font-bold">
									Nombre: {nombre}
								</Typography>
								{/* <div className="flex items-center gap-4">
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
								</div> */}
							</div>
							<Typography variant="small" className="mb-1 font-bold">
								Sistema: {sistema}
							</Typography>
						</div>
					))}
				</div>
			</CardBody>
			{modalEditarEstrategia ? <ModalEditarEstrategia /> : null}
		</>
	);
};

export default ListadoDeEstrategias;
