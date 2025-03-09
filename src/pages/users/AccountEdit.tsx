import React, { useEffect, useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import AccountImage from "../../components/user/AccountImage";
import {
  GuestAccountEdit,
  GuestDetailsUpdate,
} from "../../interface/account-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/config/store.config";
import { GuestAccountEditThunk } from "../../store/thunks/account-details-verify.reducer";
import { getToken } from "../../utils/cookieGetFunction";

const AccountEdit: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<GuestAccountEdit>({
    guestPhoneNumber: "",
    guestBio: "",
    userEmail: "",
    guestCountry: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //call the dispatch function
  const dispatch = useDispatch<AppDispatch>();
  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //account edit payload
  const payload: GuestAccountEdit = {
    userEmail: formData.userEmail,
    guestBio: formData.guestBio,
    guestCountry: formData.guestCountry,
    guestPhoneNumber: formData.guestPhoneNumber,
  };

  // Submit form data
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(GuestAccountEditThunk(payload));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row p-4 max-lg:mt-24 lg:p-16 gap-8 lg:gap-20 w-full">
        <AccountImage />
        <div className="w-full flex flex-col gap-4 text-header-600">
          <div className="flex flex-col gap-0">
            <h1 className="text-2xl font-semibold">Edit Account Details</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold">About</p>
              <textarea
                name="guestBio"
                value={formData.guestBio}
                onChange={handleChange}
                rows={3}
                className="border w-full rounded-md p-1 outline-none"
              ></textarea>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold">Location</p>
                <input
                  type="text"
                  name="guestCountry"
                  value={formData.guestCountry}
                  onChange={handleChange}
                  className="border w-full rounded-md p-1 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold">Phone Number</p>
                <input
                  type="text"
                  name="guestPhoneNumber"
                  value={formData.guestPhoneNumber}
                  onChange={handleChange}
                  className="border w-full rounded-md p-1 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Email</p>
              <input
                type="text"
                name="guestEmail"
                value={formData.userEmail}
                onChange={handleChange}
                className="border w-full rounded-md p-1 outline-none"
              />
            </div>
            <div className="w-full flex items-center gap-4 justify-end py-6">
              <button type="button" className="font-semibold">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 py-2 px-5 flex items-center justify-center font-semibold text-white rounded-3xl"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-bars"></span>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </form>
          {message && <p className="text-red-500">{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountEdit;
