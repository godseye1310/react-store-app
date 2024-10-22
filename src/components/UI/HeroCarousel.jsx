import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroCarousel = () => {
	const heroImgs = [
		"/Img/hero1.webp",
		"/Img/hero2.webp",
		"/Img/hero3.webp",
		"/Img/hero4.webp",
		"/Img/hero5.jpg",
		"/Img/hero6.webp",
	];

	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress(
				(prevProgress) => (prevProgress < 100 ? prevProgress + 2 : 0)
				// 5000ms/100ms = 50
				//100/50 = 2
				//increment 2% every 100ms
			);
		}, 100);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				// onAutoplayTimeLeft={onAutoplayTimeLeft}
				className=" h-full w-full bg-gradient-to-t from-black/50 to-gray-100 rounded-lg"
				onSlideChange={() => setProgress(0)}
				style={{
					"--swiper-navigation-color": "#ff6347", // Change navigation arrow color
					"--swiper-pagination-color": "#ff6347", // Change pagination bullet color
				}}
			>
				{heroImgs.map((img, i) => (
					<SwiperSlide key={i}>
						<img
							src={img}
							alt=""
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
				))}

				{/* Timer Progress Bar */}
				<div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 z-10">
					<div
						className="h-1 bg-coral-red"
						style={{
							width: `${progress}%`,
							transition: "width 0.1s linear",
						}}
					/>
				</div>
			</Swiper>
		</div>
	);
};

export default HeroCarousel;
