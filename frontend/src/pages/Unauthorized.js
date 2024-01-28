import React, { useContext, useEffect, useState } from "react";
import "../css/App.css";
import { useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

const Unauthorized = () => {
  const { setLoggedIn } = useContext(UserContext);
  const location = useLocation();
  const [errorMsg, setErrorMsg] = useState("Sorry the page you were trying to find can't be found");

  useEffect(() => setLoggedIn(false), []);

  useEffect(() => {
    if (location.state !== null) {
      setErrorMsg(location.state.error);
    }
  }, [location]);

  return (
    <div className="error-container">
      <h2 className="error-header">Error:</h2>
      <p className="error-desc">{errorMsg}</p>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="error-img">
        <g data-name="Folder Warning">
          <path
            d="m14.83 6.45-1.4-2.11A3 3 0 0 0 10.93 3H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h11a1 1 0 0 0 .88-.53 1 1 0 0 0-.05-1.02Z"
            fill="#5c76ff"
          ></path>
          <path d="M22 6H2v14a2 2 0 0 0 2 2h19a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2Z" fill="#3bc6f5"></path>
          <circle cx="23" cy="22" r="7" fill="#5c76ff"></circle>
          <path d="M23 23a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1ZM23 26a1 1 0 0 1 0-2 1 1 0 0 1 1 1 1 1 0 0 1-1 1Z" fill="#42d2ff"></path>
        </g>
      </svg>
    </div>
  );
};

export default Unauthorized;
