import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// react-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// shared components
import HeaderComponent from "../shared/Header";

// style
const Container = styled.section`
	position: relative;
	background-color: var(--ThirdColor);
	padding: 4rem 0 8rem 0;
	z-index: 0;
	overflow: hidden;
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

const LargeText = styled.p`
	/* font */
	font-size: 25rem;
	font-weight: 900;
	/* position */
	position: absolute;
	bottom: -35%;
	right: -20%;
	z-index: -1;
	transform: rotate(-30deg);
	opacity: 0.2;

	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const SliderContainer = styled.div`
	display: block;
	margin: auto;
	padding: 2rem;

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
	aspect-ratio: 1;
	margin: auto;
`;

export default function Testimonial() {
	var settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
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
	const testimonialsData = [
		{ name: "Zeeshan Testimonials Image 1", imagePath: "/Testimonials/Testimonial1-min.png" },
		{ name: "Zeeshan Testimonials Image 2", imagePath: "/Testimonials/Testimonial2-min.png" },
		{ name: "Zeeshan Testimonials Image 3", imagePath: "/Testimonials/Testimonial3-min.png" },
		{ name: "Zeeshan Testimonials Image 4", imagePath: "/Testimonials/Testimonial4-min.png" },
		{ name: "Zeeshan Testimonials Image 5", imagePath: "/Testimonials/Testimonial5-min.png" },
	];
	return (
		<Container>
			<LargeText>TRUST</LargeText>
			<Wrapper>
				<HeaderComponent textColor='var(--TextMainColor)'>Testimonials</HeaderComponent>
				<SliderContainer>
					<Slider {...settings}>
						{testimonialsData.map((item, id) => (
							<SliderBox key={id}>
								<SliderImage src={item.imagePath} alt={item.name} loading='lazy' />
							</SliderBox>
						))}
					</Slider>
				</SliderContainer>
			</Wrapper>
		</Container>
	);
}
