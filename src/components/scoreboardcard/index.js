import React from "react";

function Scoreboard(props) {
  return (
    <>
        <div className="col-2">
            Current Score: {props.score}
        </div>
        <div className="col-2">
            Top Score: {props.topScore}
        </div>
    </>
  );
}

export default Scoreboard;
