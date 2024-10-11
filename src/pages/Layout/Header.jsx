import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="bg-base-300 flex flex-col justify-center items-center">
			<Navbar />
			<hr className="w-full border-b border-b-neutral-300" />
			<nav
				className={`flex justify-center items-end w-full bg-base-30 h-12 bg-base-300 px-1.5	 ${
					isScrolled ? "fixed top-0 w-full shadow-lg z-10" : ""
				}`}
			>
				<ul role="tablist" className="tabs tabs-bordered   px-1 ">
					<NavLink
						to="/"
						role="tab"
						className={({ isActive }) =>
							` mt-5 pb-1  ${isActive ? "tab-active tab" : "tab"}`
						}
					>
						<li className="w-24 font-semibold">Home</li>
					</NavLink>
					<NavLink
						to="/products"
						role="tab"
						className={({ isActive }) =>
							` mt-5 pb-1 ${isActive ? "tab-active tab" : "tab"}`
						}
					>
						<li className="w-24 font-semibold">Products</li>
					</NavLink>
					<NavLink
						to="/categories"
						role="tab"
						className={({ isActive }) =>
							` mt-5 pb-1 ${isActive ? "tab-active tab" : "tab"}`
						}
					>
						<li className="w-24 font-semibold">Categories</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
