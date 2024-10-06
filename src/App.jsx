// import React from 'react'
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/Layout/RootLayout";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
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
						{ index: true, element: <div>Products</div> },
						{
							path: ":productId",
							element: <div>ProductInfo</div>,
						},
					],
				},
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
