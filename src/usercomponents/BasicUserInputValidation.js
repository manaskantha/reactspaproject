import "../styles.css";
import React from "react";
import { PropTypes } from "prop-types";

export default function BasicValidation(props) {
  const message = props.firstName
    ? props.firstName
    : "Please enter your details";
  return (
    <div>
      <h3>{message} </h3>
      {/* <p>{message}</p> */}
    </div>
  );
}

BasicValidation.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
