import React from "react";

import InfoBox from "./info-box/infoBox";

import "./infoBoxes.scss";

const InfoBoxes = ({ large, pos }) => {
  return (
    <div className="info-boxes">
      {pos === "left"
        ? [0, 1, 2, 3, 4, 5].map(el => <InfoBox key={el} large={large} />)
        : [0, 1].map(el => <InfoBox key={el} large={large} />)}
    </div>
  );
};

export default InfoBoxes;
