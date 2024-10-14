import { useEffect } from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/Layout/RootLayout";

import Home from "./pages/Home";
import Categories from "./pages/Categories/Categories";
import Category from "./pages/Categories/Category";
import ProductDetails from "./pages/Products/ProductDetails";
import Products from "./pages/Products/Products";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginStatus, fetchAndSetUserData } from "./store/auth-slice";
import Checkout from "./pages/Checkout";
function App() {
	const dispatch = useDispatch();
	const { isLoggedIn, uid } = useSelector((state) => state.authState);

	useEffect(() => {
		// Check for token and login status on app load
		dispatch(checkLoginStatus());

		// If logged in, fetch user data
		if (isLoggedIn && uid) {
			dispatch(fetchAndSetUserData(uid));
		}
	}, [dispatch, isLoggedIn, uid]);

	const router = createBrowserRouter([
		{
			path: "/",
			id: "root",
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "login",
					element: <Auth />,
				},
				{
					path: "products",
					children: [
						{ index: true, element: <Products /> },
						{
							path: ":productId",
							element: <ProductDetails />,
						},
					],
				},
				{
					path: "categories",
					children: [
						{ index: true, element: <Categories /> },
						{ path: ":categoryId", element: <Category /> },
					],
				},

				{
					path: "checkout",
					element: isLoggedIn ? (
						<Checkout />
					) : (
						<Navigate to="/login" />
					),
				},

				{
					path: "profile",
					element: isLoggedIn ? (
						<div>Profile Layout</div>
					) : (
						<Navigate to="/login" />
					),
					children: [
						{ index: true, element: <div>Profile</div> },
						{ path: "orders", element: <div>Orders</div> },
						{ path: "settings", element: <div>Settings</div> },
					],
				},
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
