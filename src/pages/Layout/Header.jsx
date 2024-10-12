import { useEffect, useState } from "react";
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
				<div className="relative flex justify-center items-center w-full">
					<ul role="tablist" className="tabs tabs-bordered  px-1 ">
						<NavLink
							to="/"
							role="tab"
							className={({ isActive }) =>
								` mt-5 pb-1  ${
									isActive ? "tab-active tab" : "tab"
								}`
							}
						>
							<li className="w-24 font-semibold">Home</li>
						</NavLink>
						<NavLink
							to="/products"
							role="tab"
							className={({ isActive }) =>
								` mt-5 pb-1 ${
									isActive ? "tab-active tab" : "tab"
								}`
							}
						>
							<li className="w-24 font-semibold">Products</li>
						</NavLink>
						<NavLink
							to="/categories"
							role="tab"
							className={({ isActive }) =>
								` mt-5 pb-1 ${
									isActive ? "tab-active tab" : "tab"
								}`
							}
						>
							<li className="w-24 font-semibold">Categories</li>
						</NavLink>
					</ul>

					<label
						htmlFor="user-cart-drawer"
						className={`absolute right-3 cursor-pointer ${
							isScrolled ? " " : "hidden"
						} `}
					>
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle "
						>
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item bg-secondary">
									9
								</span>
							</div>
						</div>
					</label>
				</div>
			</nav>
		</header>
	);
};

export default Header;
