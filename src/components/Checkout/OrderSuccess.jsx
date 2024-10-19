import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
	return (
		<div>
			<div className="flex items-center justify-center bg-emerald-500 h-96 card glass">
				<h1 className="text-5xl font-poppins font-bold">
					Order Placed Successfully
				</h1>

				<Link
					to="/products"
					className="link link-primary link-hover mt-5"
				>
					Checkout Other Products
				</Link>
			</div>
		</div>
	);
};

export default OrderSuccess;
