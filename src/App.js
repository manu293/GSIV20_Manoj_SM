// imports
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// local imports
import { history } from "./helpers/history";
import { Home, MovieDetails } from "./pages";
import './App.css';

const App = () => (
  <div>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:movieId" exact component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
