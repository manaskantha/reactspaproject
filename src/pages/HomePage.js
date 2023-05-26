import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go To <Link to="/products"> the list of products</Link>
      </p>
    </>
  );
}
