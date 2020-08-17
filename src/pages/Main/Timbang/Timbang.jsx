import React from "react";
import { TimbangForm } from "./TimbangForm";
import Axios from "axios";
import setAuthToken from "../../../helpers/setAuthToken";
import { Divider } from "antd";
import { TimbangList } from "./TimbangList";
import Context from "../../../components/common/Context";

export const Timbang = () => {
  const context = React.useContext(Context);
  const [timbangList, setTimbangList] = React.useState([]);

  React.useEffect(() => {
    const getAllTimbang = async () => {
      const response = await Axios.get(
        process.env.REACT_APP_SERVER + "/timbang",
        setAuthToken(localStorage.getItem("token"))
      );
      await context.dispatchTimbang({
        type: "FETCH_BALITAS",
        payload: response.data,
      });
      setTimbangList(response.data);
    };
    getAllTimbang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TimbangForm />
      <Divider />
      <TimbangList timbangList={timbangList} />
    </>
  );
};
