import React from "react";

import "./user.scss";

const User = () => {
  return (
    <div className="user">
      <div className="user__picture"></div>

      <div className="user__user-info">
        <p>
          <strong>Name:</strong> Salim-codeur
        </p>
        <p>
          <strong>Biography:</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laboriosam tenetur odio eligendi delectus, quas
          accusantium!
        </p>
        <p>
          <strong>Followers:</strong> 254k
        </p>
      </div>
    </div>
  );
};

export default User;
