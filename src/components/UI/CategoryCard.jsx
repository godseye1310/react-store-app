// import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategoryCard = ({ to, label, bgImg, className, bgIcon }) => {
	let defImg;
	if (label === "phone") {
		defImg = "/CategoryImg/cat1.png";
	} else if (label === "tablet") {
		defImg = "/CategoryImg/cat2.png";
	} else if (label === "laptop") {
		defImg = "/CategoryImg/cat3.png";
	} else if (label === "monitor") {
		defImg = "/CategoryImg/cat4.avif";
	} else if (label === "accessories") {
		defImg = "/CategoryImg/cat5.jpg";
	}

	return (
		<div
			className={`group card bg-blue-500 text-coral-red overflow-hidden font-montserrat font-semibold rounded-2xl shadow-md border-4 border-opacity-75 border-coral-red ${className}`}
		>
			<Link
				to={to}
				className="text-xl h-full w-full font-semibold bg-[length:75%] bg-no-repeat bg-center relative"
				style={{ backgroundImage: `url(${bgImg || defImg})` }}
			>
				<div className="absolute left-5 top-1/2 -translate-y-1/2 z-0">
					{bgIcon ? bgIcon : null}
				</div>
				<div className="flex justify-center items-center h-full w-full gap-3 bg-black/75 z-10 capitalize">
					{label}
					{label[label.length - 1] !== "s" ? "s" : ""}{" "}
					<span>
						<BsArrowRight
							className="h-6 w-6 translate-x-0 group-hover:translate-x-3 transition-transform duration-300"
							strokeWidth={1}
						/>
					</span>
				</div>
			</Link>
		</div>
	);
};

export default CategoryCard;
