import React, { useState } from "react";
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import StepIndicator from "../../components/host/StepIndicator";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/config/store.config";
import {
  updatePropertyDescription,
  updatePropertyTitle,
  updatePropertyLocation,
  updateCurrency,
  updatePricingType,
  updateUnitPrice,
} from "../../store/reducers/addProperties.reducer";
import { dispatchFunction } from "../../logic/dispatch";

const AddProperty2: React.FC = () => {
  const steps = [
    { name: "Property Type", path: "/host/add-property-1" },
    { name: "Description", path: "/host/add-property-2" },
    { name: "Upload Documents", path: "/host/add-property-3" },
    { name: "Amenities", path: "/host/add-property-4" },
    { name: "Completed", path: "/host/add-property-5" },
  ];

  // Call the dispatch function from redux
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <NavbarHost />
      <div className="p-16 flex items-center justify-center">
        <StepIndicator steps={steps} currentStep={1} />
      </div>
      <div className="md:px-16 px-8 flex flex-col gap-8 overflow-hidden">
        <h1 className="text-4xl font-bold md:w-[50%] text-header-600">
          Add a short description of your place
        </h1>
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          <div className="bg-header-200 rounded-2xl py-6 px-10">
            <h1 className="text-xl text-header-600 font-semibold">
              Rental Unit
            </h1>
            <p>
              A rented place within a multi-unit residential building or
              complex.
            </p>
          </div>
          <div className="bg-header-200 rounded-2xl py-6 px-10">
            <h1 className="text-xl text-header-600 font-semibold">
              Shared Unit
            </h1>
            <p>
              A rented place within a multi-unit residential building or
              complex.
            </p>
          </div>
        </div>
      </div>
      <form className="md:p-16 p-8 pt-10 flex flex-col gap-4">
        <div>
          <label>Name of the property</label>
          <input
            name="propertyTitle"
            onChange={(e) => {
              dispatchFunction(dispatch, e.target.value, updatePropertyTitle);
            }}
            type="text"
            className="w-full p-1 border border-black/50 rounded-lg"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            onChange={(e) => {
              dispatchFunction(
                dispatch,
                e.target.value,
                updatePropertyDescription
              );
            }}
            rows={6}
            className="w-full p-1 border border-black/50 rounded-lg"
          />
        </div>
        <div>
          <label>Location</label>
          <input
            name="propertyLocation"
            onChange={(e) => {
              dispatchFunction(
                dispatch,
                e.target.value,
                updatePropertyLocation
              );
            }}
            type="text"
            className="w-full p-1 border border-black/50 rounded-lg"
          />
        </div>
        <div>
          <label>Unit Price</label>
          <input
            name="unitPrice"
            onChange={(e) => {
              dispatchFunction(dispatch, e.target.value, updateUnitPrice);
            }}
            type="text"
            className="w-full p-1 border border-black/50 rounded-lg"
          />
        </div>
        <div>
          <label>Currency</label>
          <input
            name="currency"
            onChange={(e) => {
              dispatchFunction(dispatch, e.target.value, updateCurrency);
            }}
            type="text"
            className="w-full p-1 border border-black/50 rounded-lg"
          />
        </div>
        {/* Pricing Type */}
        <div>
          <label>Pricing Type</label>
          <select
            name="pricingType"
            onChange={(e) => {
              dispatchFunction(dispatch, e.target.value, updatePricingType);
            }}
            className="w-full p-1 border border-black/50 rounded-lg"
          >
            <option value="" disabled>
              Select Pricing Type
            </option>
            <option value="Daily">Daily</option>
            <option value="Hourly">Hourly</option>
          </select>
        </div>
        <div className="flex items-center justify-between py-10">
          <div className="flex gap-4 items-center">
            <Link
              to="/host/add-property-3"
              className="bg-blue-600 text-white py-2 px-8 rounded-full max-md:text-sm"
            >
              Next
            </Link>
            <Link
              to="/host/add-property-1"
              className="bg-blue-600 text-white py-2 px-8 rounded-full max-md:text-sm"
            >
              Back
            </Link>
          </div>
          <button className="bg-header-600 text-white py-2 px-8 rounded-full max-md:text-sm">
            Cancel
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddProperty2;
