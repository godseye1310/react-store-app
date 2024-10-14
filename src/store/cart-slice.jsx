import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartList: [],
	totalItems: 0,
	totalPrice: 0,
	updated: false,
	loading: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			state.updated = true;

			const newItem = action.payload;
			state.totalItems += newItem.quantity;
			state.totalPrice =
				Math.round(
					(state.totalPrice + newItem.price * newItem.quantity) * 100
				) / 100;

			// Check if item is already in cart
			const existingItem = state.cartList.find(
				(item) => item.productId === newItem.productId
			);
			if (!existingItem) {
				// Item is not in cart, add it
				state.cartList.push(newItem);
			} else {
				// Item is already in cart, update quantity
				existingItem.quantity += action.payload.quantity;
			}
		},

		setCart: (state, action) => {
			const { cartList, totalItems, totalPrice } = action.payload;
			state.cartList = cartList || [];
			state.totalItems = totalItems;
			state.totalPrice = totalPrice;
		},

		removeFromCart: (state, action) => {
			state.updated = true;
			const removeId = action.payload;
			const removeItem = state.cartList.find(
				(item) => item.productId === removeId
			);
			if (removeItem.quantity) {
				state.totalItems--;
				state.totalPrice =
					Math.round((state.totalPrice - removeItem.price) * 100) /
					100;

				removeItem.quantity > 1
					? removeItem.quantity--
					: (state.cartList = state.cartList.filter(
							(item) => item.productId !== removeId
					  ));
			}
		},

		deleteFromCart: (state, action) => {
			state.updated = true;
			const removeId = action.payload;
			const removeItem = state.cartList.find(
				(item) => item.productId === removeId
			);
			state.totalItems = state.totalItems - removeItem.quantity;
			state.totalPrice =
				Math.round(
					(state.totalPrice -
						removeItem.price * removeItem.quantity) *
						100
				) / 100;

			state.cartList = state.cartList.filter(
				(item) => item.productId !== removeId
			);
		},

		setUpdted: (state, action) => {
			state.updated = action.payload;
		},
	},
});

export const { addToCart, removeFromCart, deleteFromCart, setCart, setUpdted } =
	cartSlice.actions;
export default cartSlice.reducer;
