import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import AddReview from "../reviews/AddReview";
import { ButtonLink } from "../common/styles/Button";

class ProfileContent extends Component {
  render() {
    const { profile, auth } = this.props;
    return (
      <>
        <div className="text-center">
          <img
            className="rounded-circle"
            // src={`../uploads/post_image/${profile.profileImage}`}
            src="../../uploads/post_image/placeholder.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <div className="mt-3">
            <strong>{profile.user.name}</strong>
          </div>
          {isEmpty(profile.location) ? (
            <div className="mt-3 text-muted">
              <i>User didn't specify his location yet</i>
            </div>
          ) : (
            <div className="mt-3">{profile.location}</div>
          )}
          {isEmpty(profile.bio) ? (
            <div className="mt-3 text-muted">
              <i>User doesn't have a bio yet</i>
            </div>
          ) : (
            <div className="mt-3">{profile.bio}</div>
          )}
        </div>
        {auth.user.id === profile.user._id ? (
          <ButtonLink
            className="btn btn-light btn-lg"
            to={`/profile/${profile.handle}`}
          >
            Show reviews
          </ButtonLink>
        ) : (
          <AddReview profile={profile} />
        )}
      </>
    );
  }
}

ProfileContent.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileContent;
