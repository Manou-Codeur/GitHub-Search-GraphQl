import React, { useState, createRef } from "react";

import Select from "./select/select";
import InputsWrapper from "./inputs-wrapper/inputsWrapper";

import catGithub from "../../assets/img/Octocat.png";
import "./search.scss";

const Search = ({ history, selectedField = "User" }) => {
  let usernameInput = createRef();
  let repoInput = createRef();
  let ownerInput = createRef();

  const [fieldSelected, setFieldSelected] = useState(selectedField);

  const handleSubmit = e => {
    if (e.key === "Enter" || e.type === "click") {
      if (fieldSelected === "User") {
        history.push(`/profile/@${usernameInput.current.value.trim()}`);
      } else {
        history.push(
          `/repository/${repoInput.current.value.trim()}/@${ownerInput.current.value.trim()}`
        );
      }
    }
  };

  return (
    <div className="search" onKeyPress={handleSubmit}>
      <div className="search__title">
        <h1>GitHub Search</h1>
        <img src={catGithub} alt="github cat" />
      </div>

      <div className="search__form-containner">
        <Select toggleFeild={setFieldSelected} />

        <InputsWrapper
          fieldSelected={fieldSelected}
          handleSubmitWithClick={handleSubmit}
          ref={{ usernameInput, repoInput, ownerInput }}
        />
      </div>
    </div>
  );
};

export default Search;
