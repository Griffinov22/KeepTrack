import React, { useEffect, useState } from "react";
import "../css/App.css";
import { useLocation } from "react-router-dom";

const Unauthorized = () => {
  const location = useLocation();
  const [errorMsg, setErrorMsg] = useState(
    "Sorry the page you were trying to find can't be found"
  );

  useEffect(() => {
    if (location.state !== null) {
      setErrorMsg(location.state.error);
    }
  }, [location]);

  return (
    <div>
      <h3>Error:</h3>
      <p>{errorMsg}</p>
    </div>
  );
};

export default Unauthorized;
