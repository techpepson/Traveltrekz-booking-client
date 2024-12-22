import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/auth.reducer";
import { errorReducer } from "../reducers/errors.reducer";
import { loginReducer } from "../reducers/login.auth.reducer";
import { hostAccountDetailsReducer } from "../reducers/account-details";
import { guestAccountSlice } from "../reducers/guestAccountAdd.reducer";
import { addProperty } from "../reducers/addProperties.reducer";
import { pendingPropertiesFetch } from "../reducers/fetchHostPendingProperties";

//auth reducers combined
export const authReducers = combineReducers({
  register: authReducer.reducer,
  login: loginReducer.reducer,
});

//error reducers combined
export const errorReducers = combineReducers({
  error: errorReducer.reducer,
});

export const accountDetailsReducers = combineReducers({
  addHostDetails: hostAccountDetailsReducer.reducer,
  addGuestDetails: guestAccountSlice.reducer,
});

export const propertiesReducers = combineReducers({
  addProperty: addProperty.reducer,
  fetchPendingProperties: pendingPropertiesFetch.reducer,
});
