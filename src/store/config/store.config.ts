import { configureStore } from "@reduxjs/toolkit";
import {
  accountDetailsReducers,
  authReducers,
  errorReducers,
  propertiesReducers,
} from "../combineReducers/reducers";
import {} from "../reducers/account-details";
export const store = configureStore({
  reducer: {
    authReducer: authReducers,
    errorReducer: errorReducers,
    accountDetails: accountDetailsReducers,
    properties: propertiesReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
