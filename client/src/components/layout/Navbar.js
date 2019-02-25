import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import styled from "styled-components";

const StyledNavbar = styled.header`
  width: 100%;
  height: 6rem;
  box-shadow: 0px 8px 20px 0px rgba(204, 204, 204, 0.7);
  background-color: white;
  display: flex;
`;

const List = styled.ul`
  display: flex;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  margin-top: 1.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
`;

const ListElement = styled.li`
  color: black;
  margin: 0 4rem 4rem 0;
  list-style: none;
`;

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <List>
        <ListElement>
          <Link style={{ color: "black" }} className="link" to="/items">
            Browse Items
          </Link>
        </ListElement>
        <ListElement>
          <Link style={{ color: "black" }} to="/dashboard">
            Dashboard
          </Link>
        </ListElement>
        <ListElement>
          <Link style={{ color: "black" }} to="/cart">
            Cart
            <i className="ml-2 fas fa-shopping-cart" />
          </Link>
        </ListElement>
        <ListElement>
          <Link
            style={{ color: "black" }}
            to="/"
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: "35px", marginLeft: "5px" }}
            />
          </Link>
        </ListElement>
      </List>
    );

    const guestLinks = (
      <List>
        <ListElement>
          <Link style={{ color: "black" }} className="link" to="/login">
            Login
          </Link>
        </ListElement>
        <ListElement>
          <Link style={{ color: "black" }} to="/register">
            Sign Up
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
