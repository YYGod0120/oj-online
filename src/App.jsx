import React from "react";
import "@arco-design/web-react/dist/css/arco.css";
import "./App.css";
import { Layout } from "@arco-design/web-react";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import { useRoutes } from 'react-router-dom'
import routes from './routes'
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const App = () => {
  const element = useRoutes(routes)
  return (
    <div>
      <div className="layout-basic-demo">
        <Layout style={{}}>
          <Header>
            <HeaderTitle />
          </Header>
          <Content>
            {element}
          </Content>
          <Footer></Footer>
        </Layout>
      </div>
    </div>
  );
};

export default App;
