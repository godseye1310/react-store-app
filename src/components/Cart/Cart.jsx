import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { BiLoaderCircle } from "react-icons/bi";
import { sendCartData } from "../../store/cart-thunk-Actions";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartList, totalItems, totalPrice, updated } = useSelector(
		(state) => state.cartState
	);

	const { uid, isLoggedIn } = useSelector((state) => state.authState);

	useEffect(() => {
		if (uid && isLoggedIn && updated) {
			dispatch(sendCartData(cartList, totalItems, totalPrice, uid));
		}
	}, [updated, cartList, totalItems, totalPrice, uid, dispatch, isLoggedIn]);

	const handleCheckOut = () => {
		console.log("checkout", cartList);

		if (!isLoggedIn) {
			navigate("/login");
		} else {
			navigate("/checkout");
		}
	};

	return (
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
				<div className="flex flex-col p-1 bg-base-200 text-base-content h-screen w-[453px] max-xs:w-full">
					{/* Cart Header here */}
					<div className="flex justify-between items-center px-3">
						<div className="flex items-center gap-2">
							<h2 className="text-2xl font-bold">Cart</h2>
							<p className="badge badge-secondary">
								{totalItems}
							</p>
						</div>
						<label
							htmlFor="user-cart-drawer"
							className="group btn btn-square btn-error btn-sm"
						>
							<IoClose className="size-6 text-white transition duration-200 group-hover:rotate-90" />
						</label>
					</div>
					<div className="divider my-1"></div>

					{/* Cart Content here */}
					<div className="relative px-0.5 h-[85dvh] bg-neutral-100 overflow-y-auto">
						{updated && isLoggedIn && (
							<div className="absolute inset-0 flex justify-center items-center w-full h-full bg-black/60 z-10 rounded">
								<BiLoaderCircle className="w-8 h-8 animate-spin" />
							</div>
						)}
						<ul className=" flex flex-col gap-y-0.5 pt-3">
							{cartList.map((item) => (
								<CartItem key={item.productId} item={item} />
							))}
						</ul>
					</div>

					<div className="divider my-1"></div>
					{/* Cart Footer here */}
					<div>
						<div className="flex justify-between items-center px-3 font-bold text-2xl text-gray-600 ">
							<p>Subtotal : ${totalPrice}</p>
							<button
								onClick={handleCheckOut}
								className="btn btn-secondary btn-outline text-lg"
							>
								Place Order
							</button>
						</div>
					</div>

					<div className="divider my-1"></div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
