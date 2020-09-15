import React from "react";

import "./input.scss";
import searchIcon from "../../../assets/img/search.png";

const Input = ({ repo, second }) => {
  const generatePlaceholder = (repo, second) => {
    if (repo && !second) {
      return "Type repository name";
    } else if (repo && second) {
      return "Type repository's owner";
    } else {
      return "Type username";
    }
  };

  return (
    <div className="input" style={second ? { marginBottom: "1rem" } : null}>
      <input type="text" placeholder={generatePlaceholder(repo, second)} />
      {!repo && <img src={searchIcon} alt="search icon" />}
    </div>
  );
};

export default Input;
