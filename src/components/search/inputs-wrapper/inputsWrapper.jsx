import React from "react";

import Input from "./input/input";

const InputsWrapper = React.forwardRef(
  ({ fieldSelected, handleSubmitWithClick }, ref) => {
    if (fieldSelected === "User") {
      return (
        <Input
          field="userName"
          ref={ref.usernameInput}
          handleSubmitWithClick={handleSubmitWithClick}
        />
      );
    } else {
      return (
        <div className="search__inputs-containner">
          <Input field="repoName" ref={ref.repoInput} />
          <Input field="ownerName" ref={ref.ownerInput} />
        </div>
      );
    }
  }
);

export default InputsWrapper;
