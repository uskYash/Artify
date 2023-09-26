// Sidebar.js

import React from "react";
import SidebarButton from "../components/SidebarButton"; // Import SidebarButton component
import "../styles/SidebarStyles.css"; // Import Sidebar styles
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";



function Sidebar() {
  const buttonData = [
    { label: "Button 1", to: "/" },
    { label: "Button 2", to: "/" },
    { label: "Button 3", to: "/about" },
    { label: "Button 4",to: "/about" },
    { label: "Button 5", to: "/about" },
    { label: "Button 6", to: "/about" },
    { label: "Button 7", to: "/about"},
    { label: "Button 8",to: "/about" },
    { label: "Button 9", to: "/about" },
    { label: "Button 10", to: "/about" },
    { label: "Button 11", to: "/about" },
  ];

  // const handleButtonClick = (buttonNumber) => {
  //   // Handle button click based on the buttonNumber
  //   alert(`Button ${buttonNumber} clicked.`);
  // };

  return (
    <>
    <Navbar/>
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="sidebar-buttons">
        {buttonData.map((button, index) => (
          <Link key={index} to={button.to}>
            <SidebarButton label={button.label} />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default Sidebar;
