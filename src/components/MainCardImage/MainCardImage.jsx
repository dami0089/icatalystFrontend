const MainCardImage = ({ title, description, image }) => {
	return (
		<>
			<style>
				{`
          .image-gradient {
            position: relative;
            overflow: hidden;
          }
          .image-gradient::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(220, 220, 220, 0.4), rgba(0, 0, 0, 0));
            pointer-events: none;
          }
        `}
			</style>
			<div className="bg-white rounded-lg shadow-lg max-w-sm cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
				<div className="image-gradient rounded-t-lg">
					<img className="rounded-t-lg w-full" src={image} alt="Sample Image" />
				</div>
				<div className="p-6">
					<h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>
					<p className="text-gray-700 text-center">{description}</p>
				</div>
			</div>
		</>
	);
};

export default MainCardImage;
