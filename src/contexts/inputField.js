import React, { createContext, useState } from "react";

export const InputFieldContext = createContext();

export default props => {
  const [userName, setUsername] = useState("");
  const [repoName, setRepoName] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const updateUserName = ({ target }) => {
    setUsername(target.value);
  };
  const updateRepoName = ({ target }) => {
    setRepoName(target.value);
  };
  const updateOwnerName = ({ target }) => {
    setOwnerName(target.value);
  };

  return (
    <InputFieldContext.Provider
      value={{
        userName,
        repoName,
        ownerName,
        updateUserName,
        updateRepoName,
        updateOwnerName,
      }}
    >
      {props.children}
    </InputFieldContext.Provider>
  );
};
