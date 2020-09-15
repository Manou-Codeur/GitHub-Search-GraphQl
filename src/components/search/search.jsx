import React, { useState } from "react";

import Select from "./select/select";
import Input from "./input/input";

import "./search.scss";
import catGithub from "../../assets/img/Octocat.png";

const Search = () => {
  const [fieldSelected, setFieldSelected] = useState("User");

  const toggleFeild = field => {
    setFieldSelected(field);
  };

  return (
    <div className="search">
      <div className="search__title">
        <h1>GitHub Search</h1>
        <img src={catGithub} alt="github cat" />
      </div>

      <div className="search__form-containner">
        <Select toggleFeild={toggleFeild} />

        {fieldSelected === "User" ? (
          <Input />
        ) : (
          <div className="inputs-containner">
            <Input repo={true} second={true} />
            <Input repo={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
