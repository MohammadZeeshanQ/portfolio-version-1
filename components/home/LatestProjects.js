import React from "react";
import styled from "styled-components";
import { Grid, Divider } from "@mui/material";

// shared components
import HeaderComponent from "../shared/Header";
import PrimaryButton from "../shared/PrimaryButton";

// style
const Container = styled.section`
	padding: 4rem 0;
`;

const Wrapper = styled.div`
	width: 85%;
	margin: auto;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

export default function LatestProjects() {
	return (
		<Container>
			<Wrapper>
				<HeaderComponent>Latest project</HeaderComponent>
			</Wrapper>
		</Container>
	);
}
