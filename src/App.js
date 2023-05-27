import "./styles.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import EventsPage from "./eventcomponents/EventsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //Error page to display for a path that's not default path or below defined child paths
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "products/:productid", element: <ProductDetails /> },
      { path: "/events", element: <EventsPage /> },
    ],
  },
]);

export default function App() {
  //Router provider to navigate to different pages.
  return <RouterProvider router={router} />;
}
