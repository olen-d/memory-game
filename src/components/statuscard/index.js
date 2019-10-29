import React from "react";

function GameStatus(props) {
  return (
    <div className="col-4">
        {props.status}
    </div>
  );
}

export default GameStatus;
