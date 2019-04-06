import React from "react";
import PropTypes from "prop-types";
import ProfileContent from "./ProfileContent";
import Reviews from "../reviews/Reviews";
import fetchUserById from "../common/hoc/fetchUserById";
import { SecondaryHeader } from "../common/styles/Header";

export const Profile = ({ user }) => {
  return (
    <div className="entry container mt-md-5">
      <div className="row">
        <section className="col-6">
          <SecondaryHeader className="text-center">
            Profile Info <hr />
          </SecondaryHeader>
          <ProfileContent user={user.user} />
        </section>
        <section className="col-6">
          <SecondaryHeader className="text-center">
            Reviews <hr />
          </SecondaryHeader>
          <Reviews user={user.user} />
        </section>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default fetchUserById(Profile);
