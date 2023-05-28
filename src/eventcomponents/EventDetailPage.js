import { Link } from "react-router-dom";
export default function EventDetailsPage() {
  return (
    <>
      <h1>Event Details Page</h1>
      <p>
        <Link to=".." relative="path">
          Bank to Events Page
        </Link>
      </p>
    </>
  );
}
