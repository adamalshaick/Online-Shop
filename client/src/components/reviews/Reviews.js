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
    const { auth, currentProfile } = this.props;
    let reviewItems;

    if (reviews === null || loading) {
      reviewItems = <Loading />;
    } else {
      if (reviews.length > 0) {
        reviewItems = reviews.reduce((reviewItems, review) => {
          if (review.seller === currentProfile.user._id) {
            reviewItems.push(<Review key={review._id} review={review} />);
          }
          if (reviewItems.length === 0) {
            reviewItems = <div>No reviews found</div>;
          }
          return reviewItems;
        }, []);
      } else {
        reviewItems = <div>No reviews found</div>;
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
  review: state.review,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getReviews }
)(Reviews);
