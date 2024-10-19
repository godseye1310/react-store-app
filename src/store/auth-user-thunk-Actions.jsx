import { doc, getDoc, setDoc } from "firebase/firestore";
import { setUserData } from "./auth-slice";
import { fetchCartData } from "./cart-thunk-Actions";
import { db } from "../firebaseConfig";

// thunk action to fetch user data
export const fetchAndSetUserData = (uid) => {
	return async (dispatch) => {
		try {
			dispatch(fetchCartData(uid));
			const userData = await getUserDataFromFirestore(uid);
			//can fetch cart here on user login
			if (userData) {
				dispatch(setUserData({ userData }));
			}
		} catch (error) {
			console.error("Failed to fetch user data:", error);
		}
	};
};

// helper function to fetch user data from Firestore
const getUserDataFromFirestore = async (uid) => {
	try {
		const userDoc = doc(db, "users", uid);
		const userSnap = await getDoc(userDoc);

		if (userSnap.exists()) {
			const userData = userSnap.data();
			return { ...userData, addresses: userData.addresses || [] };
		} else {
			console.error("No such document!");
			return null;
		}
	} catch (error) {
		console.error("Error fetching user data:", error);
		throw error;
	}
};

// Thunk action to save addresses
export const saveAddresses = (uid, address1, address2) => {
	return async (dispatch) => {
		try {
			const userDocRef = doc(db, "users", uid);
			const updatedAddresses = [address1, address2].filter(
				(address) => address.line1
			);

			// Save the addresses in the user's document
			await setDoc(
				userDocRef,
				{ addresses: updatedAddresses },
				{ merge: true }
			);
			console.log("Addresses saved successfully");

			// Fetch updated user data and update Redux state
			const userData = await getUserDataFromFirestore(uid); // Make sure to define this function
			if (userData) {
				dispatch(setUserData({ userData }));
			}
		} catch (error) {
			console.error("Error saving addresses:", error);
			throw error; // Propagate error for handling in component
		}
	};
};
