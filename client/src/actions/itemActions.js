import axios from "axios";

import {
  ADD_ITEM,
  GET_ERRORS,
  GET_ITEMS,
  GET_ITEM,
  DELETE_ITEM,
  ITEM_LOADING,
  ADDTOCARD_ITEM,
  GET_CARD
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
    .get(`/api/items/${id}`)
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

// Get items from a card
export const getItemsFromCard = () => dispatch => {
  axios
    .get("/api/card")
    .then(res => {
      dispatch({
        type: GET_CARD,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CARD,
        payload: null
      });
    });
};

// Add Item to the card
export const addItemToCard = itemData => dispatch => {
  axios
    .post("/api/card", itemData)
    .then(res => dispatch(getItemsFromCard()))
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
