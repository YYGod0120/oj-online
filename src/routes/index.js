//路由表配置：src/routes/index.js

import Home from "../Home/Home";
import Register from "../User/Register/Register";
import { Navigate } from "react-router-dom";
import Login from "../User/Login/Login";
import List from "../List/List";
import Problems from "../Problems/Problems";
import Problem from "../Problems/Problem";
import ChangePassword from "../User/ChangePassword/ChangePassword";
import Check from "../Problems/Check/Check";
import User from "../User/User/User.jsx";
import MakeProblem from "../Problems/MakeProblem/MakeProblem";
import MPP from "../Problems/MakeProblem/MakeProMain";
import TextData from "../Problems/TextData/TextData";
const admId = localStorage.getItem("admId");
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/problems",
    element: <Problems />,
    children: [{ path: ":id", element: <Problem></Problem> }],
  },
  {
    path: "/cpw",
    element: <ChangePassword />,
  },
  {
    path: "/check",
    element: <Check />,
  },
  {
    path: "/mkpro",
    element: <MakeProblem />,
    children: [
      { path: "post", element: <MPP damId={admId}></MPP> },
      { path: "text", element: <TextData></TextData> },
    ],
  },
  {
    path: "/user",
    element: <User />,
  },
];
