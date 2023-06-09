import { NavLink } from "react-router-dom";
import "./mainnavigation.css";

export default function MainNavigation() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  isActive ? "active" : undefined;
                }}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  isActive ? "active" : undefined;
                }}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => {
                  isActive ? "active" : undefined;
                }}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => {
                  isActive ? "active" : undefined;
                }}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
