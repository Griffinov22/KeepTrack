import React from "react";
import "../css/App.css";
import MainHeader from "../components/MainHeader";
import DescriptionFlex from "../components/DescriptionFlex";
import UniversalBtnOval from "../components/buttons/LinkBtnOval";
const LandingPage = () => {
  return (
    <>
      <MainHeader
        text="Tracking your monthly
    spending is now easier"
      />
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
      <UniversalBtnOval text="Sign up" page="/signup" />
    </>
  );
};

export default LandingPage;
