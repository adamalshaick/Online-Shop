import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
