import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div>
        LandingPage
        <Link className="btn btn-lg" to="/login">
          Login
        </Link>
        <Link className="btn btn-lg" to="/register">
          Sign Up
        </Link>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
