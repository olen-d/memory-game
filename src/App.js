import React, { Component } from 'react';
import CharacterCard from  "./components/charactercard";
import ScoreBoardCard from "./components/scoreboardcard";
import GameStatusCard from "./components/statuscard"

import characters from "./models/characters.json";


import './App.css';

class App extends Component {
  state = {
    characters,
    status: "Click to Begin!",
    score: 0,
    topScore: 0
  };

  shuffleArray = array => {
    // Fisher-Yates algorithm
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  handleClick = id => {
    // Check to see if the picture has been clicked already
    const c = this.state.characters.filter(character => character.id === id);

    if (c[0].clicked) {

      // Update the status
      this.setState({ status: "Sorry, you already clicked this character!"});

      // Quit game
      // Check to see if the current score exceeds the high score and update the high score if it does
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score });
      }

      // Reset the score
      this.setState({ score: 0 })

      // Reset all clicked to false

      const resetCharacters = this.state.characters.map(character => character.clicked = false);
      this.setState({ charachters : resetCharacters })

    } else {
      // Otherwise update state to set clicked to true for the character
      const characters = this.state.characters.map(character => character.id === id ? {...character, ...{clicked: true}} : character);
      const shuffledCharacters = this.shuffleArray(characters);
      this.setState({ characters : shuffledCharacters });

      // Add 1 to the score
      this.setState({ score: this.state.score + 1 });

      // Update the status
      this.setState({ status: "Congratulations, Your Guess Was Correct!"});

    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <header className="App-info">
            <div className="row my-auto">
              <div className="col-4">
                <h1>
                  Memory Game
                </h1>
              </div>
              <GameStatusCard
                status={this.state.status}
              />
              <ScoreBoardCard
                score={this.state.score}
                topScore={this.state.topScore}
              />
            </div>
          </header>
          <div className="jumbotron-fluid clear-info mfix text-light bg-red">
            <h1 className="game-title">
              Remember That Simpsons Character!
            </h1>
            <h2 className="game-description">
              Click on an image to earn points, but don't click it more than once.
            </h2>
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center bg-yellow">
          <div className="App-image-container d-flex justify-content-center flex-wrap">
            {this.state.characters.map(character => (
              <div className="App-character-card" key={character.name}>
                <CharacterCard
                  handleClick={this.handleClick}
                  id={character.id}
                  picture={character.picture}
                  width={character.width}
                  clicked={character.clicked}
                  name={character.name}
                />
              </div>
            ))}
          </div>
        </div>
        <footer className="App-footer text-light">
          <p className="my-auto">
            Copyright 2019 <a href="https://www.olen.dev/">Olen Daelhousen</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
