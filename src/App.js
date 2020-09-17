import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Search from "./components/search/search";
import Repository from "./components/repository/repository";
import Profile from "./components/profile/profile";
import Notfound from "./components/notFound/notFound";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/repository/:id" component={Repository} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/notFound" component={Notfound} />
        <Redirect from="/" exact to="/search" />
        <Redirect to="/notFound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
