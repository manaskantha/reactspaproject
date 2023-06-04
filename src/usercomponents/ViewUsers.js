import { Link } from "react-router-dom";
import DispalyUsers from "./displayusers/DisplayUsers";
export default function () {
  return (
    <>
      <h1>View user details page</h1>
      <DispalyUsers />
      <p>
        <Link to=".." relative="path">
          Bank to Users Page
        </Link>
      </p>
    </>
  );
}
