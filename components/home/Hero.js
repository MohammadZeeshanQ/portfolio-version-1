import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Typical from "react-typical";
import { style } from "@mui/system";

// Icons
import SendIcon from "@mui/icons-material/Send";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

// style
const Container = styled.section`
	position: relative;
	padding: 10rem 0;
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
`;

const Header = styled.h1`
	color: var(--TextMainColor);
	font-size: 3.5rem;
	font-weight: 700;
	letter-spacing: 1px;
`;

const HeaderColor = styled.span`
	color: var(--MainColor);
	font-weight: 800;
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
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1rem;
		width: 90%;
	}
`;

const ButtonBox = styled.div`
	/* display */
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
`;

const ButtonTheme = styled.button`
	/* display */
	display: flex;
	justify-content: center;
	align-items: center;
	/* font */
	font-size: 0.95rem;
	font-weight: 500;
	letter-spacing: 1px;
	/* border */
	border: none;
	border-radius: 0.3rem;
	cursor: pointer;
	padding: 0.7rem 1rem;

	&:hover {
		box-shadow: 3px 3px 10px var(--ButtonHover);
		transform: scale(1.01);
		transition: all 0.25s ease-in-out;
	}

	@media (max-width: 600px) {
		font-size: var(--MobileFont);
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.65rem;
		padding: 0.6rem 1rem;
	}
`;

const ContactButton = styled(ButtonTheme)`
	color: #fff;
	background-color: var(--MainColor);
	margin-right: 1.5rem;
`;

const ProjectButton = styled(ButtonTheme)`
	color: var(--MainColor);
	background-color: transparent;
	/* border and padding */
	padding: 0.65rem 1rem;
	border: 1px solid var(--MainColor);
`;

export default function Hero() {
	return (
		<Container>
			<Wrapper>
				<HeaderBox>
					<Header>
						My Name Is <HeaderColor>Zeeshan</HeaderColor>
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
						<ContactButton>
							Contact Me <SendIcon fontSize='small' sx={{ marginLeft: "1rem" }} />
						</ContactButton>
						<ProjectButton>
							Projects <DeveloperBoardIcon fontSize='small' sx={{ marginLeft: "1rem" }} />
						</ProjectButton>
					</ButtonBox>
				</HeaderBox>
			</Wrapper>
		</Container>
	);
}
