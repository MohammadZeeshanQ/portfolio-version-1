import React from "react";
import styled from "styled-components";

// style
const HeaderColor = styled.span`
	color: var(--MainColor);
	font-weight: 800;
`;

export default function HeaderHighlight({ children }) {
	return <HeaderColor>{children}</HeaderColor>;
}
