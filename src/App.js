import React from "react";
import "./sass/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./utils/client";

import Landing from "./components/Landing";
import LaunchDashboard from "./components/LaunchDashboard";

const App = () => {
  return (
    <div>
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/launch-dashboard">
              <LaunchDashboard />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  );
};

export default App;
