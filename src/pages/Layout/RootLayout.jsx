import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const RootLayout = () => {
	return (
		<main className=" w-full relative flex flex-col min-h-screen">
			<Navbar />
			<div className="relative p-1.5 flex-1 flex flex-col dark:bg-gray-900">
				<div className="flex-1 p-3 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 dark:bg-gray-900">
					<Outlet />
				</div>
			</div>
		</main>
	);
};

export default RootLayout;
