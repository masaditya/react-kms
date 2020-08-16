import React from "react";
import "./App.css";
import AppWrapper from "./components/AppWrapper";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./pages/Auth/Login/Login";
import { RegisterPage } from "./pages/Auth/Register/Register";
import { Main } from "./pages/Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect to="/" />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
