import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addReview } from "../../actions/reviewActions";
import PropTypes from "prop-types";

const Header = styled.header`
  width: 100%;
  background-color: whitesmoke;
  height: 60px;
  border: solid lightgrey 1px;
  margin-bottom: 20px;
  margin-top: 50px;
  padding: 16px;
  font-size: 18px;
`;

class ProfileContent extends Component {
  render() {
    const { auth, profile } = this.props;
    return (
      <div className="entry">
        <Header className="text-center">
          {auth.user.id === profile.user._id ? (
            <strong>Your Dashboard</strong>
          ) : (
            <strong>{profile.handle}'s Profile</strong>
          )}
        </Header>
      </div>
    );
  }
}

ProfileContent.PropTypes = {
  //   addReview: PropTypes.func.isRequired,
  //   auth: PropTypes.object.isRequired,
  //   errors: PropTypes.object.isRequired,
  //   profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addReview }
)(ProfileContent);
