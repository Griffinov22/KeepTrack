import React, { useEffect } from "react";
import "../css/App.css";
import MainHeader from "../components/MainHeader";
import SignupInputs from "../components/inputs/SignupInputs";
import DescriptionFlex from "../components/DescriptionFlex";
import SubmitBtnOval from "../components/buttons/SubmitBtnOval";

const LoginPage = () => {
  useEffect(() => {
    setTimeout(() => {
      //this full transition takes 400ms
      document.querySelector(".login-wrapper").style.opacity = 1;
    }, 200);
  }, []);

  return (
    <div className="login-wrapper">
      <MainHeader text="A couple questions to setup your profile" />
      <SignupInputs />
      <DescriptionFlex
        ImgUrl="Images/shopping-cart.svg"
        ImgLeftOrRight="left"
        textDesc="Don't stress when you shop. Enjoy it instead."
      />
    </div>
  );
};

export default LoginPage;
