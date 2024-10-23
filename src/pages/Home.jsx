// import React from "react";

import HeroCarousel from "../components/UI/HeroCarousel";
import ScrollToTop from "../components/ScrollToTop";
import CategoryCard from "../components/UI/CategoryCard";
import { GiShop } from "react-icons/gi";
import { SiApple, SiAsus, SiRepublicofgamers, SiSamsung } from "react-icons/si";

const Home = () => {
	return (
		<div className="p-3">
			<ScrollToTop />
			<HeroCarousel />

			<div className="divider"></div>

			<h3 className="text-3xl my-6 font-montserrat font-semibold text-coral-red text-center">
				Explore Categories
			</h3>
			<div className="flex flex-wrap gap-3 mb-10">
				<CategoryCard
					to={"/categories/phone"}
					label="Smartphones"
					bgImg="/CategoryImg/cat1.png"
					className="flex-1 shrink-0 min-w-60 w-72 h-32"
				/>
				<CategoryCard
					to={"/categories/laptop"}
					label="Laptops"
					bgImg="/CategoryImg/cat3.png"
					className="flex-1 shrink-0 min-w-60 w-72 h-32"
				/>
				<CategoryCard
					to={"/categories/tablet"}
					label="Tablets"
					bgImg="/CategoryImg/cat2.png"
					className="flex-1 shrink-0 min-w-60 w-72 h-32"
				/>
				<CategoryCard
					to={"/categories/monitor"}
					label="Monitors"
					bgImg="/CategoryImg/cat4.avif"
					className="flex-1 shrink-0 min-w-60 w-72 h-32"
				/>
				<CategoryCard
					to={"/categories"}
					label="All Categorie"
					// bgImg="/CategoryImg/cat2.png"
					className="flex-1 shrink-0 min-w-60 w-72 h-32"
					bgIcon={<GiShop className="size-20 text-slate-100/35" />}
				/>
			</div>

			<div className="divider"></div>

			<h3 className="text-3xl my-6 font-montserrat font-semibold text-coral-red text-center">
				Featured Brands
			</h3>
			<div className="flex gap-3 flex-wrap justify-center">
				<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
					<SiApple />
				</div>
				<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
					<SiSamsung />
				</div>
				<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
					<SiAsus />
				</div>
				<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
					<SiRepublicofgamers />
				</div>
			</div>

			<div className="divider"></div>

			<div>
				<div className="card bg-base-100 w-60 image-full shadow-xl">
					<figure>
						<img
							src="/CategoryImg/cat1.png"
							alt="Shoes"
							className="object-scale-down h-10"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
