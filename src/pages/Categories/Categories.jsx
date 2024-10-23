// import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import { useSelector } from "react-redux";
import CategoryCard from "../../components/UI/CategoryCard";

const Categories = () => {
	const { products } = useSelector((state) => state.products);

	const categoryList = products.map((product) =>
		product.category.toLowerCase()
	);
	const categoryListUnique = [...new Set(categoryList)];

	// console.log(categoryListUnique);

	return (
		<section className="p3">
			<ScrollToTop />
			<h1 className="text-5xl text-coral-red  font-bold font-plus-jakarta-sans text-center my-10">
				<span className="text-slate-900">Cat</span>egories
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 px-6">
				{/* <div className="flex flex-wrap gap-6"> */}
				{categoryListUnique.map((category) => (
					<CategoryCard
						key={category}
						label={category}
						className="w-full h-80 shrink-0 shadow-2xl"
						to={`/categories/${category}`}
						bgImg={false}
					/>
				))}
			</div>
		</section>
	);
};

export default Categories;

// category
