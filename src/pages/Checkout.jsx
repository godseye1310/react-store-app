import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "../components/Checkout/AddressForm";
import Payment from "../components/Checkout/Payment";
import OrderSummary from "../components/Checkout/OrderSummary";
import OrderSuccess from "../components/Checkout/OrderSuccess";

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
			setStep={setStep}
		/>,
		<OrderSuccess key={"Done"} />,
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
			<h1 className="text-5xl font-medium mb-5 text-center font-palanquin  uppercase">
				Checkout
			</h1>
			<div className="max-w-screen-lg mx-auto max-sm:w-full">
				<div className="mb-4 flex justify-between flex-wrap max-xs:justify-center gap-5">
					<ul className="steps">
						{stepComponents.map((_, index) => (
							<li
								key={index}
								className={`step step-neutral ${
									step > index ? "step-success" : ""
								} ${step === index ? "step-primary" : ""}${
									step === stepComponents.length - 1
										? " step-success"
										: ""
								}`}
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
								} ${
									step === stepComponents.length - 1
										? "✓"
										: ""
								}`}
							>
								<span className="text-sm text-gray-600 font-semibold font-poppins">
									{_.key}
								</span>
							</li>
						))}
					</ul>

					<div className="bg-neutral-200 rounded-2xl w-fit p-3 flex gap-9">
						<button
							onClick={previousStep}
							disabled={
								step === 0 || step === stepComponents.length - 1
							}
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
								step === 2
							}
							className="btn btn-neutral btn-sm"
						>
							Next
						</button>
					</div>
				</div>

				<div>{stepComponents[step]}</div>
			</div>
		</div>
	);
};

export default Checkout;
