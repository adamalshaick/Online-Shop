import { GET_CART, CART_LOADING, ADD_ITEM_TO_CART } from "../actions/types";

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false
      };

    case CART_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
