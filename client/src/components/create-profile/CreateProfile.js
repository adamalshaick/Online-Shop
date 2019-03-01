import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { createProfile } from "../../actions/profileActions";
import Navbar from "../layout/Navbar";

export class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      location: "",
      bio: "",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      bio: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <Navbar />
        <div className="create-profile entry mt-5 container">
          <div className="row">
            <div
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                padding: "2rem"
              }}
              className="col-md-8 m-auto"
            >
              <h1 style={{ fontSize: "1.7rem" }} className="mb-4 text-center">
                Create Your Profile
              </h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  id="handle"
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="Your username"
                />

                <TextFieldGroup
                  id="location"
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Your Location"
                />

                <TextAreaFieldGroup
                  id="bio"
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-dark float-right mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(CreateProfile);
