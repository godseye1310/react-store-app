import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

const initialState = {
	products: [],
	loading: false, // Add loading state
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProductsData(state, action) {
			state.products = action.payload;
			state.loading = false; // Data fetched, set loading to false
		},
		setLoading(state, action) {
			state.loading = action.payload; // Set loading state
		},
	},
});

export const { setProductsData, setLoading } = productSlice.actions;

export default productSlice.reducer;

// Fetch Products from Firestore Thunk Action Creators//
// Using Axios very tedious and error-prone way.
export const fetchAllProducts = () => {
	return async (dispatch) => {
		dispatch(setLoading(true)); // Set loading to true before fetching
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
					// Set the value
					if (valueType === "integerValue") {
						productData[key] = Number(doc.fields[key][valueType]);
					} else if (valueType === "arrayValue") {
						productData[key] = doc.fields[key][
							valueType
						].values.map((val) => val.stringValue);
					} else {
						productData[key] = doc.fields[key][valueType]; // Set the value
					}
				}

				// console.log(productData);
				return productData;
			});

			// console.log(transformedData);

			dispatch(setProductsData(transformedData));
		} catch (error) {
			console.log(error);
		}
	};
};

// Fetch Products from Firestore Thunk Action Creators//
// Fetch Products from Firestore in real-time
export const getRealTImeProduct = () => {
	return async (dispatch) => {
		// Get real-time updates from Firestore
		const productsRef = collection(db, "products");
		try {
			const unsub = onSnapshot(productsRef, (snapshot) => {
				const products = snapshot.docs.map((doc) => {
					const { timeStamp, ...restProductData } = doc.data();
					return {
						id: doc.id,
						...restProductData,
						createdAt: timeStamp
							? timeStamp.toDate().toISOString()
							: null,
					};
				});
				dispatch(setProductsData(products));
				console.log(products);
			});

			// Return the unsub function for cleanup purposes
			return unsub; // Return the unsub function to useEffect, so it can be used in the component for cleanup
		} catch (error) {
			console.log(error);
		}
	};
};

// Other functions to fetch data from Firestore

// try {
// 	const querySnapshot = await getDocs(collection(db, "products"));

// 	const products = querySnapshot.docs.map((doc) => {
// 		const { timeStamp, ...restProductData } = doc.data();
// 		return {
// 			id: doc.id,
// 			...restProductData,
// 			createdAt: timeStamp
// 				? timeStamp.toDate().toISOString()
// 				: null,
// 		};
// 	});

// 	dispatch(setProductsData(products));
// 	console.log(products);
// } catch (error) {
// 	console.log(error);
// }

//		//

// const products = querySnapshot.docs.map((doc) => {
// 	const data = doc.data();
// 	// Convert Firestore Timestamps to serializable dates or strings
// 	const transformedData = Object.fromEntries(
// 		Object.entries(data).map(([key, value]) => {
// 			if (value instanceof Timestamp) {
// 				console.log({ ...data, id: doc.id });
// 			}

// 			return [
// 				key,
// 				value instanceof Timestamp
// 					? value.toDate().toISOString()
// 					: value,
// 			];
// 		})
// 	);
// 	return {
// 		id: doc.id,
// 		...transformedData,
// 	};
// });
