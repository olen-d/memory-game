import React from "react";
import ScoreboardBody from "../scoreboardcard/";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    topScore: 0
  };

  handleIncrementScore = () => {

    this.setState({ score: this.state.score + 1 });
  };

  handleIncrementTopScore = () => {
    this.setState({topScore: this.state.topScore + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
         <ScoreboardBody
          score={this.state.score}
          topsScore={this.state.topScore}
          handleIncrementScore={this.handleIncrementScore}
          handleIncrementTopScore={this.handleIncrementTopScore}
        />
    );
  }
}

export default Score;
