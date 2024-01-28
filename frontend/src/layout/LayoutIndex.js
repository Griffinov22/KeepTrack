import React from "react";
import Header from "./Header";
import { Outlet, useOutlet } from "react-router-dom";
import Footer from "./Footer";
import LandingPage from "../pages/LandingPage";

const LayoutIndex = () => {
  const hasOutlet = useOutlet();

  return (
    <>
      <Header />
      <main>{hasOutlet ? <Outlet /> : <LandingPage />}</main>
      <Footer />
    </>
  );
};

export default LayoutIndex;
