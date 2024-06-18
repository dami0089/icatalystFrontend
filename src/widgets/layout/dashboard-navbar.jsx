// import { useNavigate } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";

import useAuth from "../../hooks/useAuth";

export function DashboardNavbar() {
	const { cerrarSesionAuth } = useAuth();

	// const navigate = useNavigate();

	const handleclose = (e) => {
		e.preventDefault();
		cerrarSesionAuth();
		localStorage.removeItem("token");
	};

	// const [isMenuOpen, setIsMenuOpen] = useState(false);

	// const handleMenuToggle = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

	return (
		<Navbar
			color={"transparent"}
			className={` rounded-xl transition-all px-0 py-1`}
			fullWidth
		>
			{/* {auth.rol ? ( */}
			<>
				<div className="flex justify-between gap-6 md:flex-col-reverse md:items-center lg:flex-row">
					<div className="flex items-center justify-center">
						<div>
							<img src="/isologo.png" height={50} width={50} />
						</div>
						<div className="ml-4 text-[24px] font-bold text-gray-700 md:text-[40px]">
							iCatalyst
						</div>
					</div>

					<div className="flex items-center text-black mr-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							className="h-5 w-5 text-blue-gray-500 hover:cursor-pointer"
							onClick={(e) => handleclose(e)}
						>
							<path
								fill="currentColor"
								d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
							/>
						</svg>
					</div>
				</div>
			</>
		</Navbar>
	);
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
