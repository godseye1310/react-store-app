import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";
import { BiShowAlt } from "react-icons/bi";

const ProductCard = ({ product, loading }) => {
	const dispatch = useDispatch();

	if (loading) {
		return <Skeleton className="h-[531px] w-full" />;
	}

	const handleAddCart = async () => {
		// Add product to cart
		const itemData = {
			productId: product.id,
			quantity: 1,
			price: product.price,
			productName: product.productName,
			img: product.imageUrls[0],
		};
		dispatch(addToCart(itemData));
	};

	return (
		<div
			key={product.id}
			className="flex flex-col bg-stone-100 shadow-xl w-full rounded-2xl"
		>
			<div className="h-1.5 bg-stone-100 rounded-t-2xl"></div>
			<Link to={`/products/${product.id}`}>
				<figure className="group bg-black/30 py-5 w-full relative overflow-hidden">
					<div className="w-full h-full absolute top-0 left-0 bg-black/60 backdrop-blur-sm -translate-x-full group-hover:translate-x-0 transition-all duration-300 flex justify-center items-center invisible group-hover:visible ">
						<BiShowAlt className="size-12 text-stone-300" />
					</div>
					<img
						src={product.imageUrls[0]}
						alt="Shoes"
						className="w-full h-80 object-contain object-center"
						loading="lazy"
					/>
				</figure>
			</Link>
			<div className="card-body px-3 w-full">
				<h2 className="card-title text-gray-600 mb-6">
					{product.productName}
				</h2>

				<div className="card-actions justify-start items-center mt-auto pr-3">
					<p className="text-xl text-neutral-600 font-bold">
						${product.price}
					</p>
					<button onClick={handleAddCart} className="btn btn-primary">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
