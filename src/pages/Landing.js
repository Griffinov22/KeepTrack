import React from "react";
import "../css/App.css";
import DescriptionFlex from "./DescriptionFlex";
import UniversalBtn from "./buttons/UniversalBtn";

const LandingPage = () => {
  return (
    <>
      <div className="hero-message">
        <h2>Tracking your monthly spending is now easier</h2>
      </div>
      <DescriptionFlex
        ImgUrl="/Images/shopping-cart.svg"
        ImgAlt="shopping cart Icon"
        textDesc="See your spending for the month to keep yourself accountable"
        ImgLeftOrRight="left"
      />
      <DescriptionFlex
        ImgUrl="/Images/pencil-and-paper.svg"
        ImgAlt="pencil and paper icon"
        textDesc="No more Excel sheets to track your daily spending"
        ImgLeftOrRight="right"
      />
      <DescriptionFlex
        ImgUrl="/Images/personal-account.svg"
        ImgAlt="person icon"
        textDesc="You get to set your spending boundaries"
        ImgLeftOrRight="left"
      />
      <UniversalBtn text="Login" />
    </>
  );
};

export default LandingPage;
