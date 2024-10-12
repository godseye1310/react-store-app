import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/products-slice";

const RootLayout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

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

	const navigate = useNavigate();

	return (
		<main
			id="main"
			className=" w-full relative flex flex-col min-h-screen bg-base-200 max-w-[2400px] mx-auto max-wide:w-full overflow-x-hidden"
			data-theme="light"
		>
			<div className="bg-base-300">
				<Header />
			</div>
			<div className="drawer drawer-end z-50">
				<input
					id="user-cart-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>

				<div className="drawer-side">
					<label
						htmlFor="user-cart-drawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu bg-base-200 text-base-content min-h-full w-96 p-4">
						{/* Sidebar content here */}
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
						<li>
							<label
								htmlFor="user-cart-drawer"
								aria-label="close sidebar"
								onClick={() => navigate("/products")}
							>
								Product
							</label>
						</li>
					</ul>
				</div>
			</div>

			<div
				className={`relative p-1 flex-1 flex flex-col w-full max-w-[1500px] mx-auto bg-base-100 max-wide:w-full ${
					isScrolled ? "pt-20" : ""
				}`}
			>
				<div className="flex-1 border-2 border-gray-600 border-dashed rounded-lg dark:border-gray-300 ">
					<Outlet />
				</div>
			</div>
			<Footer />
		</main>
	);
};

export default RootLayout;
