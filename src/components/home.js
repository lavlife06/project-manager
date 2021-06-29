import React from "react";
import { Card } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PROJECT } from "../redux/actions/types";

const Home = () => {
    const dispatch = useDispatch();

    const myprojects = useSelector((state) => state.project.projects);

    const { Meta } = Card;

    if (myprojects.length) {
        return (
            <div style={{ display: "flex", flexDirection: "row" }}>
                {myprojects.map((project) => (
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="project pics"
                                src={project.images[0].url}
                            />
                        }
                        actions={[
                            <SettingOutlined
                                key="setting"
                                onClick={() => console.log("hii")}
                            />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined
                                key="ellipsis"
                                onClick={() => {
                                    dispatch({
                                        type: DELETE_PROJECT,
                                        payload: project.projectId,
                                    });
                                }}
                            />,
                        ]}
                    >
                        <Meta
                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={project.title}
                            description={project.description}
                        />
                    </Card>
                ))}
            </div>
        );
    }
    return <div>Home page</div>;
};

export default Home;
