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
	background-color: var(--ThirdColor);
	padding: 4rem 0 8rem 0;
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
const SliderContainer = styled.div`
	display: block;
	margin: auto;
	padding: 2rem;
`;

const SliderBox = styled.div`
	border: 1px solid red;
	padding: 1rem;
	text-align: center;
`;

const SliderImage = styled.img``;

export default function Testimonial() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
		],
	};
	return (
		<Container>
			<Wrapper>
				<HeaderComponent textColor='var(--TextMainColor)'>Testimonials</HeaderComponent>
				<SliderContainer>
					<Slider {...settings}>
						<SliderBox>
							<h3>1</h3>
							<SliderImage src='' alt='Zeeshan Testimonials Image' loading='lazy' />
						</SliderBox>
						<SliderBox>
							<h3>2</h3>
							<SliderImage src='' alt='Zeeshan Testimonials Image' loading='lazy' />
						</SliderBox>
						<SliderBox>
							<h3>3</h3>
							<SliderImage src='' alt='Zeeshan Testimonials Image' loading='lazy' />
						</SliderBox>
						<SliderBox>
							<h3>4</h3>
							<SliderImage src='' alt='Zeeshan Testimonials Image' loading='lazy' />
						</SliderBox>
					</Slider>
				</SliderContainer>
			</Wrapper>
		</Container>
	);
}
