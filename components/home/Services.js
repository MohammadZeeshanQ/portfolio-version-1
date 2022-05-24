import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// shared components
import HeaderComponent from "../shared/Header";
import PrimaryButton from "../shared/PrimaryButton";

// Icons
import CallMadeIcon from "@mui/icons-material/CallMade";

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

const ImageWrapper = styled.div``;

const ImageBanner = styled.img`
	/* size */
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

const GridContainer = styled.div`
	padding-top: 4rem;
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
	/* display */
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
	width: 100%;
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

const ServiceNumberBox = styled.div``;

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
	font-size: 2.2rem;
	font-weight: 700;
	letter-spacing: 1px;
	line-height: 1.5;
	/* sizing  */

	text-transform: capitalize;

	@media (max-width: 600px) {
		font-size: 2rem;
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
		<Container id='servicesSection'>
			<Wrapper>
				<HeaderComponent>Services I Offer</HeaderComponent>

				<GridContainer>
					<Grid container justifyContent='space-between' alignItems='center'>
						<Grid item xs={12} sm={6} md={6}>
							<ImageWrapper>
								<ImageBanner src='/Banners/LaptopBanner.png' alt='Zeeshan Laptop Banner' />
							</ImageWrapper>
						</Grid>
						<Grid item xs={12} sm={5} md={5}>
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
												<PrimaryButton>
													Explore More
													<CallMadeIcon fontSize='small' sx={{ marginLeft: "1rem" }} />
												</PrimaryButton>
											</ButtonWrapper>
										</ServiceTextWrapper>
									</ServiceBox>
								</ServiceWrapper>
							))}
						</Grid>
					</Grid>
				</GridContainer>
			</Wrapper>
		</Container>
	);
}
