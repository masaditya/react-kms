import React from "react";
import { Form, Input, Button, Radio, InputNumber, notification } from "antd";
import setAuthToken from "../../../helpers/setAuthToken";
import Axios from "axios";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

export const TimbangForm = ({ updateValue = undefined }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmitForm = React.useCallback(async (values) => {
    if (updateValue) {
      const response = await Axios.put(
        process.env.REACT_APP_SERVER + "/timbang/" + updateValue.id_timbang,
        values,
        setAuthToken(localStorage.getItem("token"))
      );
      if (response.data) {
        notification.info({ message: "Update Data Success" });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        notification.error({ message: "Update Data Failed" });
      }
    } else {
      const response = await Axios.post(
        process.env.REACT_APP_SERVER + "/timbang",
        values,
        setAuthToken(localStorage.getItem("token"))
      );
      if (response.data) {
        notification.info({ message: "Added New Data Success" });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        notification.error({ message: "Added New Data Failed" });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      {...layout}
      onFinish={handleSubmitForm}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        initialValue={updateValue && updateValue.nama_bayi}
        label="Nama Bayi"
        name="nama_bayi"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={updateValue ? updateValue.tanggal_timbang : ""}
        label="Tanggal Timbang"
        name="tanggal_timbang"
        rules={[{ required: true, message: "Please input the date!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={updateValue ? updateValue.berat : ""}
        label="Berat"
        name="berat"
        rules={[{ required: true, message: "Please input the weight!" }]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
