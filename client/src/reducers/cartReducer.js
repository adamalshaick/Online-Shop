import { GET_CART } from "../actions/types";

const initialState = {
  cart: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
