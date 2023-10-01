import React from "react";
import "../css/App.css";
import ToolTip from "./tooltips/ToolTip";
import {
  dailyAverageLeft,
  moneyLeftInCurrMonth,
  moneyLeftInCurrDay,
  onTrackArray,
} from "../helpers/DashboardHelpers";

const Stats = ({ monthlyLimit, dailyLimit, currMonthData, currSpent }) => {
  const dailyAverage = dailyAverageLeft(
    JSON.parse(JSON.stringify(currMonthData)),
    monthlyLimit
  );

  const moneyLeftToSpend = moneyLeftInCurrMonth(
    JSON.parse(JSON.stringify(currMonthData)),
    monthlyLimit
  );

  // [('on'/'off'), (true,false)]
  const onTrack = onTrackArray(currMonthData, monthlyLimit);

  const moneyLeftInDay = moneyLeftInCurrDay(currSpent, dailyLimit);

  return (
    <div className="stats-content-wrapper">
      <div className="flex-row-ends stats-title rel">
        <h3 className="nowrap">
          You are{" "}
          <span className={onTrack[1] ? "green-color" : "fail-color"}>
            {onTrack[0]} track
          </span>{" "}
          for your monthly spending
        </h3>
        <img
          src="./Images/info-icon.svg"
          className="info-icon"
          alt="info icon"
        />
        {/* create tooltip here */}
      </div>
      <div className="flex-row-ends pb-1 pt-2">
        <div className="flex-col">
          <h5 className="stats-header">Monthly Expenditure:</h5>
          <p
            className={
              "stats-stat " + (moneyLeftToSpend < 0 ? "fail-color" : "")
            }
          >
            {moneyLeftToSpend}
          </p>
        </div>
        <div className="flex-col">
          <h5 className="stats-header">Daily Expenditure:</h5>
          <p
            className={
              "stats-stat self-right " +
              (moneyLeftInDay < 0 ? "fail-color" : "")
            }
          >
            {moneyLeftInDay}
          </p>
        </div>
      </div>
      <div className="flex-row-ends py-1">
        <div className="flex-col">
          <h5 className="stats-header">Monthly Allowance:</h5>
          <p className="stats-stat">{monthlyLimit}</p>
        </div>
        <div className="flex-col">
          <h5 className="stats-header">Daily Average Allowance:</h5>
          <p
            className={
              "stats-stat self-right " + (dailyAverage < 0 ? "fail-color" : "")
            }
          >
            {dailyAverage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
