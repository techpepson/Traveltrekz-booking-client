import React, { useEffect, useState } from "react";
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import StepIndicator from "../../components/host/StepIndicator";
import Congrats from "../../assets/host/congrats.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/config/store.config";
import { AddPropertyThunk } from "../../store/thunks/properties.thunks";
import { PropertyPayloadTypes } from "../../interface/properties.interface";
import { updateRoomType } from "../../store/reducers/addProperties.reducer";
import { setAuth } from "../../apis/api.config";
import { getCookie } from "../../utils/cookieGetFunction";

const AddProperty5: React.FC = () => {
  const steps = [
    { name: "Property Type", path: "/host/add-property-1" },
    { name: "Description", path: "/host/add-property-2" },
    { name: "Upload Documents", path: "/host/add-property-3" },
    { name: "Amenities", path: "/host/add-property-4" },
    { name: "Completed", path: "/host/add-property-5" },
  ];

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [cookie, setCookie] = useState<string>("");
  const handleCheckToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  // Selector function to retrieve the state
  const {
    propertyType,
    propertyLocation,
    propertyDescription,
    propertyImages,
    propertyAmenities,
    propertyTitle,
    pricingType,
    unitPrice,
    currency,
    loading,
    roomType,
  } = useSelector((store: RootState) => store.properties.addProperty);

  // Add property payload
  const propertyPayload: PropertyPayloadTypes = {
    propertyType,
    propertyLocation,
    propertyDescription,
    propertyImages,
    propertyAmenities,
    propertyTitle,
    pricingType,
    unitPrice,
    currency,
    roomType,
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchCookie = async () => {
      const cookie = await getCookie();
      setCookie(cookie.token);
      console.log(cookie);
    };
    fetchCookie();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    setAuth(cookie);
    dispatch(AddPropertyThunk(propertyPayload));
  };

  return (
    <div>
      <NavbarHost />
      <div className="p-16 flex items-center justify-center">
        <StepIndicator steps={steps} currentStep={4} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-10 flex flex-col-reverse">
        <div className="md:px-16 p-8 flex flex-col gap-8 overflow-hidden md:mt-10">
          <h1 className="text-4xl font-bold text-header-600">
            All Set And Done. Ready To Host Property?
          </h1>
          <p>
            Your property is now live on TravelTrekz. Sit back, relax, and let
            the bookings roll in. We’ll take care of the rest, from guest
            communication to secure payments, while you focus on welcoming your
            guests!
          </p>
          <div className="flex flex-col gap-4">
            {/* Checkbox for terms */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                onChange={handleCheckToggle}
              />
              <p>Accept all terms and conditions</p>
            </div>

            {/* Post Button */}
            <div className="text-white w-fit max-md:text-sm">
              {loading ? (
                <span className="loading loading-bars text-blue-500"></span>
              ) : (
                <button
                  disabled={!isChecked}
                  onClick={handleSubmit}
                  className="disabled:cursor-not-allowed disabled:bg-opacity-35 bg-blue-600 py-4 px-8 rounded-full"
                >
                  Post My Property
                </button>
              )}
            </div>
          </div>
        </div>
        <img src={Congrats} alt="congratulations" className="w-full h-full" />
      </div>
      <Footer />
    </div>
  );
};

export default AddProperty5;
