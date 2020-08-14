import React from "react";
import Header from "../theme/Header";

const Layout = ({ children, isLoggedIn, logout }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <main>{children}</main>
    </>
  );
};
export default Layout;
