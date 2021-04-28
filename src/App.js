import React from "react";
import "./sass/App.scss";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./utils/client";

import Landing from "./components/Landing";
import LaunchDashboard from "./components/LaunchDashboard";
import PastMissionModal from "./components/PastMissionModal";

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/launch-dashboard">
            <LaunchDashboard />
          </Route>
          <Route path="/missions/:missionId">
            <PastMissionModal />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
};

export default App;
