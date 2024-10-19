import CartItem from "../Cart/CartItem";
import { BiLoaderCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const OrderSummary = () => {
	const { cartList, totalPrice, updated } = useSelector(
		(state) => state.cartState
	);

	const { isLoggedIn } = useSelector((state) => state.authState);
	return (
		<div className="">
			<h1 className="text-3xl font-semibold text-center text-neutral-950 my-3">
				OrderSummary
			</h1>
			<div className="relative px-0.5 bg-neutral-100 overflow-y-auto">
				{updated && isLoggedIn && (
					<div className="absolute inset-0 flex justify-center items-center w-full h-full bg-black/35 z-10 rounded">
						<BiLoaderCircle className="w-8 h-8 animate-spin" />
					</div>
				)}
				<ul className=" flex flex-col gap-y-0.5 pt-3">
					{cartList.map((item) => (
						<CartItem key={item.productId} item={item} />
					))}
				</ul>
			</div>
			<div className="text-end mt-5">
				<p className="px-3 font-bold text-2xl text-gray-600">
					Subtotal : ${totalPrice}
				</p>
			</div>
		</div>
	);
};

export default OrderSummary;
