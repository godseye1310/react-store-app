import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/UI/ProductCard";
import ScrollToTop from "../../components/ScrollToTop";
import Skeleton from "../../components/UI/Skeleton";

const Category = () => {
	// const [categories, setCategories] = useState([]);
	const { categoryId } = useParams();
	// console.log(categoryId);

	const { products, loading } = useSelector((state) => state.products);
	const categoryList = products?.filter((product) => {
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
				{!loading &&
					categoryList.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				{loading &&
					Array(12)
						.fill(0)
						.map((_, index) => <Skeleton key={index} />)}
			</div>
		</div>
	);
};

export default Category;
