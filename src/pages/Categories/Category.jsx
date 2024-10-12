import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import ScrollToTop from "../../components/ScrollToTop";

const Category = () => {
	// const [categories, setCategories] = useState([]);
	const { categoryId } = useParams();
	// console.log(categoryId);

	const { products } = useSelector((state) => state.products);
	const categoryList = products.filter((product) => {
		return product.category.toLowerCase() === categoryId;
	});

	// console.log(categoryList);
	return (
		<div className="p-3">
			<ScrollToTop />
			<h1 className="text-5xl text-coral-red  font-bold font-plus-jakarta-sans text-center my-10">
				<span className="capitalize">{categoryId}</span>s
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
				{categoryList.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Category;
