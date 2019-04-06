import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { StyledNavbar, List, ListElement } from "../common/styles/Navbar";

const onLogoutClick = logoutUser => e => {
  e.preventDefault();
  logoutUser();
};

export const Navbar = ({ auth, logoutUser }) => {
  const authLinks = (
    <List>
      <ListElement>
        <Link style={{ color: "black" }} to="/items" id="itemsLink">
          BROWSE ITEMS
        </Link>
      </ListElement>
      <ListElement>
        <Link style={{ color: "black" }} to="/dashboard" id="dashboardLink">
          DASHBOARD
        </Link>
      </ListElement>
      <ListElement>
        <Link style={{ color: "black" }} to="/cart" id="cartLink">
          CART
          <i className="ml-2 fas fa-shopping-cart" />
        </Link>
      </ListElement>
      <ListElement>
        <Link
          style={{ color: "black" }}
          to="/"
          onClick={onLogoutClick(logoutUser)}
          id="logoutLink"
        >
          LOGOUT
        </Link>
      </ListElement>
    </List>
  );

  const guestLinks = (
    <List>
      <ListElement>
        <Link
          style={{ color: "black" }}
          className="link"
          to="/login"
          id="loginLink"
        >
          LOGIN
        </Link>
      </ListElement>
      <ListElement>
        <Link style={{ color: "black" }} to="/register" id="registerLink">
          SIGN UP
        </Link>
      </ListElement>
    </List>
  );
  return (
    <StyledNavbar className="text-center">
      {auth.isAuthenticated ? authLinks : guestLinks}
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
