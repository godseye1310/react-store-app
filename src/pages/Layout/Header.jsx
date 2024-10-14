import Navbar from "../../components/Navbar/Navbar";
import NavLinksBar from "../../components/Navbar/NavLinksBar";

const Header = () => {
	return (
		<header className="bg-base-300 flex flex-col justify-center items-center">
			<Navbar />
			<hr className="w-full border-b border-b-neutral-300" />
			<NavLinksBar />
		</header>
	);
};

export default Header;
