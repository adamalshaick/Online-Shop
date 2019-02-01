import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    const { errors } = this.state;

    return (
      <>
        <div className="row mt-5">
          <div className="col-md-2 col-lg-3" />
          <div className="col-md-8 col-lg-6 card mt-5 text-center p-0 entry">
            <div className="card-body p-5">
              <h3 className="mb-5">Log in to your account</h3>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  id="#email"
                  placeholder="Email Adress"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  id="email"
                />

                <TextFieldGroup
                  id="#password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                  id="password"
                />

                <button type="submit" className="btn btn-dark btn-block mt-4">
                  Log In
                </button>
              </form>
            </div>
            <div className="text-muted card-footer mt-3">
              Don't have an account yet? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
