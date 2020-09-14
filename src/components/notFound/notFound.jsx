import React from "react";

import "./notFound.scss";

const Notfound = ({ history }) => {
  const goHome = () => {
    history.replace("/");
  };

  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default Notfound;
