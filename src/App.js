import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Jumbotron />
    </Wrapper>
  );
}

export default App;
