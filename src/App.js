import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Game from './components/Game';

function App() {
	return (
		<Wrapper>
			<Navbar />
			<Jumbotron />
			<Game />
		</Wrapper>
	);
}

export default App;
