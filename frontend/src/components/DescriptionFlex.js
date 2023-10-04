import React from "react";
import "../css/App.css";

const DescriptionFlex = ({ ImgUrl, ImgAlt = "", textDesc, ImgLeftOrRight }) => {
  const image = (
    <img src={ImgUrl} alt={ImgAlt} className="sm-img" key={ImgAlt} />
  );
  const headerFour = (
    <h4 className="descflex-text" key={textDesc}>
      {textDesc}
    </h4>
  );
  const content =
    ImgLeftOrRight === "right" ? [headerFour, image] : [image, headerFour];

  return <div className="descflex">{content}</div>;
};

export default DescriptionFlex;
