import React from "react";
import { BalitaForm } from "./BalitaForm";
import Axios from "axios";
import setAuthToken from "../../../helpers/setAuthToken";
import { Divider } from "antd";
import { BalitaList } from "./BalitaList";

export const Balita = () => {
  const [balitaList, setBalitaList] = React.useState([]);

  React.useEffect(() => {
    const getAllBalita = async () => {
      const response = await Axios.get(
        process.env.REACT_APP_SERVER + "/balita",
        setAuthToken(localStorage.getItem("token"))
      );
      setBalitaList(response.data);
    };
    getAllBalita();
  }, []);

  return (
    <>
      <BalitaForm />
      <Divider />
      <BalitaList balitaList={balitaList} />
    </>
  );
};
