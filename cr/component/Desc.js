import React from "react";
import "../styles/Desc.css"

const Desc = (props) => {
  return (
    <div className="des">
      <h1>{props.title}</h1>
      {props.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <button>{props.buttonText}</button>
    </div>
  );
};

export default Desc;