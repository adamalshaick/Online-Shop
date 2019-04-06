import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import InputGroup from "../common/InputGroup";
import handleInputErrors from "../common/hoc/handleInputErrors";
import redirectAuthenticated from "../common/hoc/redirectAuthenticated";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.props;

    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row mt-md-5">
            <div className="col-md-2 col-lg-3" />
            <section className="col-md-8 col-lg-6 card mt-md-5 text-center p-0 entry">
              <div className="card-body p-5">
                <h3 className="mb-5">Log in to your account</h3>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="mb-4">
                    <InputGroup
                      id="email"
                      placeholder="Email Adress"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>
                  <InputGroup
                    id="password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />

                  <button type="submit" className="btn btn-dark btn-block mt-4">
                    Log In
                  </button>
                </form>
              </div>
              <div className="text-muted card-footer mt-3">
                Don't have an account yet? <Link to="/register">Sign Up</Link>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  null,
  { loginUser }
)(redirectAuthenticated(handleInputErrors(Login)));
