import React from "react";
import { Form, Input, Button, Radio } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
export const BalitaForm = () => {

    

  return (
    <Form {...layout}>
      <Form.Item
        label="Nama Bayi"
        name="nama_bayi"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
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
        label="Alamat Bayi"
        name="alamat"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Umur Bayi"
        name="umur"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
