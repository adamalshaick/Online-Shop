import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import ProfileActions from "./ProfileActions";

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
            <h1 className="mt-5">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </h1>

            <div className="row mt-5">
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
            </div>

            <div className="float-right mt-5">
              <button
                onClick={this.onDeleteClick.bind(this)}
                className="btn btn-danger"
              >
                Delete My Account
              </button>
            </div>

            <div className=" mt-5 mr-3 float-right">
              <Link to="/edit-profile" className="btn btn-dark">
                <i className="fas fa-user-circle text-light mr-1" /> Edit My
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
