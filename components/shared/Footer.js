import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

// styled components
const Container = styled.section`
	position: relative;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 84%;
	margin: auto;
	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

const LogoWrapper = styled.div`
	flex-grow: 1;
	display: flex;
`;

const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const LogoImage = styled.img`
	width: 3rem;
	height: 100%;
	object-fit: contain;
	margin-right: 0.5rem;

	@media (max-width: 600px) {
		width: 2.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2rem;
	}
`;

// button Link
const DesktopWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	margin-left: 3rem;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const ButtonBox = styled.div`
	margin: 0 0.5rem;
	padding: 0.5rem;
	border-radius: 0.3rem;
	border: 1px white solid;
	cursor: pointer;

	&:hover {
		background-color: var(--MainColor);
		transition: all 0.2s ease-in-out;
	}
`;

const DesktopButton = styled.button`
	color: var(--TextMainColor);
	font-size: var(--PcFont);
	font-weight: 500;
	letter-spacing: 0.5px;
	/* layout */
	background: transparent;
	border: transparent;
	cursor: pointer;

	${ButtonBox}:hover & {
		color: #fff;
		transition: all 0.2s ease-in-out;
	}
`;

// social media button
const SocialMediaWrapper = styled.div`
	@media (max-width: 1024px) {
		display: none;
	}
`;

const Icon = styled.img`
	width: 2.5rem;
	margin-right: 0.5rem;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
		transition: all 0.35s ease-in-out;
	}
	@media (max-width: 600px) {
		width: 2.5rem;
		margin: 1rem 1rem 0 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 1.2rem;
	}
	@media (min-width: 1900px) {
		width: 3.5rem;
		margin: 0 1.5rem 0 0;
	}
`;

// copyright section
const RightContainer = styled.div`
	padding: 4rem 0 0 0;
	text-align: center;
	@media (min-width: 601px) and (max-width: 1024px) {
		padding-top: 2rem;
	}
`;

const RightText = styled.p`
	font-size: 0.9rem;
	color: var(--lightDescriptionColor);
	letter-spacing: 1px;
	line-height: 1.5;
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.6rem;
	}
	@media (min-width: 1900px) {
		font-size: 1.5rem;
	}
`;

export default function Footer() {
	const [year, setYear] = useState("");

	// Retrieve Year function
	const YearHandler = () => {
		const yearValue = new Date().getFullYear();
		setYear(yearValue);
	};

	useEffect(() => {
		YearHandler();
	}, []);

	return (
		<Container>
			<Wrapper>
				<LogoWrapper>
					<ImageWrapper>
						<LogoImage src='/ZNLogo.png' alt='Zeeshan Logo' />
					</ImageWrapper>
				</LogoWrapper>

				<DesktopWrapper>
					<Link href='/' passHref>
						<ButtonBox>
							<DesktopButton>Home</DesktopButton>
						</ButtonBox>
					</Link>
					<Link href='#servicesSection' passHref>
						<ButtonBox>
							<DesktopButton>Services</DesktopButton>
						</ButtonBox>
					</Link>
					<Link href='#portfolioSection' passHref>
						<ButtonBox>
							<DesktopButton>Portfolio</DesktopButton>
						</ButtonBox>
					</Link>
					<Link href='#testimonialsSection' passHref>
						<ButtonBox>
							<DesktopButton>Testimonials</DesktopButton>
						</ButtonBox>
					</Link>
				</DesktopWrapper>

				<SocialMediaWrapper>
					<Link href='/' passHref>
						<Icon src='' alt='Zeeshan Social Media' />
					</Link>
					<Link href='/' passHref>
						<Icon src='' alt='Zeeshan Social Media' />
					</Link>
					<Link href='/' passHref>
						<Icon src='' alt='Zeeshan Social Media' />
					</Link>
					<Link href='/' passHref>
						<Icon src='' alt='Zeeshan Social Media' />
					</Link>
				</SocialMediaWrapper>
			</Wrapper>
			<RightContainer>
				<RightText>All Copyrights&copy; and Rights Reserved by Zeeshan {year}.</RightText>
			</RightContainer>
		</Container>
	);
}
