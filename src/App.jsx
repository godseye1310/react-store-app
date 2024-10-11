// import React from 'react'
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/Layout/RootLayout";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Categories from "./pages/Categories/Categories";
import Category from "./pages/Categories/Category";
import ProductDetails from "./pages/Products/ProductDetails";
import Products from "./pages/Products/Products";
function App() {
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
					element: <LoginPage />,
				},
				{
					path: "signup",
					element: <LoginPage />,
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
				{ path: "cart", element: <div>Cart</div> },

				{ path: "orders", element: <div>Orders</div> },
				{ path: "settings", element: <div>Settings</div> },
				{ path: "profile", element: <div>Profile</div> },
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
