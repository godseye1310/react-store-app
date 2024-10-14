import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/products-slice";
import Cart from "../../components/Cart/Cart";
import RootContainer from "../../components/RootContainer";

const RootLayout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<main
			id="main"
			className=" w-full relative flex flex-col min-h-screen bg-base-200 max-w-[2400px] mx-auto max-wide:w-full overflow-x-hidden"
			data-theme="light"
		>
			<div className="bg-base-300">
				<Header />
			</div>

			<Cart />

			<RootContainer />

			<Footer />
		</main>
	);
};

export default RootLayout;
