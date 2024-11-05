// import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { addToCart } from "../../store/cart-slice";
import { Link } from "react-router-dom";

const FeaturedItems = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);

	const featuredItems = products.filter((item) => item.featured);
	// console.log(featuredItems);

	const handleAddCart = async (product) => {
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
		<div className="w-full">
			<Swiper
				slidesPerView={1} // Default for small devices
				spaceBetween={10}
				navigation={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation]}
				className="mySwiper"
				style={{
					"--swiper-navigation-color": "#ff6347", // Custom arrow color
				}}
				breakpoints={{
					640: {
						slidesPerView: 1, // For screens >= 640px (small devices)
					},
					768: {
						slidesPerView: 3, // For screens >= 768px (medium devices)
					},
					1024: {
						slidesPerView: 4, // For screens >= 1024px (large devices)
					},
				}}
			>
				{featuredItems.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="card bg-base-100 max-w-80 h-80 image-full shadow-xl rounded-lg overflow-hidden mx-auto">
							<figure>
								<img
									src={item.imageUrls[0]} // Dynamically render the product image
									alt={item.productName}
									className="object-cover w-full h-full" // Make the image fill the container
								/>
							</figure>

							<div className="card-body bg-gradient-to-t from-black/70 via-transparent to-transparent p-4">
								<Link
									to={`/products/${item.id}`}
									className="flex-1"
								>
									<h2 className="card-title text-lg font-bold text-[#dd5646]">
										{item.productName}
									</h2>
									<p className="text-sm text-coral-red">
										${item.price}
									</p>
								</Link>
								<button
									onClick={() => handleAddCart(item)}
									className="btn btn-primary"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default FeaturedItems;
