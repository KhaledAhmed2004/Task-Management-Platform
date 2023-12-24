import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivetRoute from "./PrivetRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import TodoForm from "../pages/TodoForm";
import Regelation from "../pages/Registration";
import Registration from "../pages/Registration";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
        {/* <Dashboard></Dashboard> */}
      </PrivetRoute>
    ),
    children: [
      // {
      //   path: "todoForm",
      //   element: <TodoForm></TodoForm>,
      // },
      //   {
      //     path: "update/:id",
      //     element: <Update></Update>,
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://parcel-management-server-pi.vercel.app/bookParcel/${params.id}`
      //       ),
      //   },
      //   {
      //     path: "/",
      //     element: <Dashboard></Dashboard>,
      //   },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <Registration></Registration>,
  },
  {
    path: "/todoForm",
    element: <TodoForm></TodoForm>,
  },
]);

export default Router;
