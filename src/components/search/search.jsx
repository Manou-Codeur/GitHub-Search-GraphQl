import React, { useState, useContext } from "react";

import Select from "./select/select";
import InputsWrapper from "./inputs-wrapper/inputsWrapper";
import { InputFieldContext } from "../../contexts/inputField";

import "./search.scss";
import catGithub from "../../assets/img/Octocat.png";

const Search = () => {
  const [fieldSelected, setFieldSelected] = useState("User");
  const myContext = useContext(InputFieldContext);

  const handleSubmit = e => {
    if (e.key === "Enter" || e.type === "click") {
      if (fieldSelected === "User") {
        console.log(myContext.userName);
      } else {
        console.log(myContext.repoName);
        console.log(myContext.ownerName);
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
        />
      </div>
    </div>
  );
};

export default Search;
