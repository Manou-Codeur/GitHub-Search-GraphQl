import React, { useState, useContext } from "react";

import Select from "./select/select";
import InputsWrapper from "./inputs-wrapper/inputsWrapper";
import { InputFieldContext } from "../../contexts/inputField";

import "./search.scss";
import catGithub from "../../assets/img/Octocat.png";

const Search = ({ history }) => {
  const [fieldSelected, setFieldSelected] = useState("User");
  const fieldContext = useContext(InputFieldContext);

  const handleSubmit = e => {
    if (e.key === "Enter" || e.type === "click") {
      if (fieldSelected === "User") {
        history.push(`/profile/@${fieldContext.userName}`);
        //init the username field in the context
        fieldContext.updateUserName({ target: { value: "" } });
      } else {
        history.push(
          `/repository/${fieldContext.repoName}/@${fieldContext.ownerName} `
        );
        //init the owner name and repo name field in the context
        fieldContext.updateOwnerName({ target: { value: "" } });
        fieldContext.updateRepoName({ target: { value: "" } });
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
