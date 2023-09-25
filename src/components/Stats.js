import React from "react";
import "../css/App.css";
import { findMonthlyExpenditure } from "../helpers/DashboardHelpers";

const Stats = ({ monthlyLimit, dailyLimit, currMonthData }) => {
  const monthlyExpenditure = findMonthlyExpenditure(
    JSON.parse(JSON.stringify(currMonthData)),
    monthlyLimit
  );

  return (
    <div className="stats-content-wrapper">
      <div className="flex-row-ends stats-title">
        <h3 className="nowrap">
          You are <span className="green-c">on track</span> for your monthly
          spending
        </h3>
        <img
          src="./Images/info-icon.svg"
          className="info-icon"
          alt="info icon"
        ></img>
      </div>
      <div className="flex-row-ends pb-1 pt-2">
        <div className="flex-col">
          <h5 className="stats-header">Monthly Expenditure:</h5>
          <p className="stats-stat">{monthlyExpenditure}</p>
        </div>
        <div className="flex-col">
          <h5 className="stats-header">Daily Expenditure:</h5>
          <p className="stats-stat self-right">205</p>
        </div>
      </div>
      <div className="flex-row-ends py-1">
        <div className="flex-col">
          <h5 className="stats-header">Monthly Allowance:</h5>
          <p className="stats-stat">{monthlyLimit}</p>
        </div>
        <div className="flex-col">
          <h5 className="stats-header">Daily Mean Allowance:</h5>
          <p className="stats-stat self-right">205</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
