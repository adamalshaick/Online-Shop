import React from "react";
import PropTypes from "prop-types";
import Review from "./Review";
import fetchReviews from "../common/hoc/fetchReviews";

const Reviews = ({ user, review }) => {
  let reviewItems;
  if (review.reviews.length > 0) {
    const usersReview = review.reviews.filter(
      review => review.seller === user._id
    );
    if (usersReview.length > 0) {
      reviewItems = usersReview.map(review => (
        <Review key={review._id} review={review} />
      ));
    } else {
      reviewItems = (
        <div className="text-center col-12">
          <p>
            <i>You don't have any reviews yet</i>
          </p>
        </div>
      );
    }
  } else {
    reviewItems = (
      <div className="text-center">
        <p>
          <i>User has no reviews yet</i>
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">{reviewItems}</div>
    </div>
  );
};

Reviews.propTypes = {
  review: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default fetchReviews(Reviews);
