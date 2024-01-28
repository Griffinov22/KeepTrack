import React, { useContext } from "react";
import "../css/App.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(UserContext);

  return (
    <header>
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        KeepTrack
      </h1>
      {loggedIn ? (
        <Link className="login-a" to="/">
          Logout
        </Link>
      ) : (
        <Link className="login-a" to="/login">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
