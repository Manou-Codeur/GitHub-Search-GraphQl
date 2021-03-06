import React from "react";

import InfoBoxes from "./info-boxes/infoBoxes";

import "./whiteWrapper.scss";
import gitHubIcon from "../../../assets/img/Octocat.png";

const WhiteWrapper = ({ star_unStar, viewerStared }) => {
  return (
    <div className="white-wrapper">
      <img src={gitHubIcon} alt="github icon" />
      <div className="white-wrapper__repo-data">
        <InfoBoxes large={false} pos="left" />

        <InfoBoxes large={true} pos="right" />
      </div>

      <div className="hr"></div>

      <button type="button" onClick={star_unStar}>
        {viewerStared ? "Unstar" : "Star"}
      </button>
    </div>
  );
};

export default WhiteWrapper;
