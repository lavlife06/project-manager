import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, InputNumber, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import {
    CREATE_PROJECT,
    REMOVE_SELECTED_PROJECT,
    UPDATE_PROJECT,
} from "../redux/actions/types";
import { uuid } from "uuidv4";

const UpdateProject = () => {
    const dispatch = useDispatch();

    const projectInfo = useSelector((state) => state.project.selectedProject);
    const projects = useSelector((state) => state.project.projects);

    const [redirect, setRedirect] = useState(false);
    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
        // if (projectInfo) {
        //     setInitialValues({
        //         title: projectInfo.title,
        //         description: projectInfo.description,
        //     });
        // }
        return () => {
            dispatch({ type: REMOVE_SELECTED_PROJECT });
        };
    }, [projectInfo]);

    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!",
            number: "${label} is not a valid number!",
        },
        number: {
            range: "${label} must be between ${min} and ${max}",
        },
    };

    const normFile = (e) => {
        // console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const onFinish = (values) => {
        console.log(values);
        let projectObj = {
            projectId: projectInfo.projectId,
            title: values.title,
            description: values.description,
            images: [...projectInfo.images],
        };

        values.upload.forEach((element) => {
            projectObj.images.push({
                imageId: element.uid,
                url: element.thumbUrl,
            });
        });

        console.log(projectObj);

        dispatch({ type: UPDATE_PROJECT, payload: projectObj });
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="/" />;
    } else if (!projects.length) {
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
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                    initialValues={{
                        title: projectInfo.title,
                        description: projectInfo.description,
                    }}
                    style={{
                        width: "50vw",
                        backgroundColor: "white",
                        padding: "1rem",
                    }}
                    layout="horizontal"
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        value="lav"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    {/* <Form.Item name={['project', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
            <InputNumber />
          </Form.Item> */}
                    <Form.Item name="description" label="Description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" listType="picture">
                            <Button icon={<UploadOutlined />}>
                                Click to upload
                            </Button>
                        </Upload>
                    </Form.Item>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Form.Item
                            wrapperCol={{ offset: 8, span: 16 }}
                            style={{ margin: "15px" }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ offset: 8, span: 16 }}
                            style={{ margin: "15px" }}
                        >
                            <Button
                                danger
                                onClick={() => {
                                    setRedirect(true);
                                    dispatch({ type: REMOVE_SELECTED_PROJECT });
                                }}
                            >
                                Cancel
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        );
    }
};

export default UpdateProject;
