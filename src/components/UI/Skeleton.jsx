import React from "react";

const Skeleton = ({ className }) => {
	return (
		<div
			className={`flex flex-col gap-4 ${className ? `${className}` : ""}`}
		>
			<div className="skeleton h-80 w-full"></div>
			<div className="skeleton h-4 w-28"></div>
			<div className="skeleton h-4 w-full"></div>
			<div className="skeleton h-4 w-full"></div>
		</div>
	);
};

export default Skeleton;
