import React from "react";
import "../css/App.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ loggedIn }) => {
  const navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => navigate("/")}>KeepTrack</h1>
      {!loggedIn && (
        <Link className="login-a" to="/login">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
