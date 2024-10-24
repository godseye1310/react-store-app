// import React from "react";
import { BiLogIn, BiLogOut, BiSolidSearch } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../../store/auth-slice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import CartBtn from "../Cart/CartBtn";
import { setCart } from "../../store/cart-slice";
import Search from "../Search/Search";
import DropDownMenu from "./DropDownMenu";

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
			<div className="flex items-center justify-center gap-x-3 ms-2  ">
				<FaReact className=" h-8 w-8 text-coral-red animate-spin aniduration" />
				<h1 className="self-center text-coral-red font-extrabold font-montserrat sm:text-2xl whitespace-nowrap">
					<span className="px-3 py-1.5 bg-neutral">REACT</span>
					<span className="px-3 py-1.5 bg-coral-red text-neutral">
						STORE
					</span>
				</h1>
			</div>
			<div className=" flex-1 pl-6">
				<div className="w-full max-sm:hidden">
					<Search />
				</div>
			</div>
			<div className="flex gap-1.5 items-center">
				<button
					className="sm:hidden btn btn-circle btn-sm max-xs:btn-xs btn-ghost"
					onClick={() =>
						document.getElementById("my_search-modal").showModal()
					}
				>
					<BiSolidSearch className="text-neutral-500 size-6" />
				</button>
				<dialog id="my_search-modal" className="modal">
					<div className="modal-box w-full max-sm:w-[90%] mx-auto h-full relative pr-16">
						<Search />
						<form
							method="dialog"
							className="absolute right-2 top-6"
						>
							<button className="btn btn-sm btn-circle btn-ghost">
								✕
							</button>
						</form>
					</div>
					<form method="dialog" className="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>
				<div>
					<input
						type="checkbox"
						value="light"
						defaultChecked
						className="toggle theme-controller hidden"
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

				{isLoggedIn && <DropDownMenu logoutHandler={logoutHandler} />}

				{!isLoggedIn && (
					<Link
						to="/login"
						className="logbtn btn btn-accent btn-outline btn-sm max-sm:btn-xs"
					>
						<span className="max-md:hidden">Log in/Register</span>
						<BiLogIn className="text-xl" />
					</Link>
				)}

				{isLoggedIn && (
					<button
						className="logbtn btn bg-neutral-300 btn-sm hover:bg-neutral-400 max-sm:btn-xs max-sm:hidden"
						onClick={logoutHandler}
					>
						<span className="max-md:hidden">Logout</span>
						<BiLogOut className="text-xl" />
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
