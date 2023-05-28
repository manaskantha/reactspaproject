import React from "react";

import UserDOBDate from "./UserDOB";
import Card from "./Card";
import "./UserDetailItems.css";

const UserDetailItem = (props) => {
  return (
    <Card className="user-item">
      <UserDOBDate date={props.dateOfBirth} />
      <div className="user-item__description">
        <h2>{props.firstName}</h2>
        <h2>{props.lastName}</h2>
        {/* <div className="user-item__price">${props.amount}</div> */}
      </div>
      <div className="userdob-gender">
        <h2>Gender</h2>
        <h2>{props.gender}</h2>
      </div>
    </Card>
  );
};

export default UserDetailItem;
