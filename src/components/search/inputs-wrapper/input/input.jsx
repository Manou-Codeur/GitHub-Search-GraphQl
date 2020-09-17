import React, { useContext } from "react";

import "./input.scss";
import searchIcon from "../../../../assets/img/search.png";

import { InputFieldContext } from "../../../../contexts/inputField";

const Input = ({ field, handleSubmitWithClick }) => {
  //in here rather than writing the input logic like this, i'd to use the state on the context
  const myContext = useContext(InputFieldContext);

  const generatePlaceholder = field => {
    if (field === "repoName") {
      return "Type repository name...";
    } else if (field === "ownerName") {
      return "Type repository's owner...";
    } else {
      return "Type username...";
    }
  };

  return (
    <div
      className="input"
      style={field === "repo-name" ? { marginBottom: "1rem" } : null}
    >
      <input
        value={myContext[field]}
        onChange={myContext[`update${field[0].toUpperCase() + field.slice(1)}`]}
        type="text"
        placeholder={generatePlaceholder(field)}
      />
      {field === "username" && (
        <img
          onClick={handleSubmitWithClick}
          src={searchIcon}
          alt="search icon"
        />
      )}
    </div>
  );
};

export default Input;
