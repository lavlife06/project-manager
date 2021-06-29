import React from "react";
import { PageHeader } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const myprojects = useSelector((state) => state.project.projects);
    if (myprojects.length) {
        return <div>{myprojects[0].title}</div>;
    }
    return <div>Home page</div>;
};

export default Home;
