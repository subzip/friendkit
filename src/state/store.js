import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";

let reducers = combineReducers({ postReducer });

let store = configureStore({
  reducer: reducers,
});

export default store;
