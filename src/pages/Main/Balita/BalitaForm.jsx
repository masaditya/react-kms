import React from "react";
import { Form, Input, Button, Radio, InputNumber, notification } from "antd";
import setAuthToken from "../../../helpers/setAuthToken";
import Axios from "axios";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

export const BalitaForm = ({ updateValue = undefined }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmitForm = React.useCallback(async (values) => {
    if (updateValue) {
      const response = await Axios.put(
        process.env.REACT_APP_SERVER + "/balita/" + updateValue.id_bayi,
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
        process.env.REACT_APP_SERVER + "/balita",
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
        initialValue={updateValue ? updateValue.jenis_kelamin : null}
        name="jenis_kelamin"
        label="Jenis Kelamin"
        rules={[{ required: true, message: "Please input your gender!" }]}
      >
        <Radio.Group>
          <Radio value="Laki-Laki">Laki-laki</Radio>
          <Radio value="Perempuan">Perempuan</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        initialValue={updateValue ? updateValue.alamat_bayi : ""}
        label="Alamat Bayi"
        name="alamat_bayi"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={updateValue ? updateValue.umur : 0}
        label="Umur Bayi"
        name="umur"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <InputNumber min={0} max={10} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
