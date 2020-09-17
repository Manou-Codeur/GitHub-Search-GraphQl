import React from "react";

import "./infoBox.scss";

const InfoBox = ({ large, fieldName, data }) => {
  //if this is the languages field, then transform data from array to string that can be added to the page
  let newData;
  if (fieldName === "Languages" && Array.isArray(data)) {
    let arr = [];
    for (let els of data) {
      arr.push(els.node.name);
    }
    newData = arr.join(", ");
  } else {
    newData = data;
  }

  return (
    <div className="info-box">
      <div
        className={
          large ? "info-box__black-part--large" : "info-box__black-part"
        }
      >
        {fieldName}
      </div>
      <div className="info-box__white-part">{newData}</div>
    </div>
  );
};

export default InfoBox;
