import brain from "../../assets/brain.png";

const SidekickComponent = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto flex space-x-6 h-[600px]">
			{/* Left Section */}
			<div className="w-full ">
				<div className="flex space-x-4 items-start">
					<div className="flex-shrink-0">
						<img className="h-16 w-16" src={brain} alt="activity Icon" />
					</div>
					<div>
						<h2 className="text-2xl font-bold">Actividad 1</h2>
						<p className="text-gray-600 mt-1">
							Give your students managed access to their very own AI assistant.
						</p>
						<p className="text-gray-600 mt-2">
							Students can take advantage of AIs powerful capabilities to
							explore various topics, answer questions, quiz themselves, and
							more. You have full access to all chat sessions, allowing you to
							monitor student activity.
						</p>
						<div className="mt-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="description"
							>
								What do you want activity1 to do with your students?{" "}
								<span className="text-red-500">*</span>
							</label>
							<textarea
								id="description"
								className="w-full resize-none px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
								placeholder="Tell activity1 what you want it to help your students with. Be as creative or specific as you want!"
								rows={10}
							></textarea>
						</div>
						<div className="mt-4 flex space-x-2">
							<button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
								Launch
							</button>
							<button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
									/>
								</svg>
							</button>
							<button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Right Section (Chat) */}
			<div className=" bg-gray-100 rounded-lg p-4 flex flex-col w-full">
				<div className="flex-1 overflow-y-auto">
					{/* Chat messages */}
					<div className="mb-4">
						<div className="flex justify-start mb-2">
							<div className="bg-white p-3 rounded-lg shadow w-[200px]">
								<p className="text-sm text-gray-600">
									Hello! How can I assist you today?
								</p>
							</div>
						</div>
						<div className="flex justify-end mb-2">
							<div className="bg-blue-500 text-white p-3 rounded-lg shadow w-[200px]">
								<p className="text-sm">I need help with my homework.</p>
							</div>
						</div>
						{/* More messages */}
					</div>
				</div>
				<div className="mt-2">
					<div className="flex">
						<input
							type="text"
							className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
							placeholder="Send a message"
						/>
						<button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									fillOpacity=".25"
									stroke="currentColor"
									d="m16.205 5.265l-6.49 2.164c-1.634.544-2.45.816-2.776 1.129a2 2 0 0 0 0 2.884c.325.313 1.142.585 2.775 1.13c.33.11.494.164.64.241a2 2 0 0 1 .833.833c.077.146.132.31.242.64c.544 1.633.816 2.45 1.129 2.775a2 2 0 0 0 2.884 0c.313-.325.585-1.142 1.13-2.775l2.163-6.491c.552-1.656.828-2.484.391-2.921c-.437-.437-1.265-.161-2.92.39Z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidekickComponent;
