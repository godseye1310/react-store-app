import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to top
	}, [pathname]); // Trigger on pathname change

	return null; // This component doesn't render anything
};

export default ScrollToTop;