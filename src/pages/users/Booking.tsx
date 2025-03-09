import React, { useState } from "react";

// Import Booking Data
import {
  personalDetails,
  bookingInfo,
  bookingExtras,
} from "../../data/booking.data"; // Adjust the path as needed.

import { Button, Select, TextField } from "@radix-ui/themes";

const Booking: React.FC = () => {
  // State for tracking steps
  const [currentStep, setCurrentStep] = useState<number>(0);

  // **State for form data (Initialized using field names)**
  const [formData, setFormData] = useState<any>({
    personalDetails: {},
    bookingInfo: {},
    bookingExtras: [],
  });

  // Steps
  const steps = [
    "Personal Details",
    "Booking Info",
    "Extras",
    "Complete Booking",
  ];

  // Handle Next Step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle Previous Step
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // **Handle Input Change**
  const handleInputChange = (step: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev, // Spread the entire previous state
      [step]: {
        ...prev[step], // Spread the previous state for the specific step
        [field]: value, // Update only the specific field
      },
    }));
    console.log(value); // Debugging
  };

  // **Render Form Fields Dynamically**
  const renderFormFields = () => {
    switch (currentStep) {
      // **Step 1: Personal Details**
      case 0:
        return personalDetails.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.title}
            </label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.personalDetails[field.name] || ""}
              onChange={(e) =>
                handleInputChange("personalDetails", field.name, e.target.value)
              }
            />
          </div>
        ));

      // **Step 2: Booking Info**
      case 1:
        return bookingInfo.map((field) => (
          <div key={field.name} className="mb-4">
            {/* Date Inputs */}
            {field.title.includes("Expected") &&
            !field.title.includes("Arrival time") ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.title}
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-md"
                  value={formData.bookingInfo[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange("bookingInfo", field.name, e.target.value)
                  }
                />
              </div>
            ) : null}

            {/* TextField Inputs */}
            {!field.title.includes("Expected") &&
            !field.title.includes("Arrival time") ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.title}
                </label>
                <TextField.Root
                  name={field.name}
                  type="number"
                  placeholder={field.title}
                  value={formData.bookingInfo[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange("bookingInfo", field.name, e.target.value)
                  }
                />
              </div>
            ) : null}

            {/* Dropdown Select Input */}
            {field.title.includes("Arrival time") ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.title}
                </label>
                <Select.Root
                  defaultValue="morning"
                  value={formData.bookingInfo[field.name] || "morning"}
                  onValueChange={(value) =>
                    handleInputChange("bookingInfo", field.name, value)
                  }
                >
                  <Select.Trigger className="w-full p-2 border rounded-md" />
                  <Select.Content>
                    <Select.Item value="none">Cannot Tell</Select.Item>
                    <Select.Item value="morning">Morning</Select.Item>
                    <Select.Item value="afternoon">Afternoon</Select.Item>
                    <Select.Item value="midnight">Midnight</Select.Item>
                    <Select.Item value="nextDay">
                      Next Day After Booking
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
            ) : null}
          </div>
        ));

      // **Step 3: Booking Extras**
      case 2:
        return bookingExtras[0].extras.map((extra, index) => (
          <div key={index} className="flex items-start mb-4">
            <input
              type="checkbox"
              checked={formData.bookingExtras.includes(extra.title)}
              className="checkbox checkbox-md"
              onChange={(e) => {
                const updatedExtras = e.target.checked
                  ? [...formData.bookingExtras, extra.title]
                  : formData.bookingExtras.filter(
                      (item: string) => item !== extra.title
                    );

                setFormData((prev: any) => ({
                  ...prev,
                  bookingExtras: updatedExtras,
                }));
              }}
            />
            <label className="ml-2">
              <span className="font-medium">{extra.title}</span>
              <span className="block text-sm text-gray-500">{extra.desc}</span>
            </label>
          </div>
        ));

      // **Step 4: Completion**
      case 3:
        return (
          <div className="">
            <div>
              <h2 className="text-2xl font-bold text-green-500">
                Booking Summary
              </h2>
            </div>
            <p className="text-gray-700 mt-4">
              Thank you for booking with us. You'll receive a confirmation email
              shortly.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      {/* Steps Progress */}
      <ul className="steps steps-vertical lg:steps-horizontal mb-8">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${
              index <= currentStep ? "step-primary text-blue-500" : ""
            }`}
          >
            {step}
          </li>
        ))}
      </ul>

      {/* Form Content */}
      <div className="mb-8">{renderFormFields()}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button disabled={currentStep === 0} onClick={handlePrev}>
          Previous
        </Button>
        <Button
          disabled={currentStep === steps.length - 1}
          onClick={handleNext}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Booking;
