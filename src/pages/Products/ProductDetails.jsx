import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import ProductDisplaySkeleton from "../../components/UI/ProductDisplaySkeleton";

import AddtoCart from "../../components/Cart/AddtoCart";
import ProductDisplaySlider from "../../components/UI/ProductDisplaySlider";

const ProductDetails = () => {
	const { productId } = useParams();
	const { products, loading } = useSelector((state) => state.products);
	// console.log(products);

	if (loading || products.length === 0) {
		return (
			<div>
				<ProductDisplaySkeleton />
			</div>
		);
	}

	const product = products.find((product) => product.id === productId);
	// console.log(product);

	// // If the product isn't found, display a message
	// if (!product) {
	// 	return <div>Product not found.</div>;
	// }

	return (
		<div className="flex flex-col justify-center pb-24 px-3 pt-2 min-h-[calc(100vh-132px)]">
			<ScrollToTop />

			<section className=" flex flex-wrap items-start gap-10 bg-white shadow-md rounded-lg p-6  w-full">
				<div className="grow-[0] shrink-0 bg-[#f5f5f5] max-sm:w-full">
					<ProductDisplaySlider productImages={product.imageUrls} />
				</div>

				<div className="flex-1 min-w-[450px] max-sm:w-full">
					<h1 className="text-5xl font-semibold text-gray-800 mb-2">
						{product.productName}
					</h1>
					<p className="text-3xl text-gray-600 mb-4">
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

					<div className="mt-12 py-1 w-80">
						<AddtoCart product={product} />

						<p className="text-[#777] mt-4 text-lg">
							Stock : ({product.stock})
						</p>
					</div>

					<div className="mt-2 flex flex-col pt-6">
						<h3 className="text-3xl font-montserrat font-semibold">
							Product Description
						</h3>
						<p className="text-[#777] font-medium font-poppins">
							{product.description}
						</p>

						<h3 className="text-3xl mt-8 font-montserrat font-semibold">
							Product Details
						</h3>
						<div className="rounded-lg bg-gray-500 p-2 mt-4">
							<table className="">
								<tbody className=" text-white/75">
									<tr className=" font-medium box-content odd:bg-black/50 even:bg-gray-500">
										<td className="px-6 py-2">Name</td>
										<td className="px-6 py-2">
											{product.productName}
										</td>
									</tr>
									<tr className=" font-medium box-content odd:bg-black/50 even:bg-gray-500">
										<td className="px-6 py-2">
											Description
										</td>
										<td className="px-6 py-2">
											{product.description}
										</td>
									</tr>
									<tr className=" font-medium box-content odd:bg-black/50 even:bg-gray-500">
										<td className="px-6 py-2">ID</td>
										<td className="px-6 py-2">
											{productId}
										</td>
									</tr>
									<tr className=" font-medium box-content odd:bg-black/50 even:bg-gray-500">
										<td className="px-6 py-2">Size</td>
										<td className="px-6 py-2">1 Size</td>
									</tr>
									<tr className=" font-medium box-content odd:bg-black/50 even:bg-gray-500">
										<td className="px-6 py-2">Details</td>
										<td className="px-6 py-2">
											Other Details...
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductDetails;
