import { Link } from "react-router-dom";
export default function NewEventPage() {
  return (
    <>
      <h1>New Event Page</h1>
      <p>
        <Link to=".." relative="path">
          Bank to Events Page
        </Link>
      </p>
    </>
  );
}
