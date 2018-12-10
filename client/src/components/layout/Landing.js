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
      <div className="landing-page">
        <div className="landing-image" />
        <div className=" text-center">
          <h1 className="display-1 text-white d-inline mt-5">
            <strong>Online Shop</strong>
          </h1>

          <p className="lead mt-5">Sell, buy, talk - all in one place</p>
          <Link to="/login" className="btn btn-info">
            Login
          </Link>
          <p className="lead mt-5">Don't have an account yet?</p>
          <Link to="/register" className="btn btn-info">
            Sign up
          </Link>
        </div>
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
