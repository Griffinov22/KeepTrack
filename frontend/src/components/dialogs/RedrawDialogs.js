import React from "react";
import "../../css/App.css";
import ExpenseDialog from "./ExpenseDialog";

const RedrawDialogs = ({
  currDate,
  currSpent,
  handleCloseModal,
  setCurrSpent,
  dailyLimit,
  monthlyLimit,
  setMonthlyLimit,
  setDailyLimit,
}) => {
  const handleRedrawModalClick = (e) => {
    const expenseModal = document.getElementById("redraw-modal");
    if (e.target.closest(".modal-container")) {
      //clicked inside modal
      if (e.target.id === "today-expense") {
        expenseModal.close();
        //trigger redraw todays expense
        document.getElementById("correct-expense-dialog").showModal();
      }
      if (e.target.id === "allowance") {
        expenseModal.close();
        //trigger redraw allowance
        document.getElementById("allowance-dialog").showModal();
      }
    } else {
      //clicked outside modal
      expenseModal.close();
    }
  };

  const handleSubmitExpense = (e) => {
    e.preventDefault();
    const expenseVal = Number.parseInt(e.target.addExpense.value);
    if (expenseVal >= 0) {
      e.target.closest("dialog").close();
    }
  };

  const handleSubmitAllowance = (e) => {
    e.preventDefault();
    const dailyAllowance = Number.parseInt(e.target.dailyAllowance.value);
    const monthlyAllowance = Number.parseInt(e.target.monthlyAllowance.value);
    //validation
    if (
      monthlyAllowance >= dailyAllowance &&
      monthlyAllowance >= 0 &&
      dailyAllowance >= 0
    ) {
      //close dialog
      setMonthlyLimit(monthlyAllowance);
      setDailyLimit(dailyAllowance);
      e.target.reset();
      e.target.closest("dialog").close();
    }
  };

  const handleExpenseChange = (e) => {
    e.target.value >= 0 && setCurrSpent(Number(e.target.value));
  };

  return (
    <>
      <dialog
        id="redraw-modal"
        className="modal primary-bg"
        onClick={handleRedrawModalClick}
      >
        <div className="modal-container modal-padding">
          <h4>What needs to change? </h4>
          <div className="flex-col modal-btn-div">
            <button id="today-expense" className="lg-oval secondary-bg">
              Today's Expenses
            </button>
            <button id="allowance" className="lg-oval secondary-bg">
              My Allowances
            </button>
          </div>
        </div>
      </dialog>
      {/* correct todays expense dialog */}
      <dialog
        id="correct-expense-dialog"
        className="modal modal-padding secondary-bg"
      >
        <div className="modal-header">
          <h4>Correct Today's Expense:</h4>
        </div>
        <div className="modal-body">
          <form className="modal-form" onSubmit={handleSubmitExpense}>
            <div className="flex-evenly pb-2">
              <span className="dollar-sign white-color">$</span>
              <input
                type="number"
                min="0"
                name="addExpense"
                value={currSpent}
                onChange={handleExpenseChange}
              />
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
      {/* correct alowance dialog */}
      <dialog
        id="allowance-dialog"
        className="modal modal-padding secondary-bg"
      >
        <div className="modal-header">
          <h4>Correct Allowance:</h4>
        </div>
        <div className="modal-body">
          <form className="modal-form" onSubmit={handleSubmitAllowance}>
            <div className="pb-2 flex-row-ends">
              <h4>Daily:</h4>
              <div className="modal-allowance-div">
                <span className="dollar-sign white-color">$</span>
                <input
                  type="number"
                  min="0"
                  name="dailyAllowance"
                  placeholder={dailyLimit}
                />
              </div>
            </div>
            <div className="pb-2 flex-row-ends">
              <h4>Monthly:</h4>
              <div className="modal-allowance-div">
                <span className="dollar-sign white-color">$</span>
                <input
                  type="number"
                  min="0"
                  name="monthlyAllowance"
                  placeholder={monthlyLimit}
                />
              </div>
            </div>

            <div className="white-color pb-2">
              <p>Recorded on: {currDate.toLocaleDateString()}</p>
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
    </>
  );
};

export default RedrawDialogs;
