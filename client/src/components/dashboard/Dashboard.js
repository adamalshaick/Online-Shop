import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import { addReview } from "../../actions/reviewActions";
import isEmpty from "../../validation/is-empty";
import Loading from "../common/Loading";
import ReviewForm from "../reviews/ReviewForm";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviewInput: false,
      text: "",
      rate: "",
      errors: {}
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  onClickRev = () => {
    this.state.showReviewInput
      ? this.setState({ showReviewInput: false })
      : this.setState({ showReviewInput: true });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = userId => e => {
    e.preventDefault();

    const reviewData = {
      text: this.state.text,
      rate: this.state.rate,
      id: userId
    };

    this.props.addReview(reviewData);
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Loading />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="entry">
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
                  <div className="mt-3">
                    <strong>{user.name}</strong>
                  </div>

                  {isEmpty(profile.bio) ? (
                    <div className="mt-3 text-muted">
                      <i>User doesn't have a bio yet</i>
                    </div>
                  ) : (
                    <div className="mt-3">{profile.bio}</div>
                  )}
                </div>
                <div className="row">
                  <div className="col-lg-6 mt-5">
                    <div className="mt-4">
                      <strong>Rating average: 5/5</strong>
                      <div>
                        <img
                          style={{ width: "25px" }}
                          src="./assets/icons/star.svg"
                        />
                        <img
                          style={{ width: "25px" }}
                          src="./assets/icons/star.svg"
                        />
                        <img
                          style={{ width: "25px" }}
                          src="./assets/icons/star.svg"
                        />
                        <img
                          style={{ width: "25px" }}
                          src="./assets/icons/star.svg"
                        />
                        <img
                          style={{ width: "25px" }}
                          src="./assets/icons/star.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Link
                      to="/:handle/reviews"
                      style={{ border: "lightgray solid 1px", width: "100%" }}
                      className="btn btn-light btn-lg mt-5"
                    >
                      Show reviews
                    </Link>
                    <button
                      style={{ border: "lightgray solid 1px", width: "100%" }}
                      className="btn btn-light btn-lg mt-2"
                      onClick={this.onClickRev}
                    >
                      Write a review
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center mt-5 mt-md-0">
                <Link
                  to="/sell-item"
                  style={{ border: "lightgray solid 1px", width: "100%" }}
                  className="btn btn-light btn-lg"
                >
                  Add your item for sale
                </Link>
                <span className="text-muted">Sell your item</span>
                <hr />
                <Link
                  to="/items"
                  style={{ border: "lightgray solid 1px", width: "100%" }}
                  className="btn btn-light btn-lg"
                >
                  Browse items
                </Link>
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
        return <Redirect to="/create-profile" />;
      }
    }
    return (
      <>
        {dashboardContent}
        {this.state.showReviewInput ? (
          <ReviewForm
            onClickRev={this.onClickRev}
            text={this.state.text}
            rate={this.state.rate}
            errors={errors}
            onChange={this.onChange}
            onSubmit={this.onSubmit(user.id)}
          />
        ) : null}
      </>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, addReview, deleteAccount }
)(Dashboard);
