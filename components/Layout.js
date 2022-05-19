import React from "react";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

function Layout({ children }) {
	return (
		<div>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
