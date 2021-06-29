import React, { useState } from "react";
import { Card, Button } from "antd";
import {
    EditOutlined,
    EyeOutlined,
    PlusCircleOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
    DELETE_PROJECT,
    SET_SELECTED_PROJECT,
    UPDATE_PROJECT,
} from "../redux/actions/types";
import { Redirect, Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();

    const myprojects = useSelector((state) => state.project.projects);

    const [redirectToUpdateProject, setRedirectToUpdateProject] =
        useState(false);
    const [redirectToViewProject, setRedirectToViewProject] = useState(false);

    const { Meta } = Card;

    if (redirectToViewProject) {
        return <Redirect to="/viewproject" />;
    } else if (redirectToUpdateProject) {
        return <Redirect to="/updateproject" />;
    } else {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px",
                    marginBottom: "15px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "white",
                        borderWidth: "1px",
                        borderRadius: "6px",
                        height: "85vh",
                        width: "80vw",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "20vh",
                        }}
                    >
                        <div>
                            <h1>One Place for all your projects</h1>
                        </div>
                        <Button type="primary">
                            <PlusCircleOutlined />
                            <Link
                                to="/createproject"
                                style={{ color: "white", marginLeft: "5px" }}
                            >
                                New Project
                            </Link>
                        </Button>
                    </div>
                    {myprojects.length ? (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                backgroundColor: "white",
                                borderWidth: "1px",
                                borderRadius: "6px",
                                height: "60vh",
                                width: "80vw",
                                paddingLeft: "15px",
                            }}
                        >
                            {myprojects.map((project) => (
                                <Card
                                    style={{
                                        height: "20vw",
                                        margin: "10px",
                                    }}
                                    cover={
                                        project.images.length && (
                                            <img
                                                alt="project pics"
                                                src={project.images[0].url}
                                                style={{
                                                    height: "15vh",
                                                    paddingLeft: "13%",
                                                    paddingRight: "8%",
                                                }}
                                            />
                                        )
                                    }
                                    actions={[
                                        <EditOutlined
                                            key="setting"
                                            onClick={() => {
                                                dispatch({
                                                    type: SET_SELECTED_PROJECT,
                                                    payload: project,
                                                });
                                                setRedirectToUpdateProject(
                                                    true
                                                );
                                            }}
                                        />,
                                        <EyeOutlined
                                            key="edit"
                                            onClick={() => {
                                                dispatch({
                                                    type: SET_SELECTED_PROJECT,
                                                    payload: project,
                                                });
                                                setRedirectToViewProject(true);
                                            }}
                                        />,
                                        <DeleteOutlined
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
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "white",
                                borderWidth: "1px",
                                borderRadius: "6px",
                                height: "60vh",
                                width: "80vw",
                            }}
                        >
                            <h1>Lets create some project</h1>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    // return <div>Home page</div>;
};

export default Home;
