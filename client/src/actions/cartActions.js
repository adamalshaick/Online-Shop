import axios from "axios";
import {
  GET_CART,
  CART_LOADING,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_ERRORS
} from "./types";

// Get items from cart
export const getItemsFromCart = () => dispatch => {
  dispatch(setCartLoading());
  axios
    .get("/api/cart")
    .then(res => {
      dispatch({
        type: GET_CART,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CART,
        payload: null
      });
    });
};

// Add Item to the cart
export const addItemToCart = itemId => dispatch => {
  axios
    .post("/api/cart", itemId)
    .then(res => {
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: res.data
      });
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
  axios
    .delete(`/api/cart/${id}`)
    .then(res => {
      dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: id
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCartLoading = () => {
  return {
    type: CART_LOADING
  };
};