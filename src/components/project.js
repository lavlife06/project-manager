import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Carousel } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import {
    CREATE_PROJECT,
    REMOVE_SELECTED_PROJECT,
    UPDATE_PROJECT,
} from "../redux/actions/types";

const Project = () => {
    const dispatch = useDispatch();

    const projectInfo = useSelector((state) => state.project.selectedProject);
    const projects = useSelector((state) => state.project.projects);

    // const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        return () => {
            dispatch({ type: REMOVE_SELECTED_PROJECT });
        };
    }, [projectInfo]);

    const contentStyle = {
        height: "40vh",
        color: "#fff",
        textAlign: "center",
        background: "#364d79",
        width: "40vw",
        margin: "20px",
    };

    const onFinish = (values) => {
        console.log(values);
    };

    // if (redirect) {
    //     return <Redirect to="/" />;
    // }
    if (!projects.length) {
        return <Redirect to="/" />;
    } else if (!projectInfo && projects.length) {
        return <div>Loading....</div>;
    } else {
        // console.log(initialValues);
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "1rem",
                        minWidth: "60vw",
                        maxWidth: "60vw",
                    }}
                >
                    {/* <h2>Title:<strong style={{ display: "block" }}>
                            Description:
                        </strong></h2>
                    <h3>{projectInfo.title}</h3> */}
                    <p>
                        {" "}
                        <strong style={{ display: "block" }}>Title:</strong>
                        {projectInfo.title}
                    </p>
                    <p
                        style={{
                            width: "50vw",
                            wordBreak: "break-all",
                        }}
                    >
                        {" "}
                        <strong style={{ display: "block" }}>
                            Description:
                        </strong>
                        {projectInfo.description}
                    </p>
                    {/* <Carousel dotPosition="bottom" autoplay>
                        {projectInfo.images.length
                            ? projectInfo.images.map((imageInfo) => (
                                  <img
                                      style={contentStyle}
                                      alt="project pics"
                                      src={imageInfo.url}
                                  />
                              ))
                            : null}
                    </Carousel> */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            maxHeight: "64vh",
                            overflowY: "auto",
                        }}
                    >
                        {projectInfo.images.length
                            ? projectInfo.images.map((imageInfo) => (
                                  <img
                                      style={contentStyle}
                                      alt="project pics"
                                      src={imageInfo.url}
                                  />
                              ))
                            : null}
                    </div>
                </div>
            </div>
        );
    }
};

export default Project;
