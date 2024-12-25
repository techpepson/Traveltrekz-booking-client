import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import { GuestServerPayload } from "../../interface/account-details";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/config/store.config";
import { GuestDetailsAddThunk } from "../../store/thunks/account-details-verify.reducer";
import { getCookie } from "../../utils/cookieGetFunction";
import { setAuth } from "../../apis/api.config";

const UserVerification: React.FC = () => {
  const [cookie, setCookie] = useState<string>("");

  useEffect(() => {
    const fetchCookie = async () => {
      const cookie = await getCookie();
      setCookie(cookie.token);
      console.log(cookie);
    };
    fetchCookie();
  }, []);

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<GuestServerPayload>({
    guestBirthDay: "",
    guestPhoneNumber: "",
    guestCountry: "",
    guestProfilePicture: null,
    guestFrontIdCard: null,
    guestBackIdCard: null,
    guestGovernmentIdType: "",
    guestGovernmentIdNumber: "",
    userRole: "guest-admin",
    userType: "guest",
    guestBio: "",
  });

  //dispatch function
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //select states from the guestDetails slice
  const { loading, error, success } = useSelector(
    (store: RootState) => store.accountDetails.addGuestDetails
  );
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();

      // This event is triggered when the file has been successfully read
      reader.onloadend = () => {
        // The result will be a Base64 string (Data URL)
        const base64String = reader.result as string;

        // Update the state with the Base64 string
        setFormData((prev) => ({ ...prev, [name]: base64String }));
      };

      // Read the file as a Data URL (Base64 encoded string)
      reader.readAsDataURL(file);
    }
  };

  //handle submit function
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAuth(cookie);
    dispatch(GuestDetailsAddThunk(formData));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep1 = () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2"></div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Date of Birth</label>
        <input
          type="date"
          name="guestBirthDay"
          value={formData.guestBirthDay}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Phone Number</label>
        <input
          type="tel"
          name="guestPhoneNumber"
          value={formData.guestPhoneNumber}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Country</label>
        <input
          type="text"
          name="guestCountry"
          value={formData.guestCountry}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Profile Picture</label>
        <input
          type="file"
          name="guestProfilePicture"
          onChange={handleFileChange}
          accept="image/*"
          className="border rounded-md p-2"
        />
      </div>

      {/*Bio field*/}
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Bio</label>
        <textarea
          onChange={handleInputChange}
          value={formData.guestBio}
          placeholder="Briefly describe yourself"
          name="guestBio"
          minLength={500}
          className="border rows-{3} border-solid border-slate-700"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">ID Type</label>
        <select
          name="guestGovernmentIdType"
          value={formData.guestGovernmentIdType}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        >
          <option value="">Select ID Type</option>
          <option value="passport">Passport</option>
          <option value="driverLicense">Driver's License</option>
          <option value="nationalId">National ID</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">ID Number</label>
        <input
          type="text"
          name="guestGovernmentIdNumber"
          value={formData.guestGovernmentIdNumber}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Front ID Card</label>
        <input
          type="file"
          name="guestFrontIdCard"
          onChange={handleFileChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Back ID Card</label>
        <input
          type="file"
          name="guestBackIdCard"
          onChange={handleFileChange}
          className="border rounded-md p-2"
        />
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 my-10">
        <div className="flex justify-between mb-8">
          <div
            className={`h-2 w-1/3 ${
              currentStep >= 1 ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
          <div
            className={`h-2 w-1/3 ${
              currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
          <div
            className={`h-2 w-1/3 ${
              currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
        </div>

        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className={`px-6 py-2 rounded-full ${
              currentStep === 1 ? "bg-gray-300" : "bg-blue-600 text-white"
            }`}
            disabled={currentStep === 1}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-full"
          >
            {currentStep === 3 ? (
              <button onClick={handleSubmit}>
                {loading ? (
                  <span className="loading loading-bars"></span>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            ) : (
              "Next"
            )}
          </button>
        </div>
      </div>

      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Verification In Progress
            </h2>
            <p className="mb-6">
              Your information is under review. We will notify you once the
              verification process is complete.
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-full"
            >
              Return to Home
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default UserVerification;
