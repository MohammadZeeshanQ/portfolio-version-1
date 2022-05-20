import React from "react";
// components
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
	return (
		<div>
			<Hero />
			<Projects />
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
