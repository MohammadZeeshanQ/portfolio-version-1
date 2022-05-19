import React from "react";
import styled from "styled-components";

export default function Header({ children, textColor }) {
	// style
	const HeaderWrapper = styled.div`
		text-align: center;
		padding: 1rem 0 2rem 0;
	`;

	const Header = styled.h2`
		color: ${textColor};
		/* font */
		font-size: 2.5rem;
		letter-spacing: 1px;

		@media (max-width: 600px) {
			font-size: 2rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 1.8rem;
		}
	`;

	return (
		<HeaderWrapper>
			<Header>{children}</Header>
		</HeaderWrapper>
	);
}
