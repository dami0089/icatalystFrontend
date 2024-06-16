import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

export function NuevoPassword() {
	const params = useParams();
	const [tokenValido, setTokenValido] = useState(false);
	const { token } = params;
	const [password, setPassword] = useState("");
	const [repetirPassword, setRepetirPassword] = useState("");
	const [passwordModificado, setPasswordModificado] = useState(false);
	const navigate = useNavigate();
	const { handleCargando } = useAuth();

	useEffect(() => {
		const comprobarToken = async () => {
			try {
				await clienteAxios(`/usuarios/crear-password/${token}`);
				setTokenValido(true);
			} catch (error) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: `${error.response.data.msg}`,
				});
			}
		};
		comprobarToken();
	}, []);

	const handleSubmit = async () => {
		if (password != repetirPassword) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `Las contraseñas no coinciden`,
			});
			return;
		}

		if (password.length < 6) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `El password es muy corto, minimo 6 caracteres`,
			});
			return;
		}

		try {
			const url = `/usuarios/olvide-password/${token}`;
			handleCargando();
			const { data } = await clienteAxios.post(url, { password });
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `${data.msg}`,
				showConfirmButton: false,
				timer: 1500,
			});
			setPasswordModificado(true);
			setPassword("");
			setRepetirPassword("");
			handleCargando();
			setTimeout(() => {
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
						<Typography variant="h3" color="white">
							Nueva Contraseña
						</Typography>
					</CardHeader>
					<CardBody className="flex flex-col gap-4">
						<Input
							label="Password"
							size="lg"
							value={password}
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							label="Repetir Password"
							size="lg"
							value={repetirPassword}
							type="password"
							onChange={(e) => setRepetirPassword(e.target.value)}
						/>
					</CardBody>
					<CardFooter className="pt-0">
						<Button className="bg-gray-900" fullWidth onClick={handleSubmit}>
							Guardar
						</Button>
					</CardFooter>
				</Card>
				<Cargando />
			</div>
		</>
	);
}

export default NuevoPassword;
