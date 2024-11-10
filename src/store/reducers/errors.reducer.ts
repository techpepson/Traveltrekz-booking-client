//reducer function for managing errors

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageInterface } from "../../interface/interface.exports";

const initialState: MessageInterface = {
  errorMessage: "",
  successMessage: "",
};

export const errorReducer = createSlice({
  name: "error/reducer",
  initialState,
  reducers: {
    updateErrorMessage: (
      state: MessageInterface,
      action: PayloadAction<string>
    ) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { updateErrorMessage } = errorReducer.actions;

export default errorReducer.reducer;
