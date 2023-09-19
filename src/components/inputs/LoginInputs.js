import React, { useState } from "react";
import "../../css/App.css";
import { checkLogin } from "../../helpers/ServerHelpers";

const LoginInputs = ({ children }) => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);

  const handleChange = ({ target }) => {
    setShowError(false);
    setLoginForm((prevLogin) => ({
      ...prevLogin,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = loginForm;
    const data = await checkLogin(username, password);
    if (data.error) {
      //error -- show validation error
      setShowError(true);
    }
  };

  return (
    <form
      className={"login-input-wrapper" + (showError ? " error" : "")}
      method="GET"
      action="#"
      onSubmit={handleSubmit}
    >
      <div className="login-group">
        <h4>Username</h4>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          maxLength="12"
          onChange={handleChange}
        />
      </div>
      <div className="login-group">
        <h4>Password</h4>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          maxLength="16"
          onChange={handleChange}
        />
      </div>
      {showError && (
        <span className="error">
          The profile with those credentials were not found
        </span>
      )}
      {children}
    </form>
  );
};

export default LoginInputs;
