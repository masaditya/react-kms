import React from "react";
import { Collapse, Typography, Button, notification, Modal, Empty } from "antd";
import Axios from "axios";
import setAuthToken from "../../../helpers/setAuthToken";
import { TimbangForm } from "./TimbangForm";
const { Panel } = Collapse;

export const TimbangList = ({ timbangList = [], onUpdate }) => {
  const [visible, setVisible] = React.useState(false);
  const [updatedItem, setUpdatedItem] = React.useState({});

  const handleDelete = async (values) => {
    console.log(values);
    const response = await Axios.delete(
      process.env.REACT_APP_SERVER + "/timbang/" + values.id_timbang,
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
      {timbangList.length > 0 ? (
        <Collapse ghost>
          {timbangList.map((timbang, i) => {
            return (
              <Panel header={timbang.nama_bayi} key={i}>
                <Typography>
                  Tanggal Timbang : {timbang.tanggal_timbang}
                </Typography>
                <Typography>Berat :{timbang.berat}</Typography>
                <Button onClick={() => handleDelete(timbang)} type="dashed">
                  Delete
                </Button>
                <Button onClick={() => handleUpdate(timbang)} type="primary">
                  Update
                </Button>
              </Panel>
            );
          })}
        </Collapse>
      ) : (
        <Empty />
      )}
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={handleCancelUpdate}
        footer=""
      >
        <TimbangForm updateValue={updatedItem} />
      </Modal>
    </>
  );
};
