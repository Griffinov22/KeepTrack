import React from "react";
import "../../css/App.css";

const ToolTip = ({ text, handleClick }) => {
  return (
    <div className="tool-tip" role="tooltip">
      <span>{text}</span>
    </div>
  );
};

export default ToolTip;
