import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// shared components
import HeaderComponent from "../shared/Header";
import PrimaryButton from "../shared/PrimaryButton";

// style
const Container = styled.section`
	position: relative;
	background-color: var(--ThirdColor);
	padding: 4rem 0;
	z-index: 0;
	overflow: hidden;
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

const LargeText = styled.p`
	/* font */
	font-size: 20rem;
	font-weight: 900;
	/* position */
	position: absolute;
	bottom: -5%;
	left: -20%;
	z-index: -1;
	transform: rotate(30deg);
	opacity: 0.1;

	@media (max-width: 600px) {
		font-size: 10rem;
		bottom: 30%;
		left: -30%;
		opacity: 0.05;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const SliderContainer = styled.div`
	display: block;
	margin: auto;
	padding: 2rem 1rem;

	@media (max-width: 600px) {
		padding: 1rem;
	}
`;

const SliderBox = styled.div`
	padding: 1rem;

	@media (max-width: 600px) {
		padding: 0.5rem;
	}
`;

const SliderImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	margin: auto;
	cursor: pointer;
	border-radius: 0.5rem;
`;

const ButtonWrapper = styled.div`
	/* display */
	display: flex;
	justify-content: center;
	/* padding */
	padding-block: 2rem;

	@media (max-width: 600px) {
		padding: 4rem 0 0 0;
	}
`;

export default function Projects() {
	var settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
		autoplay: true,
		centerMode: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					dots: true,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					dots: true,
					arrows: false,
				},
			},
		],
	};
	const projectsData = [
		{ name: "Zeeshan Projects Image 1", imagePath: "/Projects/Project1-min.png" },
		{ name: "Zeeshan Projects Image 2", imagePath: "/Projects/Project2-min.png" },
		{ name: "Zeeshan Projects Image 3", imagePath: "/Projects/Project3-min.png" },
		{ name: "Zeeshan Projects Image 4", imagePath: "/Projects/Project4-min.png" },
		{ name: "Zeeshan Projects Image 5", imagePath: "/Projects/Project5-min.png" },
	];
	return (
		<Container>
			<LargeText>PROJECTS</LargeText>
			<Wrapper>
				<HeaderComponent textColor='var(--TextMainColor)'>Projects</HeaderComponent>
				<SliderContainer>
					<Slider {...settings}>
						{projectsData.map((item, id) => (
							<SliderBox key={id}>
								<SliderImage src={item.imagePath} alt={item.name} loading='lazy' />
							</SliderBox>
						))}
					</Slider>
				</SliderContainer>
				<ButtonWrapper>
					<PrimaryButton>Explore More</PrimaryButton>
				</ButtonWrapper>
			</Wrapper>
		</Container>
	);
}
