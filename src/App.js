import "./styles.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import EventsPage from "./eventcomponents/EventsPage";
import EventDetailsPage from "./eventcomponents/EventDetailPage";
import EditEventPage from "./eventcomponents/EditEventPage";
import NewEventPage from "./eventcomponents/NewEventPage";
import UserPage from "./usercomponents/UserPage";
import UserRegistration from "./usercomponents/UserRegistration";
import ViewUsers from "./usercomponents/ViewUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //Error page to display for a path that's not default path or below defined child paths
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:productid", element: <ProductDetails /> },
      { path: "events", element: <EventsPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventid/edit", element: <EditEventPage /> },
      { path: "events/:eventid", element: <EventDetailsPage /> },
      { path: "users", element: <UserPage /> },
      { path: "users/new", element: <UserRegistration /> },
      { path: "users/view", element: <ViewUsers /> },
    ],
  },
]);

export default function App() {
  //Router provider to navigate to different pages.
  return <RouterProvider router={router} />;
}
