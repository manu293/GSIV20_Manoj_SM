// imports
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// local imports
import { history } from "./helpers/history";
import { Home } from "./pages";
import './App.css';

const App = () => (
  <div>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
