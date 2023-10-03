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
  const [loggedIn, setLoggedIn] = useState(false); //false

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={<Dashboard setLoggedIn={setLoggedIn} />}
          />
          <Route
            path={"/unauthorized"}
            element={<Unauthorized setLoggedIn={setLoggedIn} />}
          />
          <Route path={"*"} element={<Unauthorized />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
