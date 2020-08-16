/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { List } from "antd/lib/form/Form";
import Avatar from "antd/lib/avatar/avatar";
import { Typography } from "antd";

export const BalitaList = ({ balitaList }) => {
  console.log(balitaList);
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <>
      {/* {balitaList.map((item, i) => {
        return <div key={i}>{item.nama_bayi}</div>;
      })} */}
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark> {item.title} </Typography.Text>
          </List.Item>
        )}
      />
    </>
  );
};
