import { GET_ITEM } from "../actions/types";

const initialState = {
  cartItem: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        cartItem: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
