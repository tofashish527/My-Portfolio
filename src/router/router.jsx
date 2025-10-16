import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ProjectDetails from "../Components/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },
]);
