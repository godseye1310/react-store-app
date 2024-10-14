import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";

const AddtoCart = ({ product }) => {
	const dispatch = useDispatch();

	const [qty, setQty] = useState(1);
	const decreaseQty = () => {
		if (qty <= 1) return;
		setQty((prevQty) => prevQty - 1);
	};

	const increaseQty = () => {
		if (qty >= 10) return;
		setQty((prevQty) => prevQty + 1);
	};

	// console.log(product);

	const handleAddCart = async () => {
		// Add product to cart
		const itemData = {
			productId: product.id,
			quantity: qty,
			price: product.price,
			productName: product.productName,
			img: product.imageUrls[0],
		};

		// console.log(itemData);
		dispatch(addToCart(itemData));

		setQty(1);
	};
	return (
		<div className="w-full flex flex-col justify-center items-start gap-5">
			<div className="flex items-center justify-between gap-3 px-5 py-1.5 bg-neutral-300 rounded-3xl">
				<p className="text-lg font-semibold">Qty : </p>
				<div className="flex items-center">
					<button
						onClick={decreaseQty}
						className="btn btn-circle btn-outline btn-sm"
					>
						<BiMinus strokeWidth={3} />
					</button>
					<div className="mx-3">
						<p
							type="number"
							value={qty}
							className="bg-gray-700 w-14 text-white text-sm font-semibold rounded-lg block px-2.5 py-1"
							placeholder="1"
							required
						>
							{qty}
						</p>
					</div>
					<button
						onClick={increaseQty}
						className="btn btn-circle btn-outline btn-sm"
					>
						<BiPlus strokeWidth={1} className="text-xl" />
					</button>
				</div>
			</div>
			{product.stock > 0 && (
				<button
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
					type="button"
					onClick={handleAddCart}
				>
					Add to Cart
				</button>
			)}
			{product.stock <= 0 && (
				<button
					disabled
					className="w-full bg-red-500/60 text-white py-2 px-4 rounded-md"
				>
					Out of Stock
				</button>
			)}
		</div>
	);
};

export default AddtoCart;
