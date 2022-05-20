import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Grid, Divider } from "@mui/material";

// shared components
import HeaderComponent from "../shared/Header";
import SecondaryButton from "../shared/SecondaryButton";

// style
const Container = styled.section`
	padding: 4rem 0;
`;

const Wrapper = styled.div`
	width: 90%;
	margin: auto;

	@media (max-width: 600px) {
		width: 90%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

const GridContainer = styled.div`
	padding-block: 2rem;
`;

const GridBox = styled.div`
	@media (max-width: 600px) {
		text-align: center;
	}
`;

const Header = styled.h3`
	/* size */
	font-size: 1.4rem;
	font-weight: 600;
	letter-spacing: 1px;

	/* margin */
	margin-top: 0.5rem;
`;

const ButtonWrapper = styled.div`
	padding: 2rem 0 4rem 0;

	@media (max-width: 600px) {
		display: flex;
		justify-content: center;
	}
`;

const ImageWrapper = styled.div``;

const ImageContent = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	/* shadow and border */
	border-radius: 0.5rem;
	box-shadow: 2px 4px 15px #adadad;

	${ImageWrapper}:hover & {
		transform: scale(1.02);
		transition: all 0.3s ease;
	}
`;

export default function LatestProjects() {
	const gridDate = [
		{
			header: "Future Dimensions",
			imagePath: "/newProjects/NewProject1-min.png",
			buttonLink: "",
			topMargin: { mt: { xs: 0, md: 14, md: 14 } },
		},
		{
			header: "Codebook.io",
			imagePath: "/newProjects/NewProject2-min.png",
			buttonLink: "",
			topMargin: { mt: { xs: 0, md: 6, md: 6 } },
		},
		{
			header: "STAN Team",
			imagePath: "/newProjects/NewProject3-min.png",
			buttonLink: "",
			topMargin: { mt: { xs: 0, md: 0, md: 0 } },
		},
	];
	return (
		<Container>
			<Wrapper>
				<HeaderComponent>Latest project</HeaderComponent>
				<GridContainer>
					<Grid container justifyContent='space-around' spacing={8}>
						{gridDate.map((item, id) => (
							<Grid key={id} item xs={12} sm={4} md={4} sx={item.topMargin}>
								<GridBox>
									<Divider />
									<Header>{item.header}</Header>
									<ButtonWrapper>
										<Link href={item.buttonLink} passHref>
											<SecondaryButton>Explore More</SecondaryButton>
										</Link>
									</ButtonWrapper>
									<ImageWrapper>
										<ImageContent src={item.imagePath} alt={item.header} />
									</ImageWrapper>
								</GridBox>
							</Grid>
						))}
					</Grid>
				</GridContainer>
			</Wrapper>
		</Container>
	);
}
