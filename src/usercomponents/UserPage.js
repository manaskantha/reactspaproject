import { Link } from "react-router-dom";
export default function () {
  return (
    <>
      <h1>User Home Page</h1>
      <p>
        <Link to="new">Register User</Link>
      </p>
      <p>
        <Link to="view">View Users</Link>
      </p>
    </>
  );
}
