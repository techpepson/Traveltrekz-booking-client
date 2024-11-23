import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/auth.reducer";
import { errorReducer } from "../reducers/errors.reducer";
import { loginReducer } from "../reducers/login.auth.reducer";

//auth reducers combined
export const authReducers = combineReducers({
  register: authReducer.reducer,
  login: loginReducer.reducer,
});

//error reducers combined
export const errorReducers = combineReducers({
  error: errorReducer.reducer,
});
