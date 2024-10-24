import { AiFillShopping } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DropDownMenu = ({ logoutHandler }) => {
	const { email, fullName } = useSelector(
		(state) => state.authState.userData
	);

	return (
		<div className="dropdown dropdown-end">
			<div tabIndex={0} role="button" className="">
				<BsThreeDotsVertical />
			</div>
			<div
				tabIndex={0}
				className="dropdown-content bg-base-100 rounded-box z-10 w-48 p-1.5 shadow"
			>
				<div className="px-3 text-sm font-medium text-slate-700/90 bg-stone-300 rounded-lg">
					<p>{fullName}</p>
					<p>{email}</p>
				</div>
				<div className="divider my-0"></div>
				<ul className="menu menu-sm my-0 py-0 pl-0 font-normal">
					<li>
						<Link
							to={"/profile/orders"}
							className="flex items-center text-gray-600 hover:text-coral-red"
						>
							<AiFillShopping className="size-5 " /> Orders
						</Link>
					</li>
					<li>
						<Link
							to={"/profile"}
							className="flex items-center text-gray-600 hover:text-coral-red"
						>
							<MdAccountCircle className="size-5 " />
							Profile
						</Link>
					</li>

					<div className="divider my-0"></div>
					<button
						className="logbtn btn bg-neutral-300 btn-sm hover:bg-neutral-400 max-sm:btn-xs max-sm:hidden"
						onClick={logoutHandler}
					>
						<span className="">Logout</span>
						<BiLogOut className="text-xl" />
					</button>
				</ul>
			</div>
		</div>
	);
};

export default DropDownMenu;
