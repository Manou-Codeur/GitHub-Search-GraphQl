import React from "react";

import InfoBoxes from "./info-boxes/infoBoxes";

import "./whiteWrapper.scss";

const WhiteWrapper = () => {
  return (
    <div className="white-wrapper">
      <div className="white-wrapper__repo-data">
        <InfoBoxes large={false} pos="left" />

        <InfoBoxes large={true} pos="right" />
      </div>

      <div className="hr"></div>

      <button>Star</button>
    </div>
  );
};

export default WhiteWrapper;
