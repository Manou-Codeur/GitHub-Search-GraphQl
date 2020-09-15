import React from "react";

import "./repo.scss";
import bookIcon from "../../../../assets/img/bookmarks-outline.png";
import starIcon from "../../../../assets/img/star-outline.png";

const Repository = () => {
  return (
    <div className="repository">
      <div className="repository__left-part">
        <img src={bookIcon} alt="book icon" />
      </div>

      <div className="repository__right-part">
        <h3>Repository name</h3>
        <span>Owner</span>
        <div className="repository__sub-content">
          <span>
            <img src={starIcon} alt="star icon" /> 254
          </span>
          <span>MIT license</span>
          <span>Created in 2019/02/23</span>
        </div>
      </div>
    </div>
  );
};

export default Repository;
