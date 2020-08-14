/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { useHistory } from "react-router-dom";
import Context from "../../../components/common/Context";
import Axios from "axios";

export const LoginPage = () => {
  const context = React.useContext(Context);
  const history = useHistory();
  const onFinish = React.useCallback(async (values) => {
    console.log("Success:", values);
    const data = await Axios.post("http://localhost:3001/auth/login", values);
    if (data.data.success) {
      notification.info({ message: "Register Success" });
      await context.dispatchUserAction({
        type: "SAVE_USER",
        payload: {...data.data},
      });
      await window.localStorage.setItem("token", data.data.token);
      history.push("/");
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
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
            Login
          </Button>
          <Button type="link" onClick={() => history.push("/register")}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
