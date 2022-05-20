import React from "react";
import styled from "styled-components";

// style
const Button = styled.button`
	/* color */
	background-color: var(--MainColor);
	color: #fff;
	/* font */
	font-size: var(--PcFont);
	font-weight: 500;
	/* display */
	display: flex;
	align-items: center;
	position: relative;
	/* border */
	border: none;
	border-radius: 0.3rem;
	letter-spacing: 1px;
	cursor: pointer;
	/* margin and padding */
	padding: 0.7rem 2rem;

	&:hover {
		transform: translateY(-0.2rem) scale(1.01);
		transition: all 0.3s ease;
	}
	&::after {
		content: "";
		position: absolute;
		border-radius: 0.3rem;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		box-shadow: 2px 4px 10px #adadad;
		transition: all 0.3s ease;
	}
	&:hover::after {
		opacity: 1;
	}
	@media (max-width: 600px) {
		font-size: var(--MobileFont);
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--TabletFontSmall);
		padding: 0.5rem 1rem;
	}
`;

export default function PrimaryButton({ children }) {
	return <Button>{children}</Button>;
}
