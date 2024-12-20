//add property reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropertyProps } from "../../interface/properties.interface";
import { AddPropertyThunk } from "../thunks/properties.thunks";

const initialState: PropertyProps = {
  propertyType: "",
  propertyLocation: "",
  propertyDescription: "",
  propertyImages: [""],
  propertyAmenities: [""],
  roomType: "",
  propertyTitle: "",
  pricingType: "",
  unitPrice: 0,
  currency: "",
  loading: false,
  error: false,
  success: false,
};

export const addProperty = createSlice({
  name: "add/property",
  initialState: initialState,
  reducers: {
    updatePropertyType: (state, action: PayloadAction<string>) => {
      state.propertyType = action.payload;
    },
    updatePropertyLocation: (state, action: PayloadAction<string>) => {
      state.propertyLocation = action.payload;
    },
    updatePropertyDescription: (state, action: PayloadAction<string>) => {
      state.propertyDescription = action.payload;
    },
    updatePropertyImages: (state, action: PayloadAction<string[]>) => {
      state.propertyImages = action.payload;
    },
    updatePropertyAmenities: (state, action: PayloadAction<string[]>) => {
      state.propertyAmenities = action.payload;
    },
    updateRoomType: (state, action: PayloadAction<string>) => {
      state.roomType = action.payload;
    },
    updatePropertyTitle: (state, action: PayloadAction<string>) => {
      state.propertyTitle = action.payload;
    },
    updatePricingType: (state, action: PayloadAction<string>) => {
      state.pricingType = action.payload;
    },
    updateUnitPrice: (state, action: PayloadAction<number>) => {
      state.unitPrice = action.payload;
    },
    updateCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddPropertyThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
      })
      .addCase(AddPropertyThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = false;
      })
      .addCase(AddPropertyThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      });
  },
});

export const {
  updatePropertyType,
  updateCurrency,
  updatePricingType,
  updatePropertyAmenities,
  updatePropertyDescription,
  updatePropertyImages,
  updatePropertyLocation,
  updatePropertyTitle,
  updateRoomType,
  updateUnitPrice,
} = addProperty.actions;

export default addProperty.reducer;
