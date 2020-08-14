/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export const RegisterPage = () => {
  const history = useHistory();
  const onFinish = React.useCallback(async (values) => {
    console.log("Success:", values);
    const data = await Axios.post(
      "http://localhost:3001/auth/register",
      values
    );
    if (data.data.success) {
      notification.info({ message: "Register Success" });
      history.push("/login");
    } else {
      notification.error({ message: "Register Failed" });
    }
  });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nama"
          name="nama_user"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Alamat"
          name="alamat_user"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email_user"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "space-around" }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Button type="link" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
