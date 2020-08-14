import React from "react";
import "./App.css";
import AppWrapper from "./components/AppWrapper";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Context from "./components/common/Context";
import { LoginPage } from "./pages/Auth/Login/Login";
import { RegisterPage } from "./pages/Auth/Register/Register";

const App = () => {
  const context = React.useContext(Context);
  console.log(context);
  return (
    <BrowserRouter>
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage}/>
          <Redirect to="/" />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
};

const HomePage = () => {
  return <div>Home</div>;
};

export default App;
