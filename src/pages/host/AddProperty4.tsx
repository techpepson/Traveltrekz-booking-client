import React, { useState } from "react";
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import StepIndicator from "../../components/host/StepIndicator";
import { Link } from "react-router-dom";
import Apartment from "../../assets/host/apartment.png";
import Flat from "../../assets/host/flat.png";
import Room from "../../assets/host/room.png";
import Villa from "../../assets/host/villa.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/config/store.config";
import {
  updatePropertyAmenities,
  updateRoomType,
} from "../../store/reducers/addProperties.reducer";

const defaultAccessories = [
  { id: 1, name: "Television", image: Apartment },
  { id: 2, name: "Wifi", image: Flat },
  { id: 3, name: "Washer", image: Room },
  { id: 4, name: "Balcony", image: Villa },
];

const defaultSafety = [
  { id: 1, name: "Fire Extinguisher", image: Apartment },
  { id: 2, name: "First Aid Kit", image: Flat },
  { id: 3, name: "Smoke Detector", image: Room },
  { id: 4, name: "Balcony Guardrails", image: Villa },
];

const AddProperty4: React.FC = () => {
  const steps = [
    { name: "Property Type", path: "/host/add-property-1" },
    { name: "Description", path: "/host/add-property-2" },
    { name: "Uploads", path: "/host/add-property-3" },
    { name: "Amenities", path: "/host/add-property-4" },
    { name: "Completed", path: "/host/add-property-5" },
  ];

  const dispatch = useDispatch<AppDispatch>();

  const handleRoomTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateRoomType(e.target.value));
    console.log(roomType);
  };

  const { propertyAmenities, roomType } = useSelector(
    (store: RootState) => store.properties.addProperty
  );
  // Local state for amenities
  const [selectedAmenities, setSelectedAmenities] = useState<string[] | null>(
    null
  );
  const [customAmenity, setCustomAmenity] = useState("");

  // Handle selecting or deselecting an amenity
  const toggleAmenity = (name: string) => {
    setSelectedAmenities((prev) => {
      const updatedAmenities =
        prev && prev.includes(name)
          ? prev.filter((amenity) => amenity !== name)
          : [...(prev || []), name];

      // Dispatch updated amenities to Redux
      dispatch(updatePropertyAmenities(updatedAmenities));

      // Log the updated array
      console.log(updatedAmenities);

      return updatedAmenities; // Ensure state reflects the changes
    });
  };

  const addCustomAmenity = () => {
    if (customAmenity && !selectedAmenities?.includes(customAmenity)) {
      setSelectedAmenities((prev) => {
        const updatedAmenities = [...(prev || []), customAmenity];

        // Dispatch updated amenities to Redux
        dispatch(updatePropertyAmenities(updatedAmenities));

        // Log the updated array
        console.log(updatedAmenities);

        return updatedAmenities; // Ensure state reflects the changes
      });

      setCustomAmenity(""); // Clear the input field
    }
  };

  // Render amenities dynamically
  const renderAmenities = (
    items: { id: number; name: string; image: string }[]
  ) =>
    items.map((item) => (
      <div
        key={item.id}
        className={`flex gap-4 items-center bg-header-200 rounded-2xl cursor-pointer ${
          selectedAmenities?.includes(item.name) ? "bg-blue-200" : ""
        }`}
        onClick={() => toggleAmenity(item.name)}
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full object-fit w-24 rounded-l-2xl"
        />
        <p className="font-semibold">{item.name}</p>
      </div>
    ));

  return (
    <div>
      <NavbarHost />
      <div className="p-16 flex items-center justify-center">
        <StepIndicator steps={steps} currentStep={3} />
      </div>
      <div className="md:px-16 px-8 flex flex-col gap-8 overflow-hidden">
        <h1 className="text-4xl font-bold text-header-600 md:w-[45%]">
          Add amenities available at your place.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 md:h-[100px] gap-4">
          {renderAmenities(defaultAccessories)}
        </div>
      </div>
      <div className="mt-10 md:px-16 px-8 flex flex-col gap-8 overflow-hidden">
        <h1 className="text-4xl font-bold text-header-600 md:w-[45%]">
          Add safety measures at your place.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 md:h-[100px] gap-4">
          {renderAmenities(defaultSafety)}
        </div>
      </div>

      {/* Custom Amenity Input */}
      <div className="md:px-16 px-8 flex flex-col gap-8 overflow-hidden py-8">
        <h1 className="text-2xl font-bold text-header-600">
          Add Custom Amenity
        </h1>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={customAmenity}
            onChange={(e) => setCustomAmenity(e.target.value)}
            placeholder="Enter custom amenity"
            className="border rounded-lg p-2 w-full max-w-md"
          />
          <button
            onClick={addCustomAmenity}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Room Type Input */}
        <div className="mt-10 md:px-16 px-8 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-header-600">
            Select Room Type
          </h1>
          <select
            name="roomType"
            value={roomType}
            onChange={handleRoomTypeChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Room Type</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Suite">Suite</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        <div className="flex gap-2 flex-wrap">
          {selectedAmenities?.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center bg-header-200 rounded-lg px-4 py-2 gap-2"
            >
              <span>{amenity}</span>
              <button
                onClick={() => toggleAmenity(amenity)}
                className="text-red-600 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between px-4 md:px-16 pb-20">
        <div className="flex gap-4 items-center">
          <Link
            to="/host/add-property-5"
            className="bg-blue-600 text-white py-2 px-8 rounded-full max-md:text-sm"
          >
            Next
          </Link>
          <Link
            to="/host/add-property-3"
            className="bg-blue-600 text-white py-2 px-8 rounded-full max-md:text-sm"
          >
            Back
          </Link>
        </div>
        <button className="bg-header-600 text-white py-2 px-8 rounded-full max-md:text-sm">
          Cancel
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddProperty4;
