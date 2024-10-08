import React, { useState } from "react";
import "../../css/App.css";
import Tooltip from "../tooltips/ToolTip";
import { createUser } from "../../helpers/ServerHelpers";
import { useNavigate } from "react-router-dom";
import SubmitBtnOval from "../buttons/SubmitBtnOval";

const SignupInputs = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showToolTip, setShowToolTip] = useState({
    monthlySpending: false,
    dailySpending: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const [username, password, monthlyLimit, dailyLimit] =
      form.querySelectorAll("input");
    //validation
    if (
      username.value &&
      password.value &&
      monthlyLimit.value &&
      dailyLimit.value
    ) {
      if (dailyLimit.value > monthlyLimit.value) {
        setErrorMsg(
          "Your daily spending limit must be lower than your monthly allowance"
        );
        setLoading(false);
      } else {
        const createdUser = await createUser(
          username.value,
          password.value,
          monthlyLimit.value,
          dailyLimit.value
        );
        if (Object.hasOwn(createdUser, "error")) {
          setErrorMsg(createdUser.error);
          setLoading(false);
        } else {
          navigate("/dashboard", { state: createdUser });
        }
      }
    } else {
      setErrorMsg("All values are required to setup an account");
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    setLoading(true);
  };

  const loadingDiv = <div className="loading-div" aria-label="loading"></div>;

  return (
    <form className="login-input-wrapper" onSubmit={handleSubmit}>
      <div className="login-group">
        <h4>Username</h4>
        <input
          type="text"
          name="user"
          placeholder="Username..."
          maxLength="12"
          required
        />
      </div>
      <div className="login-group">
        <h4>Password</h4>
        <input
          type="password"
          name="pass"
          placeholder="Password..."
          maxLength="16"
          required
        />
      </div>
      <div className="login-group">
        <div className="flex-row-ends rel">
          <h4>Monthly Spending Allowance</h4>
          <img
            src="/Images/info-icon.svg"
            className="info-icon"
            alt="information icon for monthly spending allownace"
            onClick={() => {
              setShowToolTip((prev) => {
                return { ...prev, monthlySpending: !prev.monthlySpending };
              });
            }}
          />
          {showToolTip.monthlySpending && (
            <Tooltip
              text="You can change this number later, so 
            don’t worry if you’re not sure "
            />
          )}
        </div>
        <input
          type="number"
          name="monthlyLimit"
          placeholder="Monthly Limit..."
          min="0"
          max="50000"
          required
        />
      </div>
      <div className="login-group">
        <div className="flex-row-ends rel">
          <h4>Daily Spending Allowance</h4>
          <img
            src="/Images/info-icon.svg"
            className="info-icon"
            alt="information icon for daily spending allownace"
            onClick={() => {
              setShowToolTip((prev) => {
                return { ...prev, dailySpending: !prev.dailySpending };
              });
            }}
          />
          {showToolTip.dailySpending && (
            <Tooltip
              text="This number dictates the highest amount
of money you would be okay with spending
in one day."
            />
          )}
        </div>
        <input
          type="number"
          name="dailyLimit"
          placeholder="Daily Limit..."
          min="0"
          max="1000"
          required
        />
        {errorMsg && (
          <span className="error" style={{ textAlign: "center" }}>
            {errorMsg}
          </span>
        )}
      </div>
      <SubmitBtnOval
        text={loading ? loadingDiv : "submit"}
        onClick={handleClick}
      />
    </form>
  );
};

export default SignupInputs;
