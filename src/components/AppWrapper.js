/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import setAuthToken from "../helpers/setAuthToken";
import Layout from "./common/Layout";
import Context from "./common/Context";

export default ({ children }) => {
  const { user, dispatchUserAction } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  console.log(user);

  const fetchUser = React.useCallback(async () => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        await dispatchUserAction({
          type: "SAVE_USER",
          payload: { success: true, token: token },
        });
        if (
          window.location.pathname === "/login" ||
          window.location.pathname === "/register" ||
          window.location.pathname === "/app/login/" ||
          window.location.pathname === "/app/register/"
        ) {
          history.push("/");
        }
        setLoading(false);
      } else {
        if (
          window.location.pathname === "/" ||
          window.location.pathname === ""
        ) {
          history.push("/login");
        }
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  });

  const logout = async () => {
    try {
      dispatchUserAction({
        type: "LOGOUT",
      });
      window.localStorage.removeItem("token");
      setAuthToken(false);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user.isLoggedIn) {
      fetchUser();
    }
  }, [fetchUser, user.isLoggedIn]);

  return (
    <>
      {loading ? (
        <span> Loading... </span>
      ) : (
        <Layout isLoggedIn={user.isLoggedIn} logout={logout}>
          {children}
        </Layout>
      )}
    </>
  );
};
