// import React from "react";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "../components/Checkout/AddressForm";
import Payment from "../components/Checkout/Payment";
import OrderSummary from "../components/Checkout/OrderSummary";

const Checkout = () => {
	// Step management
	const [step, setStep] = useState(0);
	const [isNextDisabled, setIsNextDisabled] = useState(true);
	// Get cart data and user info from Redux store

	const { cartList } = useSelector((state) => state.cartState);

	// State for selected shipping address and payment method
	const [shipAddress, setShipAddress] = useState({
		name: "",
		address: {},
	}); // Default to the first address
	const [paymentMethod, setPaymentMethod] = useState("");

	const stepComponents = [
		<AddressForm
			key={"Address"}
			shipAddress={shipAddress}
			setShipAddress={setShipAddress}
		/>,
		<OrderSummary key={"Cart"} />,
		<Payment
			key={"Payment"}
			paymentMethod={paymentMethod}
			setPaymentMethod={setPaymentMethod}
			shipAddress={shipAddress}
		/>,
		<orderplaced key={"success"}>Order Placed</orderplaced>,
	];

	const nextStep = () => {
		if (step > stepComponents.length - 1) return;
		setStep((prevStep) => prevStep + 1);
	};

	const previousStep = () => {
		if (step <= 0) return;
		setStep((prevStep) => prevStep - 1);
	};

	useEffect(() => {
		if (shipAddress.address) {
			const { line1, city, pincode, country } = shipAddress.address;
			if (line1 && city && pincode && country) {
				setIsNextDisabled(false);
			} else {
				setIsNextDisabled(true);
			}
		} else {
			setIsNextDisabled(true);
		}
	}, [shipAddress, isNextDisabled]);

	return (
		<div className="p-3 min-h-[calc(100vh-132px)]">
			<h1 className="text-5xl font-semibold mb-4">Checkout</h1>

			<div>
				<ul className="steps">
					{stepComponents.map((_, index) => (
						<li
							key={index}
							className={`step step-neutral ${
								step > index ? "step-success" : ""
							} ${step === index ? "step-primary" : ""}`}
							data-content={`${
								step > index &&
								step !== stepComponents.length - 1
									? "✓"
									: ""
							} ${
								step === index &&
								step !== stepComponents.length - 1
									? "●"
									: ""
							} ${step === stepComponents.length - 1 ? "✓" : ""}`}
						>
							{_.key}
						</li>
					))}
				</ul>
			</div>

			<div className="bg-neutral-500 p-3 flex gap-9">
				<button
					onClick={previousStep}
					disabled={step === 0}
					className="btn btn-neutral btn-sm"
				>
					Back
				</button>
				<button
					onClick={nextStep}
					disabled={
						step === stepComponents.length - 1 ||
						(step === 0 && isNextDisabled) ||
						(step === 1 && !cartList.length) ||
						(step === 2 && !paymentMethod)
					}
					className="btn btn-neutral btn-sm"
				>
					Next
				</button>
			</div>

			<div>{stepComponents[step]}</div>
		</div>
	);
};

export default Checkout;
