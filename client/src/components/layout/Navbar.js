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
  color: white;
  display: flex;
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
      <ul
        style={{
          display: "flex",
          position: "absolute",
          right: "50%",
          transform: "translateX(50%)",
          marginTop: "2.3rem",
          fontSize: "1.2rem"
        }}
      >
        <li>
          <Link style={{ color: "black" }} to="/items">
            Browse Items
          </Link>
        </li>
        <li>
          <Link style={{ color: "black" }} to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link style={{ color: "black" }} to="/cart">
            Cart
            <i className="ml-2 fas fa-shopping-cart" />
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "black" }}
            to="/"
            onClick={this.onLogoutClick.bind(this)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
            />
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link btn btn-danger text-white mr-2" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link btn btn-danger text-white" to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <StyledNavbar className="text-center">
        {isAuthenticated ? authLinks : guestLinks}
      </StyledNavbar>
      // <ul style={{ display: "flex" }}>
      //   <li>
      //     <Link to="/items">JD</Link>
      //   </li>
      //   <li>
      //     <Link to="/items">JD</Link>
      //   </li>
      // </ul>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
