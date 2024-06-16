import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Footer({ brandName, brandLink, routes }) {
	const year = new Date().getFullYear();

	return (
		<footer className="py-2">
			{/* <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
				<Typography variant="small" className="font-normal text-inherit">
					&copy; {year} Hecho por{" "}
					<a
						href={brandLink}
						target="_blank"
						className="transition-colors hover:text-blue-500"
					>
						{brandName}
					</a>{" "}
				</Typography>
				<ul className="flex items-center gap-4">
					{routes.map(({ name, path }) => (
						<li key={name}>
							<Typography
								as="a"
								href={path}
								target="_blank"
								variant="small"
								className="px-1 py-0.5 font-normal text-inherit transition-colors hover:text-blue-500"
							>
								{name}
							</Typography>
						</li>
					))}
				</ul>
			</div> */}
		</footer>
	);
}

Footer.defaultProps = {
	brandName: "Damian Oliva",
	brandLink: "https://damianoliva.tech",
	routes: [{ name: "Inicio", path: "https://galeriaparis.com.ar" }],
};

Footer.propTypes = {
	brandName: PropTypes.string,
	brandLink: PropTypes.string,
	routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
