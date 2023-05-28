import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", name: "event 1" },
  { id: "e2", name: "event 2" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <p>
        <Link to="new">Create New Event</Link>
      </p>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}/edit`}>Edit Event {event.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>See Event {event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
