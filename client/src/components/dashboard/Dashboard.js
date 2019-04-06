import React from "react";
import PropTypes from "prop-types";
import { ButtonLink } from "../common/styles/Button";
import fetchCurrentUser from "../common/hoc/fetchCurrentUser";
import ProfileContent from "../profile/ProfileContent";
import Reviews from "../reviews/Reviews";
import { SecondaryHeader } from "../common/styles/Header";

export const Dashboard = ({ user }) => {
  return (
    <div className="container entry text-center">
      <div className="row mt-5">
        <div className="col-md-6">
          <SecondaryHeader>
            Your Profile <hr />
          </SecondaryHeader>
          <ProfileContent user={user.currentUser} />
          <SecondaryHeader className="mt-3">
            Actions <hr />
          </SecondaryHeader>
          <div className="mt-3">
            <ButtonLink to="/sell-item" className="btn btn-light btn-lg">
              Add your item for sale
            </ButtonLink>
            <span className="text-muted">Sell your item</span>
            <hr />
            <ButtonLink to="/items" className="btn btn-light btn-lg">
              Browse items
            </ButtonLink>
            <span className="text-muted">Browse items for sale</span>
            <hr />
          </div>
        </div>
        <div className="col-md-6">
          <SecondaryHeader>Reviews</SecondaryHeader> <hr />
          <Reviews user={user.currentUser} />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

export default fetchCurrentUser(Dashboard);
