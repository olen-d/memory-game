import React from "react";
// import "./styles.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <span onClick={() => props.handleClick(props.id)} className="click">
            <img alt={props.name} src={props.picture} width={props.width} height={props.height} />
        </span>
      </div>
    </div>
  );
}

export default CharacterCard;
