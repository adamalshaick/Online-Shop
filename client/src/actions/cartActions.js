import axios from "axios";
import { GET_ERRORS } from "./types";
import { getCurrentUser } from "./userActions";

// Add Item to the cart
export const addItemToCart = itemId => dispatch => {
  axios
    .post(`/api/cart/${itemId}`)
    .then(res => {
      dispatch(getCurrentUser());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Item from cart
export const removeItemFromCart = id => dispatch => {
  console.log(id);
  axios
    .delete(`/api/cart/${id}`)
    .then(res => {
      dispatch(getCurrentUser());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
