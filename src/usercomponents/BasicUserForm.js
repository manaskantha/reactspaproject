import "../styles.css";
import "./Selection.css";
import React from "react";
import BasicValidation from "./BasicUserInputValidation";

export default function BasicUserDetails(props) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event);
    const userData = {
      firstName: firstName,
      lastName: lastName,
      dob: new Date(dob),
      gender: gender,
    };
    props.onBasicFormSubmit(userData);
    const message =
      firstName && lastName ? "Submitted successfully" : "Invalid Input";
    alert(message);
  };
  const value = (
    <div className="userForm">
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          onChange={() => setFirstName(window.event.target.value)}
          id="firstName"
          styles="input"
        />
        <br />
        {firstName ? <strong></strong> : "Please type your first name"}
        <br />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          onChange={() => setLastName(window.event.target.value)}
          id="lastName"
        />
        <br />
        {lastName ? <strong></strong> : "Please type your last name"}
        <br />
        <br />
        <label htmlFor="dob">Date of birth: </label>
        <input
          type="date"
          id="dob"
          onChange={() => setDob(window.event.target.value)}
        ></input>

        <br />
        {firstName && lastName ? (
          <strong>
            Hello {firstName} {lastName}
          </strong>
        ) : (
          ""
        )}
        <br />
        {dob ? <strong>Your date of birth is: {dob}</strong> : ""}
        <br />
        <label htmlFor="gender">Gender: </label>
        <select
          name="gender"
          id="gender"
          className="select"
          onChange={() => setGender(window.event.target.value)}
        >
          <option value="NA">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <button type="submit" onClick={handleSubmit} className="btn success">
          Submit Form
        </button>
      </form>
    </div>
  );

  React.useEffect(() => {
    BasicValidation({ firstName, lastName });
  }, [firstName]);

  return value;
}
