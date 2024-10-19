import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: !!localStorage.getItem("token") || false,
	userData: {
		addresses: [],
	},
	uid: localStorage.getItem("uid") || "",
	token: localStorage.getItem("token") || "",
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
			state.userData = { ...state.userData, ...action.payload.userData };
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
