import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	products: [],
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProductsData(state, action) {
			state.products = action.payload;
		},
	},
});

export const { setProductsData } = productSlice.actions;
export default productSlice.reducer;

export const fetchAllProducts = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				"https://firestore.googleapis.com/v1/projects/react-store-3a6915/databases/(default)/documents/products"
			);

			const data = await response.data.documents;
			// console.log(data);

			// Transform Firestore data into a simpler format
			// Transform Firestore data dynamically
			const transformedData = data.map((doc) => {
				//defined a productData object
				const productData = { id: doc.name.split("/").pop() }; // Get document ID

				// Loop through fields dynamically
				for (let key in doc.fields) {
					const valueType = Object.keys(doc.fields[key])[0]; // Get the type (e.g., stringValue)
					productData[key] = doc.fields[key][valueType]; // Set the value
				}

				// console.log(productData);
				return productData;
			});

			dispatch(setProductsData(transformedData));
		} catch (error) {
			console.log(error);
		}
	};
};
