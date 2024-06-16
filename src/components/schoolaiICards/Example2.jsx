/* eslint-disable react/prop-types */
const Example2 = ({ title, description, image }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg max-w-xs cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-4">
			<div className="flex items-center space-x-4 align-middle">
				<div className="flex-shrink-0 text-center mb-2">
					<img className="h-10 " src={image} alt="Sample Image" />
				</div>
				<div>
					<h2 className="text-xl font-bold text-left">{title}</h2>
					<p className="text-gray-700 text-left">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Example2;
