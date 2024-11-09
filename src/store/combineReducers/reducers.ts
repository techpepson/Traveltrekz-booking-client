import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/auth.reducer";
import { errorReducer } from "../reducers/errors.reducer";

//auth reducers combined
export const authReducers = combineReducers({
  register: authReducer.reducer,
});

//error reducers combined
export const errorReducers = combineReducers({
  error: errorReducer.reducer,
});
