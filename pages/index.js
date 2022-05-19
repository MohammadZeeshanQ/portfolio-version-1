import React from "react";
// components
import Hero from "../components/home/Hero";

export default function Home() {
	return (
		<div>
			<Hero />
		</div>
	);
}

export async function getServerSideProps() {
	return {
		props: {
			state: "Checking",
		},
	};
}
