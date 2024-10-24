import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartBtn from "../Cart/CartBtn";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavLinksBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleLinkClick = () => {
		document.activeElement.blur();
	};

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
						<li className="w-24 font-semibold">Store</li>
					</NavLink>
					<li
						// to="/categories"
						role="tab"
						className={` mt-5 pb-1 tab hover:tab-active bg-amber-500`}
					>
						{/* <li className="w-24 font-semibold">Categories</li> */}

						<div
							className={`group dropdown dropdown-hover dropdown-bottom dropdown-end`}
						>
							<div
								tabIndex={0}
								role="button"
								className="group w-24 font-semibold inline-flex items-center justify-between cursor-pointer "
							>
								Categories{" "}
								<span>
									<MdKeyboardArrowDown className="size-5 group-hover:rotate-180 transition duration-150" />
								</span>
							</div>
							<ul
								tabIndex={0}
								className="dropdown-content bg-transparent z-20 p-2"
							>
								<div className="bg-white w-60 shadow-xl p-3 flex gap-10">
									<ul className="text-left">
										<h5 className="font-semibold text-gray-600 text-lg">
											Main
										</h5>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/phone"
												onClick={handleLinkClick}
											>
												Smartphones
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/laptop"
												onClick={handleLinkClick}
											>
												Laptops
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/tablet"
												onClick={handleLinkClick}
											>
												Tablets
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/monitor"
												onClick={handleLinkClick}
											>
												Monitors
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/accessories"
												onClick={handleLinkClick}
											>
												Accessories
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/watches"
												onClick={handleLinkClick}
											>
												Watches
											</Link>
										</li>
									</ul>
									<ul className="text-left">
										<h5 className="font-semibold text-gray-600 text-lg">
											Top Brands
										</h5>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/apple"
												onClick={handleLinkClick}
											>
												Apple
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/asus"
												onClick={handleLinkClick}
											>
												Asus
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/rog"
												onClick={handleLinkClick}
											>
												ROG
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/samsung"
												onClick={handleLinkClick}
											>
												Samsung
											</Link>
										</li>
										<li className="hover:text-coral-red">
											<Link
												to="/categories/dell"
												onClick={handleLinkClick}
											>
												Dell
											</Link>
										</li>
									</ul>
								</div>
							</ul>
						</div>
					</li>
				</ul>

				<div
					className={`absolute right-3 cursor-pointer ${
						isScrolled ? " " : "hidden"
					} `}
				>
					<CartBtn />
				</div>
			</div>
		</nav>
	);
};

export default NavLinksBar;
