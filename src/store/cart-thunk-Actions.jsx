import axios from "axios";
import { setCart, setUpdted } from "./cart-slice";

const RTDB_URL = `https://react-store-3a6915-default-rtdb.asia-southeast1.firebasedatabase.app/Users`;

export const sendCartData = (cartList, totalItems, totalPrice, uid) => {
	return async (dispatch) => {
		try {
			await axios.put(`${RTDB_URL}/${uid}/cart.json`, {
				cartList,
				totalItems,
				totalPrice,
			});
			dispatch(setUpdted(false));
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchCartData = (uid) => {
	return async (dispatch) => {
		try {
			const cartData = await axios.get(`${RTDB_URL}/${uid}/cart.json`);
			console.log(cartData.data);

			if (cartData.data) {
				dispatch(setCart(cartData.data));
			}
		} catch (error) {
			console.log(error);
		}
	};
};
