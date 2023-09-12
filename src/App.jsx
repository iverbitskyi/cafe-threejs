import Contact from "./components/Contact";
import Coffee from "./components/Coffee";
import Hero from "./components/Hero";
import Who from "./components/Who";

import { styled } from "styled-components";

const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	color: white;
	background: url("./img/bg.jpeg");
	&::-webkit-scrollbar {
		display: none;
	}
`;

function App() {
	return (
		<Container>
			<Hero />
			<Who />
			<Coffee />
			<Contact />
		</Container>
	);
}

export default App;
