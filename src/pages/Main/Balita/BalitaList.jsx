import React from "react";
import { Collapse, Typography, Button, notification, Modal } from "antd";
import Axios from "axios";
import setAuthToken from "../../../helpers/setAuthToken";
import { BalitaForm } from "./BalitaForm";
const { Panel } = Collapse;

export const BalitaList = ({ balitaList, onUpdate }) => {
  const [visible, setVisible] = React.useState(false);
  const [updatedItem, setUpdatedItem] = React.useState({});

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

  const handleUpdate = (value) => {
    console.log(value);
    setUpdatedItem(value);
    setVisible(!visible);
  };

  const handleCancelUpdate = () => {
    setVisible(!visible);
    setUpdatedItem();
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
                <Button onClick={() => handleUpdate(balita)} type="primary">
                  Update
                </Button>
              </Panel>
            );
          })}
      </Collapse>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={handleCancelUpdate}
        footer=""
      >
        <BalitaForm updateValue={updatedItem} />
      </Modal>
    </>
  );
};
