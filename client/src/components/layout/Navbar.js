import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { StyledNavbar, List, ListElement } from "../common/styles/Navbar";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <List>
        <ListElement>
          <Link style={{ color: "black" }} className="link" to="/items">
            BROWSE ITEMS
          </Link>
        </ListElement>
        <ListElement>
          <Link style={{ color: "black" }} to="/dashboard">
            DASHBOARD
          </Link>
        </ListElement>
        <ListElement>
          <Link style={{ color: "black" }} to="/cart">
            CART
            <i className="ml-2 fas fa-shopping-cart" />
          </Link>
        </ListElement>
        <ListElement>
          <Link
            style={{ color: "black" }}
            to="/"
            onClick={this.onLogoutClick.bind(this)}
          >
            LOGOUT
          </Link>
        </ListElement>
      </List>
    );

    const guestLinks = (
      <List>
        <ListElement>
          <Link style={{ color: "black" }} className="link" to="/login">
            LOGIN
          </Link>
        </ListElement>
        <ListElement>
          <Link style={{ color: "black" }} to="/register">
            SIGN UP
          </Link>
        </ListElement>
      </List>
    );

    return (
      <StyledNavbar className="text-center">
        {isAuthenticated ? authLinks : guestLinks}
      </StyledNavbar>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
