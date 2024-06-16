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
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Cargando from "../../components/Cargando";
import clienteAxios from "../../configs/clinteAxios";

export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const { setAuth, handleCargando } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async () => {
		if ([email, password].includes("")) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "⚠️ Todos los campos son obligatorios!",
			});
			return;
		}

		try {
			handleCargando();
			const { data } = await clienteAxios.post("/usuarios/login", {
				email,
				password,
			});
			setAuth(data);
			localStorage.setItem("token", data.token);
			navigate("/inicio");
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.response.data.msg}`,
			});
		} finally {
			handleCargando();
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
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
							Ingresar
						</Typography>
					</CardHeader>
					<CardBody className="flex flex-col gap-4">
						<Input
							placeholder="Usuario o Email"
							type="text"
							size="lg"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onKeyPress={handleKeyPress}
						/>
						<div className="relative">
							<Input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								size="lg"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								onKeyPress={handleKeyPress}
							/>
							<div
								className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeSlashIcon className="h-6 w-6" />
								) : (
									<EyeIcon className="h-6 w-6" />
								)}
							</div>
						</div>
					</CardBody>
					<CardFooter className="pt-0">
						<Button
							className="bg-gray-900"
							fullWidth
							onClick={(e) => handleSubmit(e)}
						>
							Iniciar Sesion
						</Button>
						<Typography variant="small" className="mt-6 flex justify-center">
							Olvidaste tu Password?
							<Link to="/olvide-password">
								<Typography
									as="span"
									variant="small"
									className="ml-1 font-bold text-gray-900"
								>
									Recuperar
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

export default Login;
