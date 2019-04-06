import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import Navbar from "../layout/Navbar";
import InputGroup from "../common/InputGroup";
import handleInputErrors from "../common/hoc/handleInputErrors";
import redirectAuthenticated from "../common/hoc/redirectAuthenticated";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      bio: "",
      location: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      location: this.state.location,
      bio: this.state.bio
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.props;
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-1 col-lg-2" />
            <div className="col-md-10 col-lg-8 card mt-5 text-center p-0 entry">
              <div className="card-body p-5">
                <h3 className="mb-5">Sign up</h3>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <InputGroup
                          id="name"
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}
                          error={errors.name}
                        />
                      </div>
                      <div className="mb-4">
                        <InputGroup
                          id="email"
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                        />
                      </div>
                      <div className="mb-4">
                        <InputGroup
                          id="password"
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                        />
                      </div>
                      <InputGroup
                        id="password2"
                        placeholder="Confirm Password"
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <InputGroup
                          id="location"
                          placeholder="Location"
                          name="location"
                          value={this.state.location}
                          onChange={this.onChange}
                          error={errors.location}
                        />
                      </div>
                      <TextFieldGroup
                        id="bio"
                        placeholder="Bio"
                        name="bio"
                        value={this.state.bio}
                        onChange={this.onChange}
                        error={errors.bio}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-dark btn-block mt-4">
                    Create Account
                  </button>
                </form>
              </div>
              <div className="text-muted card-footer mt-3">
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  null,
  { registerUser }
)(redirectAuthenticated(handleInputErrors(Register)));
