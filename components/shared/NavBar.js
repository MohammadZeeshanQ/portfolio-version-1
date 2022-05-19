import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { AppBar, Toolbar } from "@mui/material";

// shared components
import MobileDrawer from "./MobileDrawer.js";

// icons
import MenuIcon from "@mui/icons-material/Menu";

// styled components
const MainContainer = styled.section`
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
	align-items: stretch;
`;

const ImageWrapper = styled.div`
	display: flex;
	align-items: stretch;
`;

const Logo = styled.a``;

const LogoImage = styled.img`
	width: 3rem;
	height: 100%;
	object-fit: cover;

	@media (max-width: 600px) {
		width: 2.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2rem;
	}
`;

const DesktopWrapper = styled.div`
	display: flex;
	flex-grow: 1;

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

const CtaWrapper = styled.div`
	@media (max-width: 1024px) {
		display: none;
	}
`;

const CTAButtonTheme = styled.button`
	color: #fff;
	background-color: var(--MainColor);
	font-size: 0.95rem;
	font-weight: 500;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	letter-spacing: 1px;
	padding: 0.8rem 1.5rem;

	@media (max-width: 600px) {
		font-size: var(--MobileFont);
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.65rem;
		padding: 0.6rem 1rem;
	}
`;

// Mobile Style
const MobileWrapper = styled.div`
	display: none;
	@media (max-width: 1024px) {
		display: block;
	}
`;

export default function NavBar() {
	const [drawer, setDrawer] = useState(false);

	return (
		<MainContainer>
			<AppBar
				position='fixed'
				elevation={4}
				color='primary'
				sx={{
					background: "#fff",
				}}
			>
				<Toolbar>
					<Wrapper>
						<LogoWrapper>
							<Link href='/' passHref>
								<ImageWrapper>
									<LogoImage src='/ZNLogo.png' alt='Zeeshan Logo' />
								</ImageWrapper>
							</Link>
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

						<CtaWrapper>
							<Link href='/contact' passHref>
								<CTAButtonTheme>Contact Me</CTAButtonTheme>
							</Link>
						</CtaWrapper>

						<MobileWrapper onClick={() => setDrawer(true)} style={{ cursor: "pointer" }}>
							<MenuIcon sx={{ fontSize: "2rem", color: "var(--TextMainColor)" }} />
						</MobileWrapper>
					</Wrapper>
					{/* Swipeable Drawer for Mobile and Tablet View */}
					<MobileDrawer drawer={drawer} setDrawer={setDrawer} />
				</Toolbar>
			</AppBar>
		</MainContainer>
	);
}
