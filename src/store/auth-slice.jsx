import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { fetchCartData } from "./cart-thunk-Actions";

const initialState = {
	isLoggedIn: false,
	userData: {},
	uid: "",
	token: "",
};

const authSlice = createSlice({
	name: "authState",
	initialState,
	reducers: {
		handleLogin: (state, action) => {
			state.isLoggedIn = true;
			state.uid = action.payload.uid;
			state.token = action.payload.token;

			// Save token to localStorage for persistence
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("uid", action.payload.uid);
		},
		setUserData: (state, action) => {
			state.userData = action.payload.userData;
		},
		checkLoginStatus: (state) => {
			const token = localStorage.getItem("token");
			const uid = localStorage.getItem("uid");

			if (token) {
				state.isLoggedIn = true;
				state.token = token;
				state.uid = uid;
			}
		},
		handleLogout: (state) => {
			state.isLoggedIn = false;
			state.token = "";
			state.uid = "";
			state.userData = {};

			// Clear localStorage on logout
			localStorage.removeItem("token");
			localStorage.removeItem("uid");
		},
	},
});

export const { handleLogin, setUserData, checkLoginStatus, handleLogout } =
	authSlice.actions;
export default authSlice.reducer;

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
			return userSnap.data();
		} else {
			console.error("No such document!");
			return null;
		}
	} catch (error) {
		console.error("Error fetching user data:", error);
		throw error;
	}
};
