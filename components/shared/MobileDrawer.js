import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { SwipeableDrawer, List, ListItem, IconButton, Divider } from "@mui/material";

// Material icons
import CloseIcon from "@mui/icons-material/Close";

const MobileDrawer = ({ drawer, setDrawer }) => {
	// style
	const MobileButtonBox = styled.div`
		width: 100%;
		border-radius: 0.2rem;
	`;

	const AccordionCustomWrapper = styled.div`
		width: 100%;
	`;

	const MobileButton = styled.button`
		color: var(--redColor);
		font-size: 1rem;
		font-weight: 500;
		background: transparent;
		display: flex;
		justify-content: flex-start;
		border: none;
		letter-spacing: 0.5px;
		margin: 0.5rem 0;
		padding: 0.5rem 0;
		width: 100%;
		cursor: pointer;
	`;

	// Drawer Handler for Tablet and Mobile device
	const drawerHandlerClose = (drawer) => {
		setDrawer(!drawer);
	};

	return (
		<SwipeableDrawer anchor='right' open={drawer} onOpen={drawerHandlerClose} onClose={drawerHandlerClose}>
			<List sx={{ width: 280 }}>
				<ListItem sx={{ justifyContent: "flex-end" }}>
					<IconButton onClick={drawerHandlerClose}>
						<CloseIcon sx={{ color: "var(--TextMainColor)", fontSize: "2rem" }} />
					</IconButton>
				</ListItem>
				<Divider />
				<ListItem>
					<Link href='/' passHref>
						<MobileButtonBox>
							<MobileButton onClick={drawerHandlerClose}>Home</MobileButton>
						</MobileButtonBox>
					</Link>
				</ListItem>
				<Divider />
				<ListItem>
					<Link href='#servicesSection' passHref>
						<MobileButtonBox>
							<MobileButton onClick={drawerHandlerClose}>Services</MobileButton>
						</MobileButtonBox>
					</Link>
				</ListItem>
				<Divider />
				<ListItem>
					<Link href='#portfolioSection' passHref>
						<MobileButtonBox>
							<MobileButton onClick={drawerHandlerClose}>Portfolio</MobileButton>
						</MobileButtonBox>
					</Link>
				</ListItem>
				<Divider />
				<ListItem>
					<Link href='#testimonialsSection' passHref>
						<MobileButtonBox>
							<MobileButton onClick={drawerHandlerClose}>Testimonials</MobileButton>
						</MobileButtonBox>
					</Link>
				</ListItem>
				<Divider />
				<ListItem>
					<Link href='/contact' passHref>
						<MobileButtonBox>
							<MobileButton onClick={drawerHandlerClose}>Contact Me</MobileButton>
						</MobileButtonBox>
					</Link>
				</ListItem>
			</List>
		</SwipeableDrawer>
	);
};

export default MobileDrawer;
