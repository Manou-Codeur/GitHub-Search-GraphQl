import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_DATA, GET_REPOSITORY_DATA } from "./GraphQl-Queries";

import Search from "./components/search/search";
import Repository from "./components/repository/repository";
import Profile from "./components/profile/profile";
import Notfound from "./components/notFound/notFound";

import "./App.css";

function App() {
  const [getUserData, { data: userData, error: userError }] = useLazyQuery(
    GET_USER_DATA
  );
  const [
    getRepositoryData,
    { data: repoData, error: repoError },
  ] = useLazyQuery(GET_REPOSITORY_DATA);

  const callServer = inputField => {
    if (Object.keys(inputField).length === 1) {
      getUserData({
        variables: {
          login: inputField.userName,
        },
      });
    } else {
      getRepositoryData({
        variables: {
          repoName: inputField.repoName,
          ownerName: inputField.ownerName,
        },
      });
    }
  };

  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/search"
          render={props => <Search {...props} callServer={callServer} />}
        />
        <Route
          path="/repository/:id"
          exact
          render={props => (
            <Repository {...props} data={repoData} error={repoError} />
          )}
        />
        <Route
          path="/profile/:id"
          exact
          render={props => (
            <Profile {...props} data={userData} error={userError} />
          )}
        />
        <Route path="/notFound" component={Notfound} />
        <Redirect from="/" exact to="/search" />
        <Redirect to="/notFound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
