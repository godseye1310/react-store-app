import React from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const ProductDetails = () => {
	const { productId } = useParams();

	const { products } = useSelector((state) => state.products);

	const product = products.find((product) => product.id === productId);

	const handleAddCart = () => {
		// Add product to cart
	};

	return (
		<div className="flex justify-center pb-24 px-3 pt-2">
			<ScrollToTop />
			<section className=" flex gap-10 bg-white shadow-md rounded-lg p-6  w-full">
				<div className=" max-sm:hidden">
					<img
						src={product.imageUrls.values[0].stringValue}
						alt={product.title}
						className="w-full h-auto object-cover rounded-md mb-4"
						loading="lazy"
					/>
					<button
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
						type="button"
						onClick={handleAddCart}
					>
						Add to Cart
					</button>
				</div>

				<div className="">
					<h1 className="text-3xl font-semibold text-gray-800 mb-2">
						{product.productName}
					</h1>
					<p className="text-lg text-gray-600 mb-4">
						Price:{" "}
						<span className="font-medium">${product.price}</span>
					</p>
					<p className=" inline-flex gap-3 font-medium text-[#777]">
						<span className="flex items-center gap-1 bg-green-600 rounded-3xl px-2  w-max text-white font-medium max-h-6">
							4.5
							<FaStar className="text-yellow-500" />
						</span>
						<span> 18,092 ratings and 1,604 reviews</span>
					</p>

					<div className=" hidden max-sm:block mt-3">
						<img
							src={product.imageUrl}
							alt={product.productName}
							className="w-full h-auto object-cover rounded-md mb-4"
						/>
						<button
							className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
							type="button"
							onClick={handleAddCart}
						>
							Add to Cart
						</button>
					</div>

					<div className="mt-2 flex flex-col pt-6">
						<h3 className="text-2xl font-semibold">
							Product Details
						</h3>
						<p className="text-[#777] font-medium">
							Color is a complex and multifaceted concept, with
							both physical and psychological aspects.
						</p>

						<table className="mt-5 p-2">
							<tbody className=" text-white/75">
								<tr className=" font-medium box-content odd:bg-black/45 even:bg-gray-300">
									<td className="px-6 py-2">Color</td>
									<td className="px-6 py-2">
										{product.productName}
									</td>
								</tr>
								<tr className=" font-medium box-content odd:bg-black/45 even:bg-gray-500">
									<td className="px-6 py-2">Pattern</td>
									<td className="px-6 py-2">
										fluent {product.productName}
									</td>
								</tr>
								<tr className=" font-medium box-content odd:bg-black/45 even:bg-gray-500">
									<td className="px-6 py-2">Color code</td>
									<td className="px-6 py-2">{productId}</td>
								</tr>
								<tr className=" font-medium box-content odd:bg-black/45 even:bg-gray-500">
									<td className="px-6 py-2">Quantity</td>
									<td className="px-6 py-2">1</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductDetails;
