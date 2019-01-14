import { GET_CARD } from "../actions/types";

const initialState = {
  cardItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD:
      return {
        ...state,
        cardItems: action.payload
      };
    default:
      return state;
  }
}
