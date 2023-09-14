import React from "react";
import "../../css/App.css";

const LoginInputs = ({ children }) => {
  return (
    <form className="login-input-wrapper" method="GET" action="/dashboard">
      <div className="login-group">
        <h4>Username</h4>
        <input
          type="text"
          name="user"
          placeholder="Username..."
          maxLength="12"
        />
      </div>
      <div className="login-group">
        <h4>Password</h4>
        <input
          type="password"
          name="pass"
          placeholder="Password..."
          maxLength="16"
        />
      </div>
      {children}
    </form>
  );
};

export default LoginInputs;
