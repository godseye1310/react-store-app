// import React from "react";
import HeroCarousel from "../components/UI/HeroCarousel";
import ScrollToTop from "../components/ScrollToTop";
import CategoryCard from "../components/UI/CategoryCard";
import { GiShop } from "react-icons/gi";
import { SiApple, SiAsus, SiRepublicofgamers, SiSamsung } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import FeaturedItems from "../components/UI/FeaturedItems";
import { Link } from "react-router-dom";

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

			<div>
				<h3 className="text-3xl my-6 font-montserrat font-semibold text-coral-red text-center">
					Featured Products
				</h3>
				<FeaturedItems />
			</div>

			<div className="divider"></div>

			<h3 className="text-3xl my-6 font-montserrat font-semibold text-coral-red text-center">
				Featured Brands
			</h3>
			<div className="flex gap-3 flex-wrap justify-center">
				<Link to={"/categories/apple"}>
					<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
						<SiApple />
					</div>
				</Link>
				<Link to={"/categories/samsung"}>
					<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
						<SiSamsung />
					</div>
				</Link>
				<Link to={"/categories/asus"}>
					<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
						<SiAsus />
					</div>
				</Link>
				<Link to={"/categories/rog"}>
					<div className="card bg-base-100 w-36 h-36 shadow-xl justify-center items-center text-6xl cursor-pointer">
						<SiRepublicofgamers />
					</div>
				</Link>
			</div>

			<div className="divider"></div>
			<div className="divider"></div>

			<section className="bg-white dark:bg-gray-900 rounded relative">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
						Suscribe For Latest Offers & Deals
					</h1>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
						Here at React Store we focus on Quality Service,
						Products, and our customers satifaction. We Provide
						hassle free shipping for all orders.
					</p>
					<form className="w-full max-w-md mx-auto">
						<div className="relative">
							<div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
								<MdEmail className="size-5 text-gray-500" />
							</div>
							<input
								type="email"
								id="default-email"
								className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter your email here..."
								required
							/>
							<button
								type="submit"
								className="text-white absolute end-2.5 bottom-2.5 bg-coral-red/75 hover:bg-coral-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-blue-800"
							>
								Suscribe
							</button>
						</div>
					</form>
				</div>
				<div className="bg-gradient-to-b from-coral-red/15 to-transparent dark:from-coral-red/75 w-full h-full absolute top-0 left-0 z-0"></div>
			</section>
		</div>
	);
};

export default Home;
