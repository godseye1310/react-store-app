import { Link } from "react-router-dom";
import Skeleton from "./UI/Skeleton";

const ProductCard = ({ product, loading }) => {
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

		console.log(itemData);
	};

	return (
		<div
			key={product.id}
			className="flex flex-col rounded-2xl bg-base-100 shadow-xl w-full overflow-hidden"
		>
			<Link to={`/products/${product.id}`}>
				<figure className="bg-black/10 py-5 w-full ">
					<img
						src={product.imageUrls[0]}
						alt="Shoes"
						className="w-full h-80 object-scale-down"
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
