import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addExpense } from "../helpers/ServerHelpers";
import "../css/App.css";
import Calendar from "../components/Calendar";
import Stats from "../components/Stats";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation().state;

  const currDate = new Date();
  const currDay = currDate.getDate();
  const currMonth = currDate.getMonth() + 1;
  const currYear = currDate.getFullYear();

  const [currSpent, setCurrSpent] = useState(
    location.data[currYear][currMonth][currDay] || 0
  );
  const [currMonthData, setCurrMonthData] = useState(
    location.data[currYear][currMonth] || {}
  );
  const [prevMonthData, setPrevMonthData] = useState(
    location.data[currYear][currMonth - 1] || {}
  );
  const [nextMonthData, setNextMonthData] = useState(
    location.data[currYear][currMonth + 1] || {}
  );
  const [monthlyLimit, setMonthlyLimit] = useState(location.monthlyLimit || 0);
  const [dailyLimit, setDailyLimit] = useState(location.dailyLimit || 0);

  const handleClickModal = (e) => {
    const modal = e.target.nextElementSibling;
    const form = modal.querySelector("form");
    if (form) form.reset();
    modal.showModal();
  };

  useEffect(() => {
    if (!location) {
      navigate("/unauthorized", { state: { error: "you have not logged in" } });
    } else {
      //only add expense to db if currspent is different than when first calling db
      if (currSpent !== location.data[currYear][currMonth][currDay]) {
        async function updateUser() {
          const updatedUser = await addExpense(
            location.username,
            location.password,
            currSpent
          );
          if (updatedUser.success) {
            setCurrMonthData(updatedUser.user.data[currYear][currMonth]);
          } else {
            alert("your work was not saved.");
          }
        }
        updateUser();
      }
    }
  }, [currSpent]);

  const handleCloseModal = (e) => {
    e.target.closest("dialog").close();
  };

  const handleSubmitExpense = (e) => {
    e.preventDefault();
    const expenseVal = Number.parseInt(e.target.addExpense.value);
    if (expenseVal > 0) {
      //updates numbers on screen
      setCurrSpent((prevVal) => prevVal + expenseVal);
      e.target.closest("dialog").close();
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="flex-row-ends dash-header no-wrap cal-width">
        <p className="grey">Today I've spent:</p>
        {/* date */}
        <p className="bold-6">{currDate.toLocaleDateString()}</p>
      </div>
      <div className="money-wrapper cal-width">
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
        currSpent={currSpent}
        currMonthData={currMonthData}
        prevMonthData={prevMonthData}
        nextMonthData={nextMonthData}
        dailyLimit={dailyLimit}
      />
      <div className="cal-width">
        <div className="flex-row-ends py-1">
          <button className="sm-oval green-bg" onClick={handleClickModal}>
            Add Expense
          </button>
          {/* dialog attached to above button */}
          <dialog className="modal secondary-bg">
            <div className="modal-header">
              <h4>Add Your Expense:</h4>
            </div>
            <div className="modal-body">
              <form className="modal-form" onSubmit={handleSubmitExpense}>
                <div className="flex-evenly pb-2">
                  <span className="dollar-sign white-color">$</span>
                  <input type="number" min="0" name="addExpense" />
                  <p></p>
                </div>

                <div className="white-color pb-2">
                  <p>Recorded on: {currDate.toLocaleDateString()}</p>
                  <p>Today you have spent: ${currSpent}</p>
                </div>

                <div className="flex-row-ends">
                  <button className="sm-oval green-bg" type="submit">
                    Accept
                  </button>
                  <button
                    type="button"
                    className="sm-oval fail-100-bg"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </dialog>

          <button className="sm-oval primary-bg" onClick={handleClickModal}>
            Redraw Expense
          </button>
          {/* dialog attached to above button */}
          <dialog className="modal primary-bg">
            <h4>What needs to change? </h4>
            <div className="flex-col modal-btn-div">
              <button className="lg-oval secondary-bg">Today's Expenses</button>
              <button className="lg-oval secondary-bg">My Allowances</button>
            </div>
          </dialog>
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
