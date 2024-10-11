import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Carousel />

			<h3 className="text-3xl my-6">Categories</h3>

			<div className="flex flex-wrap gap-3 mb-10">
				<div className="flex-1 min-w-36 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md ">
					<Link
						to="/categories/laptops"
						className="w-full h-full flex justify-center items-center"
					>
						Laptops
					</Link>
				</div>
				<div className="flex-1 min-w-36 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md  ">
					<Link
						to="/categories/phones"
						className="w-full h-full flex justify-center items-center"
					>
						Smartphones
					</Link>
				</div>
				<div className="flex-1 min-w-36 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md ">
					<Link
						to="/categories/tablets"
						className="w-full h-full flex justify-center items-center"
					>
						Tablets
					</Link>
				</div>
				<div className="flex-1 min-w-36 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md ">
					<Link
						to="/categories/monitors"
						className="w-full h-full flex justify-center items-center"
					>
						Monitors
					</Link>
				</div>
				<div className="flex-1 min-w-36 h-32 card bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md">
					<Link
						to="/categories"
						className=" flex justify-center h-full w-full items-center  "
					>
						See All
					</Link>
				</div>
			</div>

			<div className="bg-primary">
				heloo
				<button className="btn btn-primary">Add to Cart</button>
			</div>
			<Carousel />
			<Carousel />
		</div>
	);
};

export default Home;
