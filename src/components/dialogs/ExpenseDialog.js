import React from "react";
import "../../css/App.css";

const ExpenseDialog = ({
  handleSubmitExpense,
  currDate,
  currSpent,
  handleCloseModal,
}) => {
  return (
    <dialog className="modal modal-padding secondary-bg">
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
  );
};

export default ExpenseDialog;
