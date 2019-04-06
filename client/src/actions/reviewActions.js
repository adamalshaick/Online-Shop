import axios from "axios";

import { ADD_REVIEW, GET_REVIEWS, GET_ERRORS } from "./types";

// Add Review
export const addReview = reviewData => dispatch => {
  axios
    .post(`/api/reviews/${reviewData.id}`, reviewData)
    .then(res => {
      dispatch({
        type: ADD_REVIEW,
        payload: res.data
      });
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get Reviews
export const getReviews = () => dispatch => {
  axios
    .get("/api/reviews")
    .then(res =>
      dispatch({
        type: GET_REVIEWS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_REVIEWS,
        payload: null
      })
    );
};
