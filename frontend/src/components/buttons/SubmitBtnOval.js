import React from "react";
import "../../css/App.css";

const SubmitBtnOval = ({ text = "submit", onClick }) => {
  return (
    <button className="uni-btn" type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitBtnOval;
