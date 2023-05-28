import React from "react";

import "./UserDOB.css";

const UserDOBDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  //console.log(props.date);

  return (
    <div className="userdob-date">
      <p className="userdob-text">DOB</p>
      <div className="userdob-date__day">{day}</div>
      <div className="userdob-date__month">{month}</div>
      <div className="userdob-date__year">{year}</div>
    </div>
  );
};

export default UserDOBDate;
