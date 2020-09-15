import React from "react";

import InfoBoxes from "./info-boxes/infoBoxes";

import "./whiteWrapper.scss";

const WhiteWrapper = () => {
  return (
    <div className="white-wrapper">
      <div className="white-wrapper__repo-data">
        <div className="white-wrapper__left-part">
          <InfoBoxes large={false} />
          <InfoBoxes large={false} />
          <InfoBoxes large={false} />
          <InfoBoxes large={false} />
          <InfoBoxes large={false} />
          <InfoBoxes large={false} />
        </div>

        <div className="white-wrapper__right-part">
          <InfoBoxes large={true} />
          <InfoBoxes large={true} />
        </div>
      </div>

      <button>Star</button>
    </div>
  );
};

export default WhiteWrapper;
