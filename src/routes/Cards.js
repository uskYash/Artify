// Cards.js

import React from "react";
import Navbar from "../components/Navbar"
import CardsData from "../components/CardsData"; // Import your CardsData component here
import c1 from "../assets/a2.jpg";
import c2 from "../assets/a1.jpg";
import c3 from "../assets/simg1.jpeg";
import c4 from "../assets/simg2.jpeg";
import "../styles/CardStyles.css"; // Import your card styles here



function Cards() {
  // Function to handle button click
  const handleButtonClick = () => {
    // Handle the button click event here
    alert("Button Clicked!");
  };

  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="cards">
      <h1>Our Cards</h1>
      <p>You can explore our unique collection of cards.</p>
      <div className="card-container">
        {/* Card 1 */}
        <CardsData
          image={c1}
          heading="Birthday Cards"
          text="Celebrate special birthdays with our beautiful cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
        />

        {/* Card 2 */}
        <CardsData
          image={c2}
          heading="Anniversary Cards"
          text="Mark milestones with our lovely anniversary cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
        />

        {/* Card 3 */}
        <CardsData
          image={c3}
          heading="Thank You Cards"
          text="Express gratitude with our heartfelt thank you cards."
          onButtonClick={handleButtonClick} // Pass the function to handle button click
          />
          
        {/* Card 4*/}
        <CardsData
        image={c4}
        heading="Thank You Cards"
        text="Express gratitude with our heartfelt thank you cards."
        onButtonClick={handleButtonClick} // Pass the function to handle button click

        />

        {/* Add more CardsData components as needed */}
      </div>
    </div>
    </>
  );
}

export default Cards;
