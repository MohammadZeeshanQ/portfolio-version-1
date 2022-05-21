import React from "react";
import styled, { keyframes } from "styled-components";

// style
const colorChange = keyframes` 
 from {
    color: var(--MainColor);
  }

  to {
    color: var(--ThirdColor);
  }
  `;

const HeaderColor = styled.span`
	color: var(--MainColor);
	font-weight: 900;
	animation: ${colorChange} 6s alternate infinite;
	animation-delay: 1s;
`;

export default function HeaderHighlight({ children }) {
	return <HeaderColor>{children}</HeaderColor>;
}
