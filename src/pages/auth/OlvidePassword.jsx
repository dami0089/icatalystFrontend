import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Input,
	Button,
	Typography,
} from "@material-tailwind/react";
import fondo from "/imgs/2147665301.jpg";

import Swal from "sweetalert2";
import clienteAxios from "../../configs/clinteAxios";
import useAuth from "../../hooks/useAuth";
import Cargando from "../../components/Cargando";

export function OlvidePassword() {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const { handleCargando } = useAuth();

	const handleSubmit = async () => {
		if (email === "" || email.length < 6) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `⚠️ Por favor ingresa tu mail!`,
			});
			return;
		}
		if (!/\S+@\S+\.\S+/.test(email)) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `⚠️ Email invalido`,
			});
			return;
		}

		try {
			handleCargando();
			const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
				email,
			});
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `${data.msg}`,
				showConfirmButton: false,
				timer: 1500,
			});
			setEmail("");
			setTimeout(() => {
				handleCargando();

				navigate("/");
			}, 1500);
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.response.data.msg}`,
			});
		}
	};

	return (
		<>
			<img
				src={fondo}
				className="absolute inset-0 z-0 h-full w-full object-cover"
			/>

			<div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
			<div className="container mx-auto p-4">
				<Card className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
					<CardHeader
						variant="gradient"
						className="mb-4 grid h-28 place-items-center bg-gray-900"
					>
						<Typography variant="h3" color="white" className="uppercase">
							Recuperar Password
						</Typography>
					</CardHeader>
					<CardBody className="flex flex-col gap-4">
						<Input
							type="email"
							label="Email"
							size="lg"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</CardBody>
					<CardFooter className="pt-0">
						<Button className="bg-gray-900" fullWidth onClick={handleSubmit}>
							Recuperar
						</Button>
						<Typography variant="small" className="mt-6 flex justify-center">
							Ya tenes cuenta?
							<Link to="/">
								<Typography
									as="span"
									variant="small"
									className="ml-1 font-bold text-gray-900"
								>
									Iniciar sesion
								</Typography>
							</Link>
						</Typography>
					</CardFooter>
				</Card>
			</div>
			<Cargando />
		</>
	);
}

export default OlvidePassword;
