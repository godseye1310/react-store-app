import React from "react";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

const Footer = () => {
	return (
		<footer className="p-10 bg-base-300 text-base-content text-base">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<nav className="flex flex-col">
					<h3 className="text-lg footer-title">Products</h3>
					<a className="link link-hover">Smartphones</a>
					<a className="link link-hover">Tablets</a>
					<a className="link link-hover">Laptops</a>
					<a className="link link-hover">Monitors</a>
					<a className="link link-hover">Accessories</a>
				</nav>
				<nav>
					<div className="flex flex-col">
						<h3 className="text-lg footer-title">Brands</h3>
						<a className="link link-hover">Apple</a>
						<a className="link link-hover">Samsung</a>
						<a className="link link-hover">Asus</a>
						<a className="link link-hover">Dell</a>
						<a className="link link-hover">Lenovo</a>
					</div>
				</nav>
				<nav>
					<div className="flex flex-col">
						<h3 className="text-lg footer-title">Help</h3>
						<a className="link link-hover">Shipping & Delivery</a>
						<a className="link link-hover">Terms & Conditions</a>
						<a className="link link-hover">Privacy Policy</a>
						<a className="link link-hover">Purchase & Returns</a>
						<a className="link link-hover">Downloads</a>
					</div>
				</nav>
				<nav>
					<div className="flex flex-col">
						<h3 className="text-lg footer-title">Support</h3>
						<a className="link link-hover">Our Store</a>
						<a className="link link-hover">News</a>
						<a className="link link-hover">Careers</a>
						<a className="link link-hover">Contact</a>
						<a className="link link-hover">Referrals</a>
					</div>
				</nav>
			</div>

			<div className="divider"></div>

			{/* <!-- Bottom bar --> */}
			<aside className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-between items-center">
				{/* <!-- Brand --> */}
				<div className="flex items-center gap-4">
					<img alt="Logo" src="vite.svg" className="w-10" />
					<div>
						<p className="text-2xl">React-Store</p>
						<small>Copyright © 2024 - All rights reserved</small>
					</div>
				</div>

				{/* <!-- Socials --> */}
				<nav className="flex gap-4">
					<a className="btn btn-ghost btn-sm btn-circle">
						<GrGithub className="text-2xl" />
					</a>
					<a className="btn btn-ghost btn-sm btn-circle">
						<BsTwitter className="text-2xl" />
					</a>
					<a className="btn btn-ghost btn-sm btn-circle">
						<FaFacebook className="text-2xl" />
					</a>
					<a className="btn btn-ghost btn-sm btn-circle">
						<BsYoutube className="text-2xl" />
					</a>
				</nav>
			</aside>
		</footer>
	);
};

export default Footer;
