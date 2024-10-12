import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";
import ScrollToTop from "../../components/ScrollToTop";

const Products = () => {
	const { products } = useSelector((state) => state.products);
	// console.log(products);

	// // Local loading state
	// const [loading, setLoading] = useState(true);
	// // Simulate data fetching logic (if fetching products from an API)
	// React.useEffect(() => {
	// 	setLoading(true); // Set loading to true before data is processed

	// 	// Simulate a fetch or data processing delay
	// 	setTimeout(() => {
	// 		setLoading(false); // Set loading to false after data is fetched/processed
	// 	}, 1000); // Adjust timeout as necessary based on actual API timing
	// }, [products]);

	return (
		<div className="p-3">
			<ScrollToTop />
			<h1 className="text-5xl text-coral-red  font-bold font-plus-jakarta-sans text-center my-10">
				Products
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
