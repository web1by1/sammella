import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/card/:slug",
    Component: Detail,
  },
]);
