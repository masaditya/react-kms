import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default ({ isLoggedIn, logout }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      padding: "1rem",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          KMS
        </Link>
      </h1>
      {isLoggedIn && (
        <Button type="default" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  </header>
);
