import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "./auth-Slice";
import productSlice from "./products-slice";

const store = configureStore({
	reducer: {
		// authState: authSlice,
		products: productSlice,
	},
});

export default store;
