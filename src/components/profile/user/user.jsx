import React from "react";

import "./user.scss";

const User = ({ data }) => {
  return (
    <div className="user">
      <div
        className="user__picture"
        style={{
          background: `url(${data.avatarUrl})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="user__user-info">
        <p>
          <strong>Name:</strong> {data.login}
        </p>
        <p>
          <strong>Biography:</strong>{" "}
          {data.bio ? data.bio : "This user hasn't written any biography!"}
        </p>
        <p>
          <strong>Followers:</strong> {data.followers.totalCount}
        </p>
      </div>
    </div>
  );
};

export default User;
