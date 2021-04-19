import React from "react";
import "./sass/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import LaunchDashboard from "./components/LaunchDashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/launch-dashboard">
            <LaunchDashboard />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
