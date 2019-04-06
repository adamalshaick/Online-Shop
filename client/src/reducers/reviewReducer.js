import { GET_REVIEWS, ADD_REVIEW } from "../actions/types";

const initialState = {
  reviews: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        loading: false
      };

    case ADD_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews]
      };

    default:
      return state;
  }
}
