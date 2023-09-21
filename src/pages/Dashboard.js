import React from "react";
import { redirect, useLocation } from "react-router-dom";
import "../css/App.css";
import Calendar from "../components/Calendar";
import Stats from "../components/Stats";

const Dashboard = () => {
  const location = useLocation().state || undefined;
  if (!location) {
    console.log("no user found. Redirecting.....");
  } else {
    console.log("user of");
  }

  return (
    <div className="dashboard-wrapper">
      <div className="flex-row-ends dash-header no-wrap">
        <p className="grey">Today I've spent:</p>
        <p className="bold-6">9/9/2023</p>
      </div>
      <div className="money-wrapper">
        <h2 id="curr-money">8</h2>
      </div>
      <Calendar />
      <div className="cal-width">
        <div className="flex-row-ends py-1">
          <button className="sm-oval green-bg">Add Expense</button>
          <button className="sm-oval primary-bg">Redraw Expense</button>
        </div>

        <Stats />
      </div>
    </div>
  );
};

export default Dashboard;
