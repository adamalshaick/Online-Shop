import axios from "axios";

import { ADD_ITEM, GET_ERRORS, GET_ITEMS, DELETE_ITEM } from "./types";

// Add Item
export const addItem = (itemData, history) => dispatch => {
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
