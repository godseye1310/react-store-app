import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";
import ScrollToTop from "../../components/ScrollToTop";
import Skeleton from "../../components/UI/Skeleton";

const Products = () => {
	const { products, loading } = useSelector((state) => state.products);
	// console.log(products);

	console.log(loading);

	// Show loading skeletons when products are loading
	// if (loading) {
	// 	return (
	// 		<div>
	// 			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
	// 				{/* Show multiple skeletons for the placeholder */}
	// 				{Array(12)
	// 					.fill(0)
	// 					.map((_, index) => (
	// 						<Skeleton key={index} />
	// 					))}
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<div className="p-3">
			<ScrollToTop />
			<h1 className="text-5xl text-coral-red  font-bold font-plus-jakarta-sans text-center my-10">
				Products
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
				{!loading &&
					products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							loading={loading}
						/>
					))}
				{loading &&
					Array(12)
						.fill(0)
						.map((_, index) => <Skeleton key={index} />)}
			</div>
		</div>
	);
};

export default Products;
