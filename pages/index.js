import React from "react";
// components
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
	return (
		<div>
			<Hero />
			<Testimonial />
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
