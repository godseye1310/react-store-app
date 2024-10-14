import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "./auth-Slice";
import productSlice from "./products-slice";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
	reducer: {
		// authState: authSlice,
		products: productSlice,
		authState: authSlice,
		cartState: cartSlice,
	},
});

export default store;
