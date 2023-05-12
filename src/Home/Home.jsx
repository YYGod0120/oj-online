import React from 'react'
import "@arco-design/web-react/dist/css/arco.css";

import { Layout } from "@arco-design/web-react";
import "../App.css";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import CustomContent from "../CustomContent/CustomContent";
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
export default function Home() {
    return (
        <div className="layout-basic-demo">
            <Layout style={{}}>
                <Header
                    className={"custom-header"}
                    style={{ "background-color": "var(--color-primary-light-4)" }}
                >
                    <HeaderTitle />
                </Header>
                <Content>
                    <CustomContent></CustomContent>
                </Content>
                <Footer></Footer>
            </Layout>
        </div>
    )
}
