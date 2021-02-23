import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

// Pages
import LandingPage from "./pages";
import NotFoundPage from "./pages/404";
import ContactPage from "./pages/contact";

class App extends Component {
  render() {
    return (<Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
    );
  }
}

export default App;