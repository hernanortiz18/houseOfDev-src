import { configureStore } from "@reduxjs/toolkit";
import { propertiesReducer } from "./properties";

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});

export default store;
