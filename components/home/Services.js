import React from "react";
import styled from "styled-components";
import { Grid, Divider } from "@mui/material";

// shared components
import PrimaryButton from "../shared/PrimaryButton";

// style
const Container = styled.section`
	background-color: var(--ThirdColor);
	padding: 4rem 0;
`;

const Wrapper = styled.div`
	width: 90%;
	margin: auto;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

const HeaderWrapper = styled.div`
	@media (max-width: 600px) {
		text-align: center;
		margin-bottom: 3rem;
	}
`;

const Header = styled.h2`
	/* width */
	max-width: 70%;
	/* color */
	color: var(--TextMainColor);
	/* font */
	font-size: 3.5rem;
	letter-spacing: 1px;
	text-transform: capitalize;

	@media (max-width: 600px) {
		font-size: 2rem;
		max-width: 100%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2rem;
	}
`;

const ServiceWrapper = styled.div`
	/* padding and margin */
	padding: 1rem;
	margin-block: 1rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.5rem;
		margin-block: 0.5rem;
	}
`;

const ServiceBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	/* position */
	position: relative;
	z-index: 0;
	overflow: hidden;

	@media (max-width: 600px) {
		justify-content: center;
		gap: 1rem;
	}
`;

const ServicesLine = styled.hr`
	width: 90%;
	height: 3px;
	background: var(--TextMainColor);
	border: 2px solid var(--TextMainColor);
	border-radius: 1rem;
	opacity: 0.5;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		height: 1px;
		border: 1px solid var(--TextMainColor);
	}
`;

const ServiceNumberBox = styled.div`
	padding-block: 1rem;
`;

const ServiceNumber = styled.p`
	/* color */
	color: var(--TextMainColor);
	opacity: 0.2;
	/* font */
	font-size: 4rem;
	font-weight: 800;
	letter-spacing: 1px;
	text-transform: capitalize;

	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2rem;
	}
`;

const ServiceTextWrapper = styled.div`
	padding-block: 1rem;

	@media (max-width: 600px) {
		padding-top: 0;
	}
`;

const ServiceHeader = styled.h3`
	/* color */
	color: var(--TextMainColor);
	/* font */
	font-size: 3rem;
	font-weight: 600;
	letter-spacing: 1px;
	/* sizing  */
	max-width: 70%;
	text-transform: capitalize;

	@media (max-width: 600px) {
		font-size: 2.5rem;
		max-width: 100%;
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.5rem;
	}
`;

const ButtonWrapper = styled.div`
	margin-top: 4rem;

	@media (max-width: 600px) {
		display: flex;
		justify-content: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

export default function Services() {
	const serviceData = [
		{ number: "01", header: "Web UI/UX Designing", buttonLink: "" },
		{ number: "02", header: "Front-End Development", buttonLink: "" },
		{ number: "03", header: "Landing Page Creator", buttonLink: "" },
	];
	return (
		<Container>
			<Wrapper>
				<Grid container justifyContent='space-between'>
					<Grid item xs={12} sm={4} md={4}>
						<HeaderWrapper>
							<Header>Services I Offer</Header>
						</HeaderWrapper>
					</Grid>
					<Grid item xs={12} sm={7} md={7}>
						{serviceData.map((item, id) => (
							<ServiceWrapper key={id}>
								<ServicesLine />
								<ServiceBox>
									<ServiceNumberBox>
										<ServiceNumber>{item.number}</ServiceNumber>
									</ServiceNumberBox>

									<ServiceTextWrapper>
										<ServiceHeader>{item.header}</ServiceHeader>
										<ButtonWrapper>
											<PrimaryButton>Explore More</PrimaryButton>
										</ButtonWrapper>
									</ServiceTextWrapper>
								</ServiceBox>
							</ServiceWrapper>
						))}
					</Grid>
				</Grid>
			</Wrapper>
		</Container>
	);
}
