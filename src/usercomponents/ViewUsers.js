import { Link } from "react-router-dom";
import UserDetails from "./displayusers/DisplayUsers";
import { useSelector } from "react-redux";
export default function () {
  console.log("User details");
  const userDetails = useSelector((state) => state.USERS);
  console.log("User details: " + userDetails);
  return (
    <>
      <h1>View user details page</h1>
      <UserDetails items={userDetails} />
      <p>
        <Link to=".." relative="path">
          Bank to Users Page
        </Link>
      </p>
    </>
  );
}
