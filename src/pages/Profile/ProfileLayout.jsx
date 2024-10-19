// import React from "react";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
	return (
		<div>
			<ul>ProfileLayout</ul>
			<h1 className="text-3xl">Profile Page</h1>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default ProfileLayout;
