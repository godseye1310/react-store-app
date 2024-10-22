import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, Thumbs } from "swiper/modules";

const ProductDisplaySlider = ({ productImages }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="flex select-none w-fit">
			{/* Thumbnails Section */}
			<div className=" bg-black/60 overflow-hidden max-h-fit w-24 max-sm:hidden">
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					direction="vertical"
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[Navigation, Thumbs]}
					className="h-[400px] box-border myThumbSwiper"
				>
					{productImages.map((image, index) => (
						<SwiperSlide
							key={index}
							className="opacity-40 hover:opacity-100 size-[100px]"
						>
							<img
								src={image}
								alt={`Thumbnail ${index + 1}`}
								className="object-contain size-[100px]"
								loading="eager"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Main Image Section */}
			<div className="ml-1.5 w-[400px] h-[400px] max-sm:w-[360px] max-sm:h-[400px]">
				<Swiper
					style={{
						"--swiper-navigation-color": "#475569",
					}}
					spaceBetween={10}
					loop={true}
					navigation={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[Navigation, Thumbs]}
					className="mainSwiper h-full w-full box-border"
				>
					{productImages.map((image, index) => (
						<SwiperSlide key={index}>
							<img
								src={image}
								alt={`Product Image ${index + 1}`}
								className="object-contain h-full w-full"
								loading="eager"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ProductDisplaySlider;
