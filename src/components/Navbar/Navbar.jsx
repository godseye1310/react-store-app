// import React from "react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../../store/auth-slice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import CartBtn from "../Cart/CartBtn";
import { setCart } from "../../store/cart-slice";

const Navbar = () => {
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector((state) => state.authState);

	const logoutHandler = () => {
		signOut(auth);

		dispatch(handleLogout());
		dispatch(setCart({ cartList: [], totalItems: 0, totalPrice: 0 }));
	};

	return (
		<nav className="navbar justify-between px-1.5">
			<div className="flex items-center justify-center gap-x-3 ms-2 md:me-24 ">
				<FaReact className=" h-8 w-8 text-coral-red animate-spin aniduration" />
				<h1 className="self-center text-coral-red font-extrabold font-montserrat sm:text-2xl whitespace-nowrap">
					<span className="px-3 py-1.5 bg-neutral">REACT</span>
					<span className="px-3 py-1.5 bg-coral-red text-neutral">
						STORE
					</span>
				</h1>
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
				<div className="cart dropdown dropdown-end dropdown-hover">
					<CartBtn />
					<div
						tabIndex={0}
						className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow hidden"
					>
						<div className="card-body">
							<span className="text-lg font-bold">
								Hello User
							</span>
							{/* <span className="text-info">Subtotal: $999</span> */}
							<div className="card-actions">{/*  */}</div>
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

				{!isLoggedIn && (
					<Link
						to="/login"
						className="logbtn btn btn-accent btn-outline btn-sm"
					>
						<span className="max-xs:hidden">Log in/Register</span>
						<BiLogIn className="text-xl" />
					</Link>
				)}

				{isLoggedIn && (
					<button
						className="logbtn btn bg-neutral-300 btn-sm hover:bg-neutral-400"
						onClick={logoutHandler}
					>
						<span className="max-xs:hidden">Logout</span>
						<BiLogOut className="text-xl" />
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
