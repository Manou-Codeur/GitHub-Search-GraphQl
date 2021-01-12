import React, { useState } from "react";

import "./input.scss";
import searchIcon from "../../../../assets/img/search.png";

const Input = React.forwardRef(({ field, handleSubmitWithClick }, ref) => {
  const [inputValue, setInputValue] = useState("");

  const generatePlaceholder = field => {
    if (field === "repoName") {
      return "Type repository name...";
    } else if (field === "ownerName") {
      return "Type repository's owner...";
    } else {
      return "Type username...";
    }
  };

  if (!field) return <h1>Wait...</h1>;
  return (
    <div
      className="input"
      style={field === "repo-name" ? { marginBottom: "1rem" } : null}
    >
      <input
        ref={ref}
        className="my-input"
        data-testid="my-input"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
        type="text"
        placeholder={generatePlaceholder(field)}
      />

      {field === "userName" && (
        <img
          onClick={e => {
            if (inputValue === "")
              e.target.parentNode.style.borderBottomColor = "red";
            else handleSubmitWithClick(e);
          }}
          src={searchIcon}
          alt="search icon"
          data-testid="search-icon"
        />
      )}
    </div>
  );
});

export default Input;
