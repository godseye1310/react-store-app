import { useEffect, useState } from "react";
import { BiSolidSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
	const { products } = useSelector((state) => state.products);

	const [searchText, setSearchText] = useState("");

	const filteredProducts = searchText.trim()
		? products.filter((product) => {
				const lowerSearchText = searchText.toLowerCase();
				return (
					product.productName
						.toLowerCase()
						.includes(lowerSearchText) ||
					product.brand.toLowerCase().includes(lowerSearchText) ||
					product.category.toLowerCase().includes(lowerSearchText)
				);
		  })
		: [];

	const { pathname } = useLocation();
	// console.log(filteredProducts);
	useEffect(() => {
		setSearchText("");
	}, [pathname]);

	return (
		<div className="relative w-full ">
			<div className="flex border-2 pl-1.5 pr-6 py-1.5 rounded-3xl max-w-3xl max-[700px]:w-48 max-sm:w-full bg-stone-50 gap-x-3 items-center relative">
				<BiSolidSearch className="text-neutral-500 size-6 shrink-0" />
				<input
					type="text"
					name="search"
					id=""
					className="flex-1 bg-transparent border-none outline-none focus-visible:outline-none max-[700px]:w-full "
					onChange={(e) => setSearchText(e.target.value)}
					value={searchText}
					placeholder="Search products..."
				/>
				<button
					onClick={() => setSearchText("")}
					className="shrink-0 w-fit absolute right-1.5 rounded-full hover:bg-neutral-300"
				>
					✕
				</button>
			</div>
			{searchText && (
				<div className="absolute z-10 bg-neutral-300 max-sm:bg-transparent max-sm:shadow-none rounded-2xl shadow-xl mt-3 max-h-[75vh] overflow-y-auto max-md:mx-auto">
					{filteredProducts.length > 0 ? (
						<ul className=" flex flex-col p-1.5 min-h-60 w-80 max-xs:w-full">
							{filteredProducts.map((product) => (
								<li
									key={product.id}
									className=" w-full px-3 py-1"
								>
									<Link
										to={`/products/${product.id}`}
										className="flex gap-3 items-center hover:text-coral-red"
									>
										<figure className="bg-slate-700 min-w-8 size-8 rounded-lg">
											<img
												src={product.imageUrls[0]}
												alt=""
												className="w-full h-full object-scale-down"
											/>
										</figure>
										<p className="text-xs font-semibold">
											{product.productName}
										</p>
									</Link>
								</li>
							))}
						</ul>
					) : (
						<div className="flex justify-center items-center w-80 h-60">
							<p>No Products Found</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
