import React from "react";

import "./input.scss";
import searchIcon from "../../../assets/img/search.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
};

export default Input;
