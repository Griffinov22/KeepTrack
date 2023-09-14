import React from "react";
import "../css/App.css";

const MainHeader = ({ text }) => {
  return (
    <div className="hero-message">
      <h2>{text}</h2>
    </div>
  );
};

export default MainHeader;
