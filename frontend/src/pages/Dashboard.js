import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addExpense, setUserLimits, getUser } from "../helpers/ServerHelpers";
import ExpenseDialog from "../components/dialogs/ExpenseDialog";
import "../css/App.css";
import Calendar from "../components/Calendar";
import Stats from "../components/Stats";
import RedrawDialogs from "../components/dialogs/RedrawDialogs";

const Dashboard = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [isLoading, setIsLoading] = useState(true);

  const currDate = new Date();
  const currDay = currDate.getDate();
  const currMonth = currDate.getMonth() + 1;
  const currYear = currDate.getFullYear();

  const [currSpent, setCurrSpent] = useState(0);

  const [currMonthData, setCurrMonthData] = useState({});
  const [prevMonthData, setPrevMonthData] = useState({});
  const [nextMonthData, setNextMonthData] = useState({});
  const [monthlyLimit, setMonthlyLimit] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);

  useEffect(() => {
    if (!location) {
      navigate("/unauthorized", { state: { error: "you have not logged in" } });
    } else {
      //removes login button from rendering in header
      async function setDashboard() {
        console.log(location);
        const foundUser = await getUser(location.username, location.password);
        if (foundUser) {
          console.log(foundUser);
          setIsLoading(false);
          setLoggedIn(true);
          setCurrSpent(foundUser.data[currYear][currMonth][currDay]);
          setCurrMonthData(foundUser.data[currYear][currMonth]);
          setPrevMonthData(foundUser.data[currYear][currMonth - 1]);
          setNextMonthData(foundUser.data[currYear][currMonth + 1]);
          setMonthlyLimit(foundUser.monthlyLimit);
          setDailyLimit(foundUser.dailyLimit);
        } else {
          alert("no user was found");
        }
      }
      setDashboard();
    }
  }, []);

  //daily and monthly limit change
  // useEffect(() => {
  //   if (!location) {
  //     navigate("/unauthorized", { state: { error: "you have not logged in" } });
  //   } else {
  //     async function updateUserLimits() {
  //       const updatedUser = await setUserLimits(
  //         location.username,
  //         location.password,
  //         dailyLimit,
  //         monthlyLimit
  //       );
  //       if (updatedUser.success) {
  //         //pass
  //       } else {
  //         alert("your work was not saved.");
  //       }
  //     }
  //     updateUserLimits();
  //   }
  // }, [dailyLimit, monthlyLimit]);

  const handleCloseModal = (e) => {
    e.target.closest("dialog").close();
  };

  const handleClickModal = (e) => {
    const modal = e.target.nextElementSibling;
    const form = modal.querySelector("form");
    if (form) form.reset();
    modal.showModal();
  };

  const handleSubmitExpense = async (e) => {
    e.preventDefault();
    const expenseVal = Number.parseInt(e.target.addExpense.value);
    if (expenseVal > 0) {
      const updatedUser = await addExpense(
        location.username,
        location.password,
        currSpent + expenseVal
      );

      if (updatedUser.success) {
        //updates numbers on screen
        setCurrSpent(updatedUser.user.data[currYear][currMonth][currDay]);
        setCurrMonthData(updatedUser.user.data[currYear][currMonth]);
      } else {
        alert("your work was not saved.");
      }

      e.target.closest("dialog").close();
    }
  };

  if (!isLoading)
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
            <ExpenseDialog
              handleSubmitExpense={handleSubmitExpense}
              currDate={currDate}
              currSpent={currSpent}
              handleCloseModal={handleCloseModal}
              givenId="add-expense-dialog"
            />
            <button className="sm-oval primary-bg" onClick={handleClickModal}>
              Redraw Expense
            </button>
            {/* dialog attached to above button */}
            <RedrawDialogs
              handleCloseModal={handleCloseModal}
              setCurrSpent={setCurrSpent}
              currDate={currDate}
              currSpent={currSpent}
              dailyLimit={dailyLimit}
              setDailyLimit={setDailyLimit}
              monthlyLimit={monthlyLimit}
              setMonthlyLimit={setMonthlyLimit}
            />
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
