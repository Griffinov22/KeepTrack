import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>KeepTrack</h1>
      <Link className="login-a" to="/login">
        Login
      </Link>
    </header>
  );
};

export default Header;
