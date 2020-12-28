import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { myLazy2 } from "./assets/helperFunctions";
import ErrorBoundary from "./errorBoundary/errorBoundary";

// import Search from "./components/search/search";
const Search = myLazy2(() => import("./components/search/search"));
// import Repository from "./components/repository/repository";
const Repository = myLazy2(() => import("./components/repository/repository"));
// import Profile from "./components/profile/profile";
const Profile = myLazy2(() => import("./components/profile/profile"));
// import Notfound from "./components/notFound/notFound";
const Notfound = myLazy2(() => import("./components/notFound/notFound"));

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Wait...</div>}>
        <Switch>
          <Route path="/search" component={Search} />
          <Route
            path="/repository/:reponame/:owner"
            exact
            component={Repository}
          />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/notFound" component={Notfound} />
          <Redirect from="/" exact to="/search" />
          <Redirect to="/notFound" />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
