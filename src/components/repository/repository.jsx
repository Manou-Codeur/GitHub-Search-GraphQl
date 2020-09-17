import React from "react";

import WhiteWrapper from "./white-wrapper/whiteWrapper";

import "./repository.scss";

const Repository = ({ data, error }) => {
  if (error) return <h1>Error!</h1>;
  if (!data) return <h1>Loading...</h1>;
  console.log(data);

  return (
    <div className="Repository">
      <h1 className="Repository__header">Repository name</h1>
      <WhiteWrapper />
    </div>
  );
};

export default Repository;
