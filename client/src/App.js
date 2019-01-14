import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";
import { Provider } from "react-redux";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/create-profile/CreateProfile";
import Dashboard from "./components/dashboard/Dashboard";
import Items from "./components/items/Items";
import Navbar from "./components/layout/Navbar";
import SellItem from "./components/sell-item/SellItem";
import EditProfile from "./components/edit-profile/EditProfile";
import Card from "./components/buy-item/Card";
import NotFound from "./components/not-found/NotFound";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Rederict to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Route exact path="/items" component={Items} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />

              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />

              <PrivateRoute exact path="/sell-item" component={SellItem} />

              <PrivateRoute exact path="/card" component={Card} />

              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
