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
    <div>
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/launch-dashboard" component={LaunchDashboard} />
            <Route path="/missions/:missionId" component={PastMissionModal} />
            <Route path="/" component={Landing} />
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  );
};

export default App;
