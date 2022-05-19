import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Typical from "react-typical";

// shared components
import HeaderHighlight from "../shared/HeaderHighlight";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

// Icons
import SendIcon from "@mui/icons-material/Send";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

// style
const Container = styled.section`
	position: relative;
	padding: 10rem 0;
	z-index: 0;
	overflow: hidden;
`;

const opacity = keyframes`
  from {
	opacity: 0;
  }

  to {
	opacity: .8;
  }
`;

const StarImage = styled.img`
	/* position */
	position: absolute;
	top: -25%;
	right: 5%;
	/* size */
	width: 3rem;
	height: 100%;
	object-fit: contain;
	z-index: -1;
	/* animation */
	animation: ${opacity} 4s alternate infinite;
	transform: rotate(120deg);

	@media (max-width: 600px) {
		width: 4rem;
		top: -34%;
		right: -5%;
	}
`;

const CodeImage = styled.img`
	/* position */
	position: absolute;
	bottom: -30%;
	left: 5%;
	/* size */
	width: 3rem;
	height: 100%;
	object-fit: contain;
	z-index: -1;
	/*  */
	animation: ${opacity} 4s alternate infinite;
	animation-delay: 1s;
	transform: rotate(45deg);

	@media (max-width: 600px) {
		width: 4rem;
		bottom: -30%;
		left: -10%;
	}
`;

const Wrapper = styled.div`
	width: 83%;
	margin: auto;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

const HeaderBox = styled.div`
	text-align: center;
	padding-block: 2rem;
`;

const Header = styled.h1`
	color: var(--TextMainColor);
	font-size: 3.5rem;
	font-weight: 700;
	letter-spacing: 1px;

	@media (max-width: 600px) {
		font-size: 3rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2.5rem;
	}
`;

const Description = styled.p`
	color: var(--SecondColor);
	font-size: 1.2rem;
	font-weight: 400;
	/* margin */
	margin-top: 1rem;
	letter-spacing: 1px;

	@media (max-width: 600px) {
		line-height: 190%;
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.9rem;
		width: 90%;
	}
`;

const ButtonBox = styled.div`
	/* display */
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	/* margin */
	margin-top: 4rem;
`;

export default function Hero() {
	return (
		<Container>
			{/* background Image */}
			<StarImage src='/Icons/stars.png' alt='star Image' />
			<CodeImage src='/Icons/coding.png' alt='code Image' />
			<Wrapper>
				<HeaderBox>
					<Header>
						My Name Is <HeaderHighlight>Zeeshan</HeaderHighlight>
					</Header>
					<Description>
						<Typical
							steps={[
								"I'm a",
								1000,
								`I'm a Front-End Developer.`,
								1500,
								"I'm a Web UI/UX Designer.",
								1500,
								"I'm a Landing Page Creator.",
								1500,
							]}
							loop={Infinity}
							wrapper='b'
						/>
					</Description>
					{/* CTA Buttons */}
					<ButtonBox>
						<PrimaryButton>
							Contact Me <SendIcon fontSize='small' sx={{ marginLeft: "1rem" }} />
						</PrimaryButton>
						<SecondaryButton>
							Projects <DeveloperBoardIcon fontSize='small' sx={{ marginLeft: "1rem" }} />
						</SecondaryButton>
					</ButtonBox>
				</HeaderBox>
			</Wrapper>
		</Container>
	);
}
