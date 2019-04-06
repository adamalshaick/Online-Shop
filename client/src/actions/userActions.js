import React from "react";
import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  GET_ERRORS,
  GET_USER
} from "./types";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { logoutUser } from "./authActions";

export const getCurrentUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/users/current");
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: GET_CURRENT_USER,
        payload: null
      });
    }
  };
};

export const deleteAccount = () => {
  if (window.confirm("Are you sure? This can not be undone.")) {
    axios.delete("/api/users").then(res => dispatch => {
      dispatch(logoutUser());
    });
  }
};

export const getUserById = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/users/user/${id}`);
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: GET_USER,
        payload: null
      });
    }
  };
};
