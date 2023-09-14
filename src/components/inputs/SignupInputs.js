import React from "react";
import "../../css/App.css";
import Tooltip from "../ToolTip";

const SignupInputs = ({ children }) => {
  return (
    <form className="login-input-wrapper" method="GET" action="/">
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
      <div className="login-group">
        <div className="flex-row-ends rel">
          <h4>Monthly Spending Allowance</h4>
          <img
            src="/Images/info-icon.svg"
            className="info-icon"
            alt="information icon for monthly spending allownace"
          />
        </div>
        <input
          type="number"
          name="upperLimit"
          placeholder="Upper Limit..."
          min="0"
          max="1000"
        />
      </div>
      <div className="login-group">
        <div className="flex-row-ends rel">
          <h4>Daily Spending Allowance</h4>
          <img
            src="/Images/info-icon.svg"
            className="info-icon"
            alt="information icon for daily spending allownace"
          />
          <Tooltip text="tool-tip text" />
        </div>
        <input
          type="number"
          name="dailyLimit"
          placeholder="Daily Limit..."
          min="0"
          max="50000"
        />
      </div>
      {children}
    </form>
  );
};

export default SignupInputs;
