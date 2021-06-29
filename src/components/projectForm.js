import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, InputNumber, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { CREATE_PROJECT } from "../redux/actions/types";

const ProjectForm = () => {
    const dispatch = useDispatch();

    const [redirect, setRedirect] = useState(false);

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
        // console.log(values);

        let projectObj = {
            title: values.title,
            description: values.description,
            images: [],
        };

        values.upload.forEach((element) => {
            projectObj.images.push({
                imageId: element.uid,
                url: element.thumbUrl,
            });
        });

        dispatch({ type: CREATE_PROJECT, payload: projectObj });
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            // initialValues={{
            //     title: "lav",
            // }}
            style={{ width: "50vw" }}
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
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProjectForm;
