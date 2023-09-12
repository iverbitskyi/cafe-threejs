import React, { useState } from "react";
import styled from "styled-components";

import Cappuccino from "./Cappuccino";
import FlatWhite from "./FlatWhite";
import Americano from "./Americano";
import Espresso from "./Espresso";
import Latte from "./Latte";

const data = ["Latte", "Cappuccino", "Americano", "Espresso", "Flat White"];

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
	position: relative;
	color: black;
	font-size: 14px;
	font-weight: 300;
`;

const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 768px) {
		padding: 20px;
		justify-content: center;
	}
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ListItem = styled.li`
	font-size: 90px;
	font-weight: bold;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px white;
	position: relative;

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		color: white;
		-webkit-text-stroke: 0px;
	}

	&::after {
		content: "${(props) => props.text}";
		position: absolute;
		top: 0;
		left: 0;
		color: pink;
		width: 0px;
		overflow: hidden;
		white-space: nowrap;
	}

	&:hover {
		&::after {
			animation: moveText 0.5s linear both;

			@keyframes moveText {
				to {
					width: 100%;
				}
			}
		}
	}
`;

const Right = styled.div`
	flex: 1;
`;

const Coffee = () => {
	const [coffee, setCoffee] = useState("Latte");
	return (
		<Section>
			<Container>
				<Left>
					<List>
						{data.map((item) => (
							<ListItem key={item} text={item} onClick={() => setCoffee(item)}>
								{item}
							</ListItem>
						))}
					</List>
				</Left>
				<Right>
					{coffee === "Latte" ? (
						<Latte />
					) : coffee === "Cappuccino" ? (
						<Cappuccino />
					) : coffee === "Americano" ? (
						<Americano />
					) : coffee === "Espresso" ? (
						<Espresso />
					) : (
						<FlatWhite />
					)}
				</Right>
			</Container>
		</Section>
	);
};

export default Coffee;