import React from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";

const LinkBtnOval = ({ text, page }) => {
  return (
    <Link className="uni-btn" to={page}>
      {text}
    </Link>
  );
};

export default LinkBtnOval;
