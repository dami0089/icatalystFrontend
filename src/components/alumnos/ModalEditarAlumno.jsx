import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import useAlumnos from "../../hooks/useAlumnos";

const ModalEditarAlumno = () => {
	const { handleCargando } = useAuth();

	const { handleModalEditarAlumno, modalEditarAlumno } = useAlumnos();

	//Comprobamos que todos los campos esten completos correctamente
	const handleSubmit = async (e) => {
		e.preventDefault();
		// if ([numeroLocal, nombreTitular].includes("")) {
		// 	toast("⚠️ Numero Local y Nombre Titular son obligatorios", {
		// 		position: "top-right",
		// 		autoClose: 1500,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 		draggable: true,
		// 		progress: undefined,
		// 		theme: "light",
		// 	});
		// 	return;
		// }
		handleCargando();
		// await registrarEmpresa(
		// 	numeroLocal,
		// 	nombreTitular,
		// 	nombreInquilino,
		// 	nombreLocal
		// );
		// setNumeroLocal("");
		// setNombreTitular("");
		// setNombreInquilino("");
		// setNombreLocal("");

		// setActualizarListados(true);
		handleModalEditarAlumno();
	};

	return (
		<Transition.Root show={modalEditarAlumno} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-50 overflow-y-auto"
				onClose={handleModalEditarAlumno}
			>
				<div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden sm:inline-block sm:h-screen sm:align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
							<div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
								<button
									type="button"
									className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									onClick={handleModalEditarAlumno}
								>
									<span className="sr-only">Cerrar</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>

							<div className="sm:flex sm:items-start">
								<div className="absolute right-8 top-0 hidden pr-4 pt-4 sm:block"></div>
								<div className="mt-3 w-full text-center sm:ml-0 sm:mt-0 sm:text-left">
									<Dialog.Title
										as="h3"
										className="text-xl font-bold leading-6 text-gray-900"
									>
										Editar Profesor
									</Dialog.Title>

									<form className="mx-2 my-2" onSubmit={handleSubmit}>
										<>
											<div className="mb-1">
												<label
													className="text-sm font-bold uppercase text-gray-700"
													htmlFor="nombre"
												>
													Nombre
												</label>
												<input
													id="nombre"
													type="number"
													placeholder="Nombre"
													className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
													autoComplete="off"
													// value={numeroLocal}
													// onChange={(e) => setNumeroLocal(e.target.value)}
												/>
											</div>
											<div className="mb-1">
												<label
													className="text-sm font-bold uppercase text-gray-700"
													htmlFor="titular"
												>
													Email
												</label>
												<input
													id="titular"
													type="text"
													placeholder="Email"
													className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
													autoComplete="off"
													// value={nombreTitular}
													// onChange={(e) => setNombreTitular(e.target.value)}
												/>
											</div>
											<div className="mb-1">
												<label
													className="text-sm font-bold uppercase text-gray-700"
													htmlFor="inquilino"
												>
													Instituto
												</label>
												<input
													id="inquilino"
													type="text"
													placeholder="Instituto"
													className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
													autoComplete="off"
													// value={nombreInquilino}
													// onChange={(e) => setNombreInquilino(e.target.value)}
												/>
											</div>

											<input
												type="submit"
												className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-300"
												value={"Editar Profesor"}
											/>
										</>
									</form>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ModalEditarAlumno;
