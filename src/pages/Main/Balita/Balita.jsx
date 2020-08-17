import React from "react";
import { BalitaForm } from "./BalitaForm";
import Axios from "axios";
import setAuthToken from "../../../helpers/setAuthToken";
import { Divider } from "antd";
import { BalitaList } from "./BalitaList";
import Context from "../../../components/common/Context";

export const Balita = () => {
  const context = React.useContext(Context);
  const [balitaList, setBalitaList] = React.useState([]);

  React.useEffect(() => {
    const getAllBalita = async () => {
      const response = await Axios.get(
        process.env.REACT_APP_SERVER + "/balita",
        setAuthToken(localStorage.getItem("token"))
      );
      await context.dispatch({
        type: "FETCH_BALITAS",
        payload: response.data,
      });
      setBalitaList(response.data);
    };
    getAllBalita();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BalitaForm />
      <Divider />
      <BalitaList balitaList={balitaList} />
    </>
  );
};
