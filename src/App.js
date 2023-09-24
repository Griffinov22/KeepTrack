import "./css/App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";

function App() {
  //has 3 states -1,0,1 for false, pending, and true states
  const [loggedIn, setLoggedIn] = useState(-1); //false

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path={"/unauthorized"} element={<Unauthorized />} />
          <Route path={"*"} element={<Unauthorized />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
