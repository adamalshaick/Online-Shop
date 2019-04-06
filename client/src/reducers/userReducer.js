import {
  GET_USER,
  GET_CURRENT_USER,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from "../actions/types";

const initialState = {
  currentUser: null,
  user: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };

    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.user.currentUser.cart]
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.user.currentUser.cart.filter(
          item => item._id !== action.payload
        )
      };

    default:
      return state;
  }
}
