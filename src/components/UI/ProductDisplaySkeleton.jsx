// import React from "react";

const ProductDisplaySkeleton = () => {
	return (
		<div className="flex w-full gap-4">
			<div className="w-[500px] grow-[0] shrink-0 max-sm:w-full">
				<div className="skeleton h-[400px]  w-full"></div>
			</div>
			<div className="flex-1 min-w-[450px] max-sm:w-full flex flex-col gap-3 ">
				<div className="skeleton h-10 w-full"></div>
				<div className="skeleton h-6 w-36"></div>
				<div className="skeleton h-6 w-72"></div>

				<div className="skeleton h-8 w-60 mt-10"></div>
				<div className="skeleton h-8 w-60"></div>
				<div className="skeleton h-4 w-20"></div>

				<div className="skeleton h-6 w-64 mt-6"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
			</div>
		</div>
	);
};

export default ProductDisplaySkeleton;
