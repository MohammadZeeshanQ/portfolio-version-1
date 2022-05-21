import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Snackbar, Alert, AlertTitle, TextField } from "@mui/material";

// shared components
import HeaderHighlight from "../components/shared/HeaderHighlight";
import PrimaryButton from "../components/shared/PrimaryButton";

// emailjs
import emailjs from "@emailjs/browser";

// icon
import SendIcon from "@mui/icons-material/Send";

// styles
const Container = styled.section`
	position: relative;
	padding: 10rem 0 5rem 0;
	z-index: 0;

	@media (max-width: 600px) {
		padding: 6rem 0 0 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 10rem 0;
	}
`;

const Wrapper = styled.div`
	width: 80%;
	margin: auto;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 85%;
	}
`;

const MessageBox = styled.div`
	padding: 1rem;

	@media (max-width: 600px) {
		text-align: center;
	}
`;

const Header = styled.h2`
	font-size: 3rem;
	font-weight: 800;
	color: var(--TextMainColor);
	text-transform: capitalize;
	letter-spacing: 1px;
	line-height: 1.2;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.8rem;
	}
`;

const Description = styled.p`
	font-size: var(--pcTextSize);
	color: var(--SecondColor);
	letter-spacing: 0.5px;
	margin-top: 2rem;
	line-height: 1.5;

	@media (max-width: 600px) {
		font-size: var(--mobileTextSize);
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: var(--tabTextSize);
	}
`;

const InputBox = styled.div`
	padding: 1rem;

	@media (max-width: 600px) {
		margin-top: 2rem;
	}
`;

const InputDiv = styled.div`
	margin-bottom: 2rem;
`;

const Input = styled.input`
	width: 100%;
	background-color: transparent;
	color: var(--MainColor);
	font-size: var(--pcTextSize);
	letter-spacing: 0.6px;
	padding: 0.75rem 1rem;
	border: 1px solid var(--TextMainColor);
	border-radius: 0.3rem;

	&:focus {
		outline: 0.2px solid var(--MainColor);
	}
	&::placeholder {
		color: var(--TextMainColor);
		font-size: var(--PcFont);
		opacity: 0.6;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.5rem;
		padding: 0.75rem 1rem;

		&::placeholder {
			font-size: 0.8rem;
		}
	}
`;

const SubmitButtonBox = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 1.5rem;
	}
`;

export default function Contact() {
	const [successOpen, setSuccessOpen] = useState(false);
	const [errorOpen, setErrorOpen] = useState(false);
	const emailService = process.env.EMAIL_SERVICE;
	const emailTemplate = process.env.EMAIL_TEMPLATE;
	const emailEmailKey = process.env.EMAIL_KEY;

	// send form handler
	const sendEmail = (e) => {
		e.preventDefault(e);

		emailjs.sendForm(emailService, emailTemplate, e.target, emailEmailKey).then(
			(result) => {
				setSuccessOpen(true);
				console.log(result.text);
			},
			(error) => {
				setErrorOpen(true);
				console.log(error.text);
			}
		);
		e.target.reset();
	};

	// toast alert handler
	const handleClose = (reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSuccessOpen(false);
		setErrorOpen(false);
	};

	return (
		<Container>
			<Wrapper>
				<Grid container justifyContent='space-between'>
					<Grid item xs={12} sm={6} md={6}>
						<MessageBox>
							<Header>
								<HeaderHighlight> Hi there,</HeaderHighlight>
								<br />
								Let&apos;s make something Great!
							</Header>
							<Description>
								I would gladly contribute to any of your projects, if you&apos;re looking for someone.
								I&apos;m here to help and answer any question you might have. I&apos;m looking forward
								to hear from you.
							</Description>
						</MessageBox>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<form onSubmit={sendEmail}>
							<InputBox>
								<InputDiv>
									<TextField
										type='text'
										id='personName'
										name='name'
										placeholder='Your Name'
										required
										fullWidth={true}
									/>
								</InputDiv>
								<InputDiv>
									<TextField
										type='email'
										id='personEmail'
										name='email'
										placeholder='Your Email'
										required
										fullWidth={true}
									/>
								</InputDiv>
								<InputDiv>
									<TextField
										type='text'
										id='Subject'
										name='subject'
										placeholder='Subject'
										required
										fullWidth={true}
									/>
								</InputDiv>
								<InputDiv>
									<TextField
										type='text'
										id='personMessage'
										name='message'
										placeholder='Your Message'
										required
										fullWidth={true}
										multiline={true}
										rows={4}
									/>
								</InputDiv>
								<SubmitButtonBox>
									<PrimaryButton type='submit'>
										Submit
										<SendIcon fontSize='small' sx={{ marginLeft: "1rem" }} />
									</PrimaryButton>
								</SubmitButtonBox>
							</InputBox>
						</form>
					</Grid>
				</Grid>
			</Wrapper>

			<Snackbar open={successOpen} autoHideDuration={8000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' variant='filled'>
					<AlertTitle>Success!</AlertTitle>
					Message has been sent.
				</Alert>
			</Snackbar>

			<Snackbar open={errorOpen} autoHideDuration={8000} onClose={handleClose}>
				<Alert severity='error' onClose={handleClose} variant='filled'>
					<AlertTitle>Failed!</AlertTitle>
					Please try again.
				</Alert>
			</Snackbar>
		</Container>
	);
}
