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
            <h1>
              Welcome <Link to={"/profile/${profile.handle}"}>{user.name}</Link>
            </h1>
            <ProfileActions />

            <div className="row">
              <Link className="sell" to="/sell-item" className="col-md-6">
                JD
              </Link>
              <Link className="sell" to="/items" className="col-md-6">
                <img className="col-12" src="./assets/images/buy.jpg" />
              </Link>
            </div>

            <div style={{ marginBottom: "60px" }}>
              <button
                onClick={this.onDeleteClick.bind(this)}
                className="btn btn-danger"
              >
                Delete My Account
              </button>

              <Link to="/sell-item" className="btn  btn-info">
                Sell an item
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
          <div className="col-md-12">
            <p>Dashboard</p>
            {dashboardContent}
          </div>
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
