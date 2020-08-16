import React from "react";
import { Collapse, Typography, Button, notification } from "antd";
import Axios from "axios";
import setAuthToken from "../../../helpers/setAuthToken";
const { Panel } = Collapse;

export const BalitaList = ({ balitaList, onUpdate }) => {
  const handleDelete = async (values) => {
    console.log(values);
    const response = await Axios.delete(
      process.env.REACT_APP_SERVER + "/balita/" + values.id_bayi,
      setAuthToken(localStorage.getItem("token"))
    );
    console.log(response.data);
    if (response.data) {
      notification.info({ message: "Delete New Data Success" });
      console.log(response.data);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      notification.error({ message: "Delete New Data Failed" });
    }
  };

  return (
    <>
      <Collapse ghost>
        {balitaList &&
          balitaList.map((balita, i) => {
            return (
              <Panel header={balita.nama_bayi} key={i}>
                <Typography>Umur : {balita.umur}</Typography>
                <Typography>Jenis Kelamin :{balita.jenis_kelamin}</Typography>
                <Typography>Alamat : {balita.alamat_bayi}</Typography>
                <Button onClick={() => handleDelete(balita)} type="dashed">
                  Delete
                </Button>
                <Button onClick={onUpdate} type="primary">
                  Update
                </Button>
              </Panel>
            );
          })}
      </Collapse>
    </>
  );
};
