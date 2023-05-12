import React from "react";
import "@arco-design/web-react/dist/css/arco.css";
import "./App.css";
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'
const App = () => {
  const element = useRoutes(routes)
  return (
    <div>
      {element}
    </div>
  );
};

export default App;
