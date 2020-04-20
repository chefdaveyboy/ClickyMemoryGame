import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import GameContainer from './components/gameContainer';

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />

      <GameContainer />
    </div>
  );
}

export default App;
