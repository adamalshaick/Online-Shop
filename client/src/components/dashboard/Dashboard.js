import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Loading from "../common/Loading";
import Navbar from "../layout/Navbar";
import { Header } from "../common/styles/Header";
import { ButtonLink } from "../common/styles/Button";
import ProfileContent from "../profile/ProfileContent";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick() {
    this.props.deleteAccount();
  }

  render() {
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Loading />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="entry">
            <Header>Your Dashboard</Header>
            <div className="row mt-5">
              <div
                style={{ borderRadius: "5px" }}
                className="col-md-6 text-center"
              >
                <ProfileContent profile={profile} auth={this.props.auth} />
              </div>
              <div className="col-md-6 text-center mt-5 mt-md-0">
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
        this.props.history.push("/create-profile");
      }
    }
    return (
      <>
        <Navbar />
        <div className="container">{dashboardContent}</div>
      </>
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
