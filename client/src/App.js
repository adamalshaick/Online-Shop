import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import handleAuth from "./utils/handleAuth";
import SecondaryLoading from "./components/common/SecondaryLoading";
import Navbar from "./components/layout/Navbar";
const Landing = lazy(() => import("./components/layout/Landing"));
const Register = lazy(() => import("./components/auth/Register"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Login = lazy(() => import("./components/auth/Login"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Items = lazy(() => import("./components/items/Items"));
const SellItem = lazy(() => import("./components/sell-item/SellItem"));
const Cart = lazy(() => import("./components/cart/Cart"));
const NotFound = lazy(() => import("./components/not-found/NotFound"));

const App = () => {
  handleAuth();
  return (
    <Router>
      <Suspense
        fallback={
          <>
            <Navbar />
            <SecondaryLoading />
          </>
        }
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/items" component={Items} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/sell-item" component={SellItem} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
