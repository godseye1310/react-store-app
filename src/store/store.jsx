import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "./auth-Slice";
import productSlice from "./products-slice";
import authSlice from "./auth-slice";

const store = configureStore({
	reducer: {
		// authState: authSlice,
		products: productSlice,
		authState: authSlice,
	},
});

export default store;
