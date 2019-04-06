import React from "react";
import PropTypes from "prop-types";
import { CardContent, Card, Typography } from "@material-ui/core";

const displayStars = review => {
  const stars = [];
  for (let i = 0; i < review.rate; i++) {
    stars.push(<i style={{ color: "gold" }} className="fas fa-star" />);
  }
  return stars;
};

export const Review = ({ review }) => {
  return (
    <div className="col-md-6 mt-3 entry">
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            rate: <span>{displayStars(review)}</span>
          </Typography>
          <Typography color="textSecondary">
            name: <strong>{review.buyer}</strong>
          </Typography>
          <Typography color="textSecondary">
            review: <strong>{review.text}</strong>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
