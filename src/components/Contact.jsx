import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
import Map from "./Map";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

const Input = styled.input`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;

const TextArea = styled.textarea`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;

const Button = styled.button`
	padding: 20px;
	background-color: #da4ea2;
	color: white;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
`;

const Contact = () => {
	const ref = useRef();
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_36kq1fm", "template_ct8egyu", ref.current, "S-a-ayRaTlo30opRj")
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			);
	};

	return (
		<Section>
			<Container>
				<Left>
					<Form ref={ref} onSubmit={handleSubmit}>
						<Title>Contact Us</Title>
						<Input placeholder="Name" name="name" />
						<Input placeholder="Email" name="email" />
						<TextArea placeholder="Write your message" name="message" rows={10} />
						<Button type="submit">Send</Button>
						{success && "Your message has been send. We'll get back to you soon :)"}
					</Form>
				</Left>
				<Right>
					<Map />
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;
