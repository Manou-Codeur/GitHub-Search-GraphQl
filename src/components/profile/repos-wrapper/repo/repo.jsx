import React from "react";
import { formatDate } from "../../../../assets/helperFunctions";

import "./repo.scss";
import bookIcon from "../../../../assets/img/bookmarks-outline.png";
import starIcon from "../../../../assets/img/star-outline.png";

const Repository = ({ data }) => {
  return (
    <div className="repository">
      <div className="repository__left-part">
        <img src={bookIcon} alt="book icon" />
      </div>

      <div className="repository__right-part">
        <h3>{data.name}</h3>
        <span>{data.owner.login}</span>
        <div className="repository__sub-content">
          <span>
            <img src={starIcon} alt="star icon" /> {data.stargazers.totalCount}
          </span>
          <span>{data.licenseInfo ? data.licenseInfo.name : "No license"}</span>
          <span>{formatDate(data.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default Repository;
