import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const RootContainer = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`relative p-1 flex-1 flex flex-col w-full max-w-[1500px] mx-auto bg-base-100 max-wide:w-full ${
				isScrolled ? "pt-20" : ""
			}`}
		>
			<div className="flex-1 border-2 border-gray-600 border-dashed rounded-lg dark:border-gray-300 ">
				<Outlet />
			</div>
		</div>
	);
};

export default RootContainer;
