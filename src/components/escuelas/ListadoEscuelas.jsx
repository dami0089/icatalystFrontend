import { CardBody, Typography } from "@material-tailwind/react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import useEscuelas from "../../hooks/useEscuelas";
import { useEffect } from "react";

const ListadoEscuelas = () => {
	const {
		escuelas,
		obtenerEscuelas,
		actualizarListado,
		setNombreEscuela,
		setActualizarListado,
		setMaxTokens,
		setMaxMessages,
		setMaxInputLength,
		setModel,
		handleModalEditarEscuela,
		setIdEscuela,
	} = useEscuelas();

	useEffect(() => {
		const obtenerEsc = async () => {
			await obtenerEscuelas();
		};
		obtenerEsc();
	}, []);

	useEffect(() => {
		const obtenerEsc = async () => {
			if (actualizarListado) {
				await obtenerEscuelas();
				setActualizarListado(false);
			}
		};
		obtenerEsc();
	}, [actualizarListado]);

	const editarEscuela = (
		e,
		id,
		nombre,
		maxTokens,
		maxMessages,
		maxInputLength,
		model
	) => {
		console.log("Editar Escuela");
		e.preventDefault();
		setIdEscuela(id);
		setNombreEscuela(nombre);
		setMaxTokens(maxTokens);
		setMaxMessages(maxMessages);
		setMaxInputLength(maxInputLength);
		setModel(model);
		handleModalEditarEscuela();
	};

	return (
		<>
			<div className="">
				<div>
					<Typography variant="h6" color="blue-gray" className="mb-3 ml-4">
						Listado de Escuelas
					</Typography>
				</div>
				<CardBody className="overflow-x-scroll px-0 pb-2 pt-0 shadow-2xl rounded-xl">
					<div className="hidden md:block">
						<table className="w-full min-w-[640px] table-auto">
							<thead>
								<tr>
									{[
										"Nombre",
										"Max tokens",
										"Max Messages",
										"Max Input Length",
										"Model",
										"Accion",
									].map((el) => (
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
								{escuelas.map(
									(
										{
											_id,
											nombre,
											max_tokens,
											max_messages,
											max_input_length,
											model,
										},
										key
									) => {
										const className = `py-3 px-5 ${
											key === escuelas.length - 1
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
															{max_tokens}
														</Typography>
													</div>
												</td>

												<td className={className}>
													<div className="flex items-center justify-center gap-4">
														<Typography variant="small" className="font-bold">
															{max_messages}
														</Typography>
													</div>
												</td>

												<td className={className}>
													<div className="flex items-center justify-center gap-4">
														<Typography variant="small" className="font-bold">
															{max_input_length}
														</Typography>
													</div>
												</td>

												<td className={className}>
													<div className="flex items-center justify-center gap-4">
														<Typography variant="small" className="font-bold">
															{model}
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
														<PencilSquareIcon
															className="h-8 w-8 hover:cursor-pointer"
															onClick={(e) =>
																editarEscuela(
																	e,
																	_id,
																	nombre,
																	max_tokens,
																	max_messages,
																	max_input_length,
																	model
																)
															}
														/>
													</div>
												</td>
											</tr>
										);
									}
								)}
							</tbody>
						</table>
					</div>
					<div className="mb-3 mt-3  block  md:hidden">
						{escuelas.map(({ _id, nombre }) => (
							<div
								key={_id}
								className="mb-4 rounded-lg border border-blue-gray-50 p-4"
							>
								<div className="mb-2 flex items-center justify-between">
									<Typography variant="small" className="font-bold">
										Nombre: {nombre}
									</Typography>
								</div>
							</div>
						))}
					</div>
				</CardBody>
			</div>
		</>
	);
};

export default ListadoEscuelas;
