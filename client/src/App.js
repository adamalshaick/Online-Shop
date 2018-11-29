import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/create-profile/CreateProfile";
import Dashboard from "./components/dashboard/Dashboard";
import SellItem from "./components/item/SellItem";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile/:handle" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/create-profile" component={CreateProfile} />
            <Route exact path="/sell-item" component={SellItem} />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
