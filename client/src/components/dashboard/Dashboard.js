import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import ProfileActions from "./ProfileActions";
import isEmpty from "../../validation/is-empty";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <p>Loading...</p>;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <div
              className="text-center"
              style={{
                width: "100%",
                backgroundColor: "whitesmoke",
                height: "60px",
                border: "solid lightgrey 1px",
                marginBottom: "20px",
                marginTop: "50px",
                padding: "16px",
                fontSize: "18px"
              }}
            >
              <strong>Your Dashboard</strong>
            </div>
            <div className="row mt-5">
              <div
                style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                className="col-md-6 text-center"
              >
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
                <div className="text-center">
                  <div className="mt-3">{user.name}</div>

                  {isEmpty(profile.bio) ? (
                    <div className="mt-3 text-muted">
                      <i>User doesn't have a bio yet</i>
                    </div>
                  ) : (
                    <div className="mt-3">{profile.bio}</div>
                  )}
                </div>
                {/* <div className="text-center">
              <div className="display-4 text-center">{profile.user.name}</div>
              <p className="lead text-center">
                {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              </p> */}
              </div>
              <div className="col-md-6 text-center">
                <button
                  style={{ border: "lightgray solid 1px", width: "100%" }}
                  type="button"
                  className="btn btn-light btn-lg"
                >
                  Add your item for sale
                </button>
                <span className="text-muted">Sell your item</span>
                <hr />
                <button
                  style={{ border: "lightgray solid 1px", width: "100%" }}
                  type="button"
                  className="btn btn-light btn-lg"
                >
                  Browse items
                </button>
                <span className="text-muted">Browse items for sale</span>
                <hr />
                <button
                  style={{ border: "lightgray solid 1px", width: "100%" }}
                  type="button"
                  className="btn btn-light btn-lg"
                >
                  Bought items
                </button>
                <span className="text-muted">
                  History of items that you've bought
                </span>
                <hr />
                <button
                  style={{ border: "lightgray solid 1px", width: "100%" }}
                  type="button"
                  className="btn btn-light btn-lg"
                >
                  Sold items
                </button>
                <span className="text-muted">
                  History of items that you've sold
                </span>
                <hr />
              </div>
            </div>
            {/* <div className="row mt-5">
              <div
                style={{ background: "white" }}
                className="col-md-5 mb-4 p-0 m-0 image-wrapper"
              >
                <Link to="/sell-item" className="link">
                  <img
                    style={{
                      maxWidth: "100%",
                      borderBottom: "black solid 1px",
                      borderRadius: "5px",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}
                    src="./assets/images/sell.jpg"
                  />
                  <div
                    style={{ width: "100%", fontWeight: "bold" }}
                    className="btn btn-dark"
                  >
                    Sell an item
                  </div>
                </Link>
              </div>

              <div className="col-md-2" />
              <div
                style={{ background: "white" }}
                className="col-md-5 mb-4 p-0 m-0 image-wrapper"
              >
                <Link to="/items" className="link">
                  <img
                    style={{
                      maxWidth: "100%",
                      borderBottom: "black solid 1px",
                      borderRadius: "5px",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}
                    src="./assets/images/buy.jpg"
                  />
                  <div
                    style={{ width: "100%", fontWeight: "bold" }}
                    className="btn btn-dark"
                  >
                    Buy an item
                  </div>
                </Link>
              </div>
            </div> */}

            <div className="float-right mt-5">
              <button
                onClick={this.onDeleteClick.bind(this)}
                className="btn btn-danger"
              >
                Delete Account
              </button>
            </div>

            <div className=" mt-5 mr-3 float-right">
              <Link to="/edit-profile" className="btn btn-dark">
                <i className="fas fa-user-circle text-light mr-1" /> Edit
                Profile
              </Link>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p> Welcome {user.name}</p>
            <p> Create a profile</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">{dashboardContent}</div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
