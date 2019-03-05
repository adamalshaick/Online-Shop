import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../common/Loading";
import { getReviews } from "../../actions/reviewActions";
import Review from "./Review";

class Reviews extends Component {
  componentDidMount() {
    this.props.getReviews();
  }

  render() {
    const { reviews, loading } = this.props.review;
    const { currentProfile } = this.props;
    let reviewItems;

    if (reviews === null || loading) {
      reviewItems = <Loading />;
    } else {
      if (reviews.length > 0) {
        const usersReview = reviews.filter(
          review => review.seller === currentProfile.user._id
        );
        if (usersReview > 0) {
          reviewItems = usersReview.map(review => (
            <Review key={review._id} review={review} />
          ));
        } else {
          reviewItems = (
            <div className="text-center">
              <i>User has no reviews yet</i>
            </div>
          );
        }
      } else {
        reviewItems = (
          <div className="text-center">
            <i>User has no reviews yet</i>
          </div>
        );
      }
    }

    return (
      <div className="row">
        <div className="col-md-12">{reviewItems}</div>
      </div>
    );
  }
}

Reviews.propTypes = {
  getReviews: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  currentProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  review: state.review
});

export default connect(
  mapStateToProps,
  { getReviews }
)(Reviews);
