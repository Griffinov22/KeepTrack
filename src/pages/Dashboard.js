import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/App.css";
import Calendar from "../components/Calendar";
import Stats from "../components/Stats";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [currSpent, setCurrSpent] = useState(0);
  const [currMonthData, setCurrMonthData] = useState({});
  const [prevMonthData, setPrevMonthData] = useState({});
  const [nextMonthData, SetNextMonthData] = useState({});

  const currDate = new Date();
  const currDay = currDate.getDate();
  const currMonth = currDate.getMonth() + 1;
  const currYear = currDate.getFullYear();

  useEffect(() => {
    if (!location) {
      navigate("/unauthorized", { state: { error: "you have not logged in" } });
    } else {
      setCurrSpent(location.data[currYear][currMonth][currDay]);
      setCurrMonthData(location.data[currYear][currMonth]);
      //these are just for show in the calendar
      setPrevMonthData(location.data[currYear][currMonth - 1]);
      SetNextMonthData(location.data[currYear][currMonth + 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="dashboard-wrapper">
      <div className="flex-row-ends dash-header no-wrap">
        <p className="grey">Today I've spent:</p>
        <p className="bold-6">{currDate.toLocaleDateString()}</p>
      </div>
      <div className="money-wrapper">
        <h2 id="curr-money">{currSpent}</h2>
      </div>
      <Calendar
        currMonthData={currMonthData}
        prevMonthData={prevMonthData}
        nextMonthData={nextMonthData}
      />
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
