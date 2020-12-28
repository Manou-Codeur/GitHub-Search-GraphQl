import React from "react";

import Input from "./input/input";

const InputsWrapper = ({ fieldSelected, handleSubmitWithClick }) => {
  const myRef = React.useRef();

  if (fieldSelected === "User") {
    return (
      <Input
        field="userName"
        ref={myRef}
        handleSubmitWithClick={handleSubmitWithClick}
      />
    );
  } else {
    return (
      <div className="search__inputs-containner">
        <Input field="repoName" />
        <Input field="ownerName" />
      </div>
    );
  }
};

export default InputsWrapper;
