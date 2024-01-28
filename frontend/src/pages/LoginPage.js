import React, { useContext, useEffect, useState } from "react";
import "../css/App.css";
import MainHeader from "../components/MainHeader";
import LoginInputs from "../components/inputs/LoginInputs";
import SubmitBtnOval from "../components/buttons/SubmitBtnOval";
import DescriptionFlex from "../components/DescriptionFlex";
import { UserContext } from "../contexts/UserProvider";

const LoginPage = () => {
  const { setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    setLoggedIn(false);
  });

  return (
    <div>
      <MainHeader text="Sign in to Your KeepTrack" />
      <LoginInputs />
      <DescriptionFlex ImgUrl="Images/shopping-cart.svg" ImgLeftOrRight="left" textDesc="Don't stress when you shop. Enjoy it instead." />
    </div>
  );
};

export default LoginPage;
