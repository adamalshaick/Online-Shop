import { GET_REVIEWS, ADD_REVIEW, REVIEW_LOADING } from "../actions/types";

const initialState = {
  reviews: [],
  successFlag: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REVIEW_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        loading: false
      };

    case ADD_REVIEW:
      return {
        ...state,
        successFlag: true,
        reviews: [action.payload, ...state.reviews]
      };

    default:
      return state;
  }
}
