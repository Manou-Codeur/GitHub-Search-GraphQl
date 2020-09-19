import React from "react";

import "./notFound.scss";

const Notfound = ({ history, location: { pathname } }) => {
  const pathnameArr = pathname.split("/");

  const goHome = () => {
    history.replace("/");
  };

  return (
    <div className="not-found">
      <h1>
        {pathnameArr.length > 2
          ? `${pathnameArr[2]} not Found`
          : "Page not Found"}
      </h1>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default Notfound;
