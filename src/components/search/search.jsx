import React from "react";

import Select from "./select/select";
import Input from "./input/input";

import "./search.scss";
import catGithub from "../../assets/img/Octocat.png";

const Search = () => {
  return (
    <div className="search">
      <div className="search__title">
        <h1>GitHub Search</h1>
        <img src={catGithub} alt="github cat" />
      </div>

      <div className="search__form-containner">
        <Select />
        <Input />
      </div>
    </div>
  );
};

export default Search;
