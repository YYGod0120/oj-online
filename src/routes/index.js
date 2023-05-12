//路由表配置：src/routes/index.js
import About from "../Login/Login";
import Home from "../Home/Home";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];
