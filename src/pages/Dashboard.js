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
  const [monthlyLimit, setMonthlyLimit] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const [loading, setLoading] = useState(true);

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
      setMonthlyLimit(location.monthlyLimit);
      setDailyLimit(location.dailyLimit);
      setLoading(false);
    }
    // eslcolorint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loading)
    return (
      <div className="dashboard-wrapper">
        <div className="flex-row-ends dash-header no-wrap">
          <p className="grey">Today I've spent:</p>
          {/* date */}
          <p className="bold-6">{currDate.toLocaleDateString()}</p>
        </div>
        <div className="money-wrapper">
          {/* todays spending */}
          <h2
            id="curr-money"
            className={
              currSpent > dailyLimit
                ? "fail-color"
                : currSpent === dailyLimit
                ? "okay-color"
                : "green-color"
            }
          >
            {currSpent}
          </h2>
        </div>
        <Calendar
          currMonthData={currMonthData}
          prevMonthData={prevMonthData}
          nextMonthData={nextMonthData}
          dailyLimit={dailyLimit}
        />
        <div className="cal-width">
          <div className="flex-row-ends py-1">
            <button className="sm-oval green-bg">Add Expense</button>
            <button className="sm-oval primary-bg">Redraw Expense</button>
          </div>

          <Stats
            monthlyLimit={monthlyLimit}
            dailyLimit={dailyLimit}
            currMonthData={currMonthData}
            currSpent={currSpent}
          />
        </div>
      </div>
    );
};

export default Dashboard;
