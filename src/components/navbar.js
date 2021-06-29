import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { PlusCircleOutlined } from "@ant-design/icons";

const Navbar = () => {
    const { Header } = Layout;
    return (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">
                    {" "}
                    <Link to="/" style={{ color: "white", marginLeft: "5px" }}>
                        Project-Manager
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    {" "}
                    <Link to="/" style={{ color: "white", marginLeft: "5px" }}>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <PlusCircleOutlined />
                    <Link
                        to="/createproject"
                        style={{ color: "white", marginLeft: "5px" }}
                    >
                        New Project
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navbar;
