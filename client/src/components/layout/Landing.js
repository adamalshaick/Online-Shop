import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  handleDrop = () => {};

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
          <h1 className="display-1 text-white d-block mt-5">
            <strong>Online Shop</strong>
          </h1>
          <Link to="/login" className="btn btn-dark btn-lg m-5">
            Login
          </Link>

          <Link to="/register" className="btn btn-dark btn-lg m-5">
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
