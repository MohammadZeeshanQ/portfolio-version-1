import React from "react";
// components
import Hero from "../components/home/Hero";
import Service from "../components/home/Service";
import Projects from "../components/home/Projects";
import LatestProjects from "../components/home/LatestProjects";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<Service />
			<LatestProjects />
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
