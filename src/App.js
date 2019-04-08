import React, { Component } from 'react';
import CharacterCard from  "./components/charactercard";

import characters from "./models/characters.json";


import './App.css';

class App extends Component {
  state = {
    characters
  };

  handleClick = id => {
    // Check to see if the picture has been clicked already
    const c = this.state.characters.filter(character => character.id === id);
    console.log("******\n",c);
    // If the picture has been clicked, "Sorry, you already clicked this character!" and quit game
    if (c[0].clicked) {
      // Update guess status
      console.log("++++++++\n",c[0].clicked);
      // Quit game
    } else {
      // Otherwise update state to set clicked to true for the character
      const characters = this.state.characters.map(character => character.id === id ? {...character, ...{clicked: true}} : character)
      this.setState({characters : characters});

      // Add 1 to the score
    }
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <header className="App-info">
            <div className="row">
              <div className="col-4">
                Memory Game
              </div>
              <div className="col-4">
                Status (Click to begin! | You guessed correctly! | You are wrong!)
              </div>
              <div className="col-2">
                Current Score
              </div>
              <div className="col-2">
                Top Score
              </div>
            </div>
          </header>
          <div className="jumbotron-fluid clear-info mfix text-light bg-red">
            <h1>
              Memory Game!
            </h1>
            <h2>
              Click on an image to earn points, but don't click on one more than once.
            </h2>
          </div>
        </div>
        <div className="container-fluid bg-yellow">
          <div className="App-image-container mx-auto d-flex flex-row flex-wrap align-items-center">
            {this.state.characters.map(character => (
              <div className="App-character-card">
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
      </div>
    );
  }
}

export default App;
