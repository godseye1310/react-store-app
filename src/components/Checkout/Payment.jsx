// import React from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cart-thunk-Actions";

const Payment = ({ shipAddress, paymentMethod, setPaymentMethod }) => {
	const dispatch = useDispatch();
	const { cartList, totalPrice } = useSelector((state) => state.cartState);
	const { userData, uid } = useSelector((state) => state.authState);

	const handlePaymentChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	const placeOrder = async () => {
		const { email, fullName, phone } = userData;
		const orderData = {
			email,
			fullName,
			phone,
			shippingAddress: shipAddress, // Use the selected shipping address
			orderItems: cartList, // Items from cart
			totalPrice,
			orderStatus: "ordered",
			paymentMethod, // COD, Credit Card, UPI
			timeStamp: serverTimestamp(), // Firestore timestamp
		};

		try {
			// Add the order to the "orders" collection
			const docRef = await addDoc(collection(db, "orders"), orderData);
			console.log("Order placed with ID: ", docRef.id);
			dispatch(clearCart(uid));
		} catch (e) {
			console.error("Error adding order: ", e);
		}
	};
	return (
		<div className="p-3">
			<h3 className="text-3xl font-semibold text-neutral-950 my-3">
				Select Payment Method
			</h3>

			<div className="flex flex-col gap-2 mt-4">
				<label>
					<input
						type="radio"
						value="COD"
						checked={paymentMethod === "COD"}
						onChange={handlePaymentChange}
					/>{" "}
					Cash on Delivery (COD)
				</label>
				<label>
					<input
						type="radio"
						value="CreditCard"
						checked={paymentMethod === "CreditCard"}
						onChange={handlePaymentChange}
					/>{" "}
					Credit Card
				</label>
				<label>
					<input
						type="radio"
						value="UPI"
						checked={paymentMethod === "UPI"}
						onChange={handlePaymentChange}
					/>{" "}
					UPI
				</label>
			</div>

			<button
				onClick={placeOrder}
				className="btn btn-primary my-5"
				disabled={paymentMethod === "" || shipAddress === ""}
			>
				Place Order
			</button>
		</div>
	);
};

export default Payment;
