import React from "react";

import InfoBox from "./info-box/infoBox";

const InfoBoxes = ({ large }) => {
  return (
    <div className="info-boxes">
      <InfoBox large={large} />
    </div>
  );
};

export default InfoBoxes;
