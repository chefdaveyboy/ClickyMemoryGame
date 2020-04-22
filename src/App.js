import React, { Component } from 'react';

import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import GameContainer from './components/gameContainer';
import ImageCard from './components/image/card';
import images from "./images.json";
import Footer from "./components/footer";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    images,
    instruction: "Click on an image to begin!",
    score: 0,
    topScore: 0,
    clickedImage: []
  };


  clicked = (id) => {
    
    let score = this.state.score;
    let topScore = this.state.topScore;
    let clickedImage = this.state.clickedImage;

    if (clickedImage.indexOf(id) === -1) {
      clickedImage.push(id);
      this.handleIncrement();
      this.shuffleImages();
    }
    else {
      this.setState({
        direction: "No soup for you!  Come back, ONE YEAR!",
        score: 0,
        clickedImage: []
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }

    if (clickedImage.length === 12) {
      console.log("You win!");
      this.setState({
        directions: "Congrats! You are the Master of Your Domain!",
        score: 0,
        clickedImage: []
      });

    }
  };

  handleIncrement = () => {

    this.setState({
      score: this.state.score + 1,
      direction: "Keep going!"
      });
    
  };

  shuffleImages = () => {
    this.setState({images: shuffle(images)});
  };

  render() {
    return (
      <div>
        <Header 
        direction = {this.state.direction}
        score = {this.state.score}
        topScore = {this.state.topScore}
        />
        <Jumbotron/>
        <GameContainer>
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            name={image.name}
            clicked={this.clicked}
            image={image.image}
            />
        ))}
        </GameContainer>
        
      </div>
    )
  }

}


export default App;
