// import React from "react";

import { BiLogIn } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar justify-between px-1.5">
			<div className="flex items-center justify-center gap-x-3 ms-2 md:me-24 ">
				<FaReact className=" h-8 w-8 text-coral-red animate-spin aniduration" />
				<span className="self-center text-coral-red text-xl font-bold font-montserrat sm:text-2xl whitespace-nowrap">
					REACT STORE
				</span>
			</div>
			<div className="form-control max-sm:hidden flex-1">
				<input
					type="text"
					placeholder="Search"
					className="input input-bordered w-32 rounded-3xl md:w-auto "
				/>
			</div>
			<div className="flex gap-2">
				<div>
					<input
						type="checkbox"
						value="light"
						className="toggle theme-controller"
					/>
				</div>
				<div className="cart dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle"
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
					<div
						tabIndex={0}
						className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
					>
						<div className="card-body">
							<span className="text-lg font-bold">9 Items</span>
							<span className="text-info">Subtotal: $999</span>
							<div className="card-actions">
								<label
									htmlFor="user-cart-drawer"
									className="drawer-button btn btn-primary w-full"
								>
									Open Cart
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="profile dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6489262-l9VwntAmYHM1.png"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div> */}

				<Link
					to="/login"
					className="logbtn btn btn-accent btn-outline btn-sm"
				>
					Log in/Register
					<BiLogIn className="text-xl" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
