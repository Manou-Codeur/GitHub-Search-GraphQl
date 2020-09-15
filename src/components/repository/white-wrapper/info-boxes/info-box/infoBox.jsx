import React from "react";

import "./infoBox.scss";

const InfoBox = ({ large }) => {
  return (
    <div className="info-box">
      <div
        className={
          large ? "info-box__black-part--large" : "info-box__black-part"
        }
      >
        Licence Info
      </div>
      <div className="info-box__white-part">manou-codeur</div>
    </div>
  );
};

export default InfoBox;
