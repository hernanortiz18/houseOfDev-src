import { createAction, createReducer } from "@reduxjs/toolkit";
import { getProperties } from "../utils/index";

export const setProperties = createAction("SET_PROPERTIES");

const initialState = [];

export const propertiesReducer = createReducer(initialState, {
  [setProperties]: (state, action) => {
    const properties = getProperties();
    return properties;
  },
});
