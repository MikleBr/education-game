import React from "react";
import { useRoutes } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import HonorMessage from "../pages/HonorMessage";

const Routing = () => {
  const routesList = [
    {
      path: "",
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/test",
          element: <HonorMessage />,
        },
      ],
    },
    {
      path: "auth",
      element: <PublicLayout />,
      children: [
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ];
  const element = useRoutes(routesList);
  return element;
};

export default Routing;
