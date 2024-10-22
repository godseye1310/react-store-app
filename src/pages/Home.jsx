// import React from "react";

import HeroCarousel from "../components/UI/HeroCarousel";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
	return (
		<div className="p-3">
			<ScrollToTop />
			<HeroCarousel />

			<h3 className="text-3xl my-6 font-montserrat font-semibold text-gray-600">
				Categories
			</h3>

			<div className="flex flex-wrap gap-3 mb-10">
				<div className="group flex-1 min-w-72 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md ">
					<Link
						to="/categories/laptop"
						className="w-full h-full flex justify-center items-center gap-3 text-xl font-semibold"
					>
						Laptops
						<span>
							<BsArrowRight
								className="h-6 w-6 translate-x-0 group-hover:translate-x-3 transition-transform duration-300"
								strokeWidth={1}
							/>
						</span>
					</Link>
				</div>
				<div className="group flex-1 min-w-72 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md  ">
					<Link
						to="/categories/phone"
						className="w-full h-full flex justify-center items-center gap-3 text-xl font-semibold"
					>
						Smartphones
						<span>
							<BsArrowRight
								className="h-6 w-6 translate-x-0 group-hover:translate-x-3 transition-transform duration-300"
								strokeWidth={1}
							/>
						</span>
					</Link>
				</div>
				<div className="group flex-1 min-w-72 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md ">
					<Link
						to="/categories/tablet"
						className="w-full h-full flex justify-center items-center gap-3 text-xl font-semibold"
					>
						Tablets
						<span>
							<BsArrowRight
								className="h-6 w-6 translate-x-0 group-hover:translate-x-3 transition-transform duration-300"
								strokeWidth={1}
							/>
						</span>
					</Link>
				</div>
				<div className="group flex-1 min-w-72 h-32 bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md ">
					<Link
						to="/categories/monitor"
						className="w-full h-full flex justify-center items-center gap-3 text-xl font-semibold"
					>
						Monitors
						<span>
							<BsArrowRight
								className="h-6 w-6 translate-x-0 group-hover:translate-x-3 transition-transform duration-300"
								strokeWidth={1}
							/>
						</span>
					</Link>
				</div>
				<div className="group flex-1 min-w-72 h-32 card bg-neutral-300 text-slate-700 font-montserrat font-semibold rounded shadow-md">
					<Link
						to="/categories"
						className=" flex justify-center h-full w-full items-center gap-3 text-xl font-semibold"
					>
						See All{" "}
						<span>
							<BsArrowRight
								className="h-6 w-6 translate-x-0 group-hover:translate-x-3 transition-transform duration-300"
								strokeWidth={1}
							/>
						</span>
					</Link>
				</div>
			</div>

			<div className="bg-primary"></div>
		</div>
	);
};

export default Home;
