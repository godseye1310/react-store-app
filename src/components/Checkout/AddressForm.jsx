import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAddresses } from "../../store/auth-user-thunk-Actions";

const AddressForm = ({ shipAddress, setShipAddress }) => {
	const dispatch = useDispatch();
	const { uid, userData } = useSelector((state) => state.authState);

	// State for the two addresses and shipping selection
	const [address1, setAddress1] = useState(userData?.addresses?.[0] || {});
	const [address2, setAddress2] = useState(userData?.addresses?.[1] || {});

	// Handle input change for both addresses
	const handleInputChange = (e, addressIndex) => {
		const { name, value } = e.target;
		if (addressIndex === 1) {
			setAddress1((prevState) => ({ ...prevState, [name]: value }));
		} else if (addressIndex === 2) {
			setAddress2((prevState) => ({ ...prevState, [name]: value }));
		}
	};

	// Handle selecting a shipping address by name
	const handleShippingSelection = useCallback(
		(name) => {
			const selectedAddress = name === "address1" ? address1 : address2;
			setShipAddress({ name, address: selectedAddress });
		},
		[address1, address2, setShipAddress]
	);

	useEffect(() => {
		if (userData) {
			setAddress1(userData?.addresses?.[0] || {});
			setAddress2(userData?.addresses?.[1] || {});
		}
	}, [userData]);

	useEffect(() => {
		if (userData && !shipAddress.address) {
			handleShippingSelection("address1");
		}
	}, [userData, shipAddress.address, handleShippingSelection]);

	// Update shipAddress if address1 or address2 changes and is selected as the shipping address
	useEffect(() => {
		if (
			shipAddress.name === "address1" &&
			shipAddress.address !== address1
		) {
			setShipAddress({ name: "address1", address: address1 });
		} else if (
			shipAddress.name === "address2" &&
			shipAddress.address !== address2
		) {
			setShipAddress({ name: "address2", address: address2 });
		}
	}, [address1, address2, shipAddress, setShipAddress]);

	// Handle saving addresses to Firestore
	const handleSaveAddresses = async (e) => {
		e.preventDefault();
		try {
			await dispatch(saveAddresses(uid, address1, address2)); // Dispatch the thunk
			console.log("Addresses saved successfully!");
			// After saving, if the currently selected shipping address was updated, update shipAddress
			if (shipAddress.name === "address1") {
				setShipAddress({ name: "address1", address: address1 });
			} else if (shipAddress.name === "address2") {
				setShipAddress({ name: "address2", address: address2 });
			}
		} catch (error) {
			console.log("Failed to save addresses", error);
		}
	};

	return (
		<div>
			<h2 className="text-3xl font-semibold text-center text-neutral-950 my-3">
				Shipping Address
			</h2>

			<div className="bg-neutral-200 rounded-xl p-5 mb-5">
				<h5 className="text-xl font-medium mb-3">Your Details</h5>
				<div className="w-max flex flex-col gap-1.5">
					<label htmlFor="">
						Full Name :
						<input
							type="text"
							defaultValue={userData.fullName}
							readOnly
							className="input input-sm input-ghost"
						/>
					</label>
					<label htmlFor="">
						Phone Number :
						<input
							type="tel"
							defaultValue={userData.phone}
							readOnly
							className="input input-sm input-ghost"
						/>
					</label>
					<label htmlFor="">
						Email :
						<input
							type="email"
							defaultValue={userData.email}
							readOnly
							className="input input-sm input-ghost"
						/>
					</label>
				</div>
			</div>

			<div className="address-form">
				<form onSubmit={handleSaveAddresses} className="">
					<div className="collapse collapse-arrow bg-neutral-200 mb-5">
						<input
							type="radio"
							name="shippingAddress"
							checked={shipAddress.name === "address1"} // Check if address1 is selected
							onChange={() => handleShippingSelection("address1")}
						/>
						<div className="collapse-title text-xl font-medium inline-flex items-center">
							<input
								type="radio"
								className="radio radio-primary mr-2" // Optional: adjust spacing
								checked={shipAddress.name === "address1"} // Check if address1 is selected
								onChange={() =>
									handleShippingSelection("address1")
								}
							/>
							<span>Address 1</span>
						</div>
						<div className="collapse-content">
							<div className="address-section flex flex-wrap gap-6">
								<input
									type="text"
									placeholder="Line 1"
									name="line1"
									value={address1.line1 || ""}
									onChange={(e) => handleInputChange(e, 1)}
									className="input input-bordered w-full"
								/>
								<input
									type="text"
									placeholder="City"
									name="city"
									value={address1.city || ""}
									onChange={(e) => handleInputChange(e, 1)}
									className="input input-bordered flex-1 "
								/>
								<input
									type="text"
									placeholder="Pincode"
									name="pincode"
									value={address1.pincode || ""}
									onChange={(e) => handleInputChange(e, 1)}
									className="input input-bordered w-36 max-xs:w-full"
								/>
								<input
									type="text"
									placeholder="Country"
									name="country"
									value={address1.country || ""}
									onChange={(e) => handleInputChange(e, 1)}
									className="input input-bordered flex-1 "
								/>
							</div>
						</div>
					</div>

					<div className="collapse collapse-arrow bg-neutral-200">
						<input
							type="radio"
							name="shippingAddress"
							checked={shipAddress.name === "address2"} // Check if address2 is selected
							onChange={() => handleShippingSelection("address2")} // Pass address2 and name
						/>
						<div className="collapse-title text-xl font-medium inline-flex items-center">
							<input
								type="radio"
								className="radio radio-primary mr-2" // Optional: adjust spacing
								checked={shipAddress.name === "address2"}
								onChange={() =>
									handleShippingSelection("address2")
								}
							/>
							<span>Address 2</span>
						</div>
						<div className="collapse-content">
							<div className="address-section flex flex-wrap gap-6">
								<input
									type="text"
									placeholder="Line 1"
									name="line1"
									value={address2.line1 || ""}
									onChange={(e) => handleInputChange(e, 2)}
									className="input input-bordered w-full"
								/>
								<input
									type="text"
									placeholder="City"
									name="city"
									value={address2.city || ""}
									onChange={(e) => handleInputChange(e, 2)}
									className="input input-bordered flex-1 "
								/>
								<input
									type="text"
									placeholder="Pincode"
									name="pincode"
									value={address2.pincode || ""}
									onChange={(e) => handleInputChange(e, 2)}
									className="input input-bordered w-36 max-xs:w-full"
								/>
								<input
									type="text"
									placeholder="Country"
									name="country"
									value={address2.country || ""}
									onChange={(e) => handleInputChange(e, 2)}
									className="input input-bordered flex-1 "
								/>
							</div>
						</div>
					</div>

					<button type="submit" className="btn btn-primary mt-4">
						Save Addresses
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddressForm;
