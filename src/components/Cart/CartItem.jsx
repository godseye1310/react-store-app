// import React from "react";
import { MdDeleteForever } from "react-icons/md";
import {
	addToCart,
	deleteFromCart,
	removeFromCart,
} from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const increaseQty = () => {
		if (item.quantity >= 10) return;
		dispatch(addToCart({ ...item, quantity: 1 }));
	};

	const decreaseQty = () => {
		dispatch(removeFromCart(item.productId));
	};

	const deleteItem = () => {
		dispatch(deleteFromCart(item.productId));
	};

	return (
		<li className="bg-neutral-200 py-1.5 px-0 pr-1.5 ">
			<div className="flex items-center gap-4">
				<figure className="mask mask-squircle w-20 h-20 ">
					<img
						src={item.img}
						alt={item.productName}
						className="object-contain w-20 h-20"
					/>
				</figure>

				<div className="flex-1 flex flex-col items-stretch gap-3">
					<div className="font-bold">{item.productName}</div>

					<div className="flex items-center gap-2">
						<button
							onClick={decreaseQty}
							className="btn btn-square btn-xs bg-neutral-300 outline-none hover:bg-gray-700 hover:text-white"
						>
							<BiMinus strokeWidth={3} />
						</button>
						<span className="bg-gray-700 w-14 text-white text-sm font-semibold rounded-lg block px-2.5 py-1">
							{item.quantity}
						</span>
						<button
							onClick={increaseQty}
							className="btn btn-square btn-xs bg-neutral-300 outline-none hover:bg-gray-700 hover:text-white"
						>
							<BiPlus strokeWidth={1} className="text-xl" />
						</button>
					</div>
				</div>
				<div className="flex flex-col items-end gap-2 justify-center">
					<div className="text-sm opacity-75 font-semibold font-poppins shrink-0 min-w-max">
						${item.price}
					</div>
					<button onClick={deleteItem} className="">
						<MdDeleteForever className="text-red-500/75 hover:text-red-500 size-6" />
					</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
