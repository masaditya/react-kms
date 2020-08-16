import React from "react";
import { BalitaForm } from "./BalitaForm";
import Axios from "axios";
import setAuthToken from "../../../helpers/setAuthToken";
import { Divider, notification } from "antd";
import { BalitaList } from "./BalitaList";
import Context from "../../../components/common/Context";

export const Balita = () => {
  const context = React.useContext(Context);
  const [balitaList, setBalitaList] = React.useState([]);
  const [updatedItem, setUpdatedItem] = React.useState();

  const handleSubmitForm = React.useCallback(async (values) => {
    const response = await Axios.post(
      process.env.REACT_APP_SERVER + "/balita",
      values,
      setAuthToken(localStorage.getItem("token"))
    );
    if (response.data) {
      notification.info({ message: "Added New Data Success" });
      // console.log(response.data);
      // await context.dispatch({
      //   type: "ADD_NEW_BALITA",
      //   payload: [{ ...response.data }],
      // });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      notification.error({ message: "Added New Data Failed" });
    }
  }, []);

  React.useEffect(() => {
    const getAllBalita = async () => {
      const response = await Axios.get(
        process.env.REACT_APP_SERVER + "/balita",
        setAuthToken(localStorage.getItem("token"))
      );
      console.log(response.data);
      await context.dispatch({
        type: "FETCH_BALITAS",
        payload: response.data,
      });
      setBalitaList(response.data);
    };
    getAllBalita();
  }, []);

  return (
    <>
      <BalitaForm updateValue={updatedItem} onSubmit={handleSubmitForm} />
      <Divider />
      <BalitaList balitaList={balitaList} />
    </>
  );
};
