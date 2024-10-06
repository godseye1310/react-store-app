import React from "react";
import Carousel from "../components/Carousel";

const Home = () => {
	return (
		<div>
			<Carousel />

			<h3 className="text-3xl my-6">Categories</h3>

			<div className="flex flex-wrap gap-3">
				<div className="flex-1 min-w-36 h-32 bg-coral-red text-white rounded shadow-md flex justify-center items-center">
					Laptops
				</div>
				<div className="flex-1 min-w-36 h-32 bg-coral-red text-white rounded shadow-md flex justify-center items-center">
					Phones
				</div>
				<div className="flex-1 min-w-36 h-32 bg-coral-red text-white rounded shadow-md flex justify-center items-center">
					Tablets
				</div>
				<div className="flex-1 min-w-36 h-32 bg-coral-red text-white rounded shadow-md flex justify-center items-center">
					Monitors
				</div>
				<div className="flex-1 min-w-36 h-32 bg-coral-red text-white rounded shadow-md flex justify-center items-center">
					Accessories
				</div>
			</div>
		</div>
	);
};

export default Home;
