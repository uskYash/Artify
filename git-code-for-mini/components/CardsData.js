
import React from "react";
import "../styles/CardStyles.css"; // Import your card styles here

function CardsData(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="Card" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button onClick={props.onButtonClick}>Click Me</button>
    </div>
  );
}

export default CardsData;
