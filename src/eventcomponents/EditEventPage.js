import { Link } from "react-router-dom";
export default function EditEventPage() {
  return (
    <>
      <h1>Edit Event Page</h1>
      <p>
        <Link to=".." relative="path">
          Bank to Events Page
        </Link>
      </p>
    </>
  );
}
