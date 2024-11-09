import { configureStore } from "@reduxjs/toolkit";
import { authReducers, errorReducers } from "../combineReducers/reducers";

export const store = configureStore({
  reducer: {
    authReducer: authReducers,
    errorReducer: errorReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
