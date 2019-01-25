import axios from "axios";

import {
  ADD_ITEM,
  GET_ERRORS,
  GET_ITEMS,
  GET_ITEM,
  DELETE_ITEM,
  ITEM_LOADING,
  GET_CART,
  CART_LOADING,
  ADD_ITEM_TO_CART
} from "./types";

// Add Item
export const addItem = itemData => dispatch => {
  axios
    .post("/api/items", itemData)
    .then(res => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get Items
export const getItems = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get("/api/items")
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ITEMS,
        payload: null
      });
    });
};

// Get Item by id
export const getItem = id => dispatch => {
  dispatch(setItemLoading());
  axios
    .get("/api/items/item", id)
    .then(res => {
      dispatch({
        type: GET_ITEM,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ITEM,
        payload: null
      });
    });
};

// Delete Item
export const deleteItem = id => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

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

// Set loading state
export const setItemLoading = () => {
  return {
    type: ITEM_LOADING
  };
};

export const setCartLoading = () => {
  return {
    type: CART_LOADING
  };
};
