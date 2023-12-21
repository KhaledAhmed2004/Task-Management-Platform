import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default Router;