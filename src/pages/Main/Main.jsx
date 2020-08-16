import React from "react";
import { Timbang } from "./Timbang/Timbang";
import { Balita } from "./Balita/Balita";
import { Row, Col } from "antd";

export const Main = () => {
  return (
    <div style={{ padding: "2em" }}>
      <Row>
        <Col span={12}>
          <Timbang></Timbang>
        </Col>
        <Col span={12}>
          <Balita></Balita>
        </Col>
      </Row>
    </div>
  );
};
