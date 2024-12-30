import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/config/store.config"; // Import your AppDispatch type
import { HostAccountEditThunk } from "../../store/thunks/account-details-verify.reducer";
import NavbarHost from "../../components/host/NavbarHost";
import HostAccountImage from "../../components/host/HostAccountImage";
import Footer from "../../components/user/Footer";
import { getToken } from "../../utils/cookieGetFunction";

const AccountEditHost: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use dispatch for actions

  const [name, setName] = useState<string>("");

  // State for form data
  const [formData, setFormData] = useState({
    hostBio: "",
    hostCountry: "",
    hostPhoneNumber: "",
    userEmail: "",
  });

  useEffect(() => {
    const cookieGetFunction = async () => {
      const name = await getToken();
      const userName = name.userName;
      setName(userName);
    };

    cookieGetFunction();
  }, []);

  const [loading, setLoading] = useState(false); // Loading state

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        hostBio: formData.hostBio,
        hostCountry: formData.hostCountry,
        hostPhoneNumber: formData.hostPhoneNumber,
        userEmail: formData.userEmail,
      };

      await dispatch(HostAccountEditThunk(payload)).unwrap(); // Dispatch thunk action
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarHost />
      <div className="flex flex-col md:flex-row p-4 max-lg:mt-24 lg:p-16 gap-8 lg:gap-20 w-full">
        <HostAccountImage />
        <div className="w-full flex flex-col gap-4 text-header-600">
          <div className="flex flex-col gap-0">
            <h1 className="text-2xl font-semibold">Hello, {name}</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">About</p>
              <textarea
                name="hostBio"
                rows={3}
                className="border w-full rounded-md p-1 outline-none"
                value={formData.hostBio}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold">Location</p>
                <input
                  type="text"
                  name="hostCountry"
                  className="border w-full rounded-md p-1 outline-none"
                  value={formData.hostCountry}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold">Phone Number</p>
                <input
                  type="text"
                  name="hostPhoneNumber"
                  className="border w-full rounded-md p-1 outline-none"
                  value={formData.hostPhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Email</p>
              <input
                type="text"
                name="userEmail"
                className="border w-full rounded-md p-1 outline-none"
                value={formData.userEmail}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex items-center gap-4 justify-end py-6">
              <button
                type="button"
                className="font-semibold"
                onClick={() =>
                  setFormData({
                    hostBio: "",
                    hostCountry: "",
                    hostPhoneNumber: "",
                    userEmail: "",
                  })
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 py-2 px-5 flex items-center justify-center font-semibold text-white rounded-3xl"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>

          {/*password reset field*/}
          {/* <div>
            <h1 className="text-2xl font-semibold">Change Password</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="previous-password">Enter previous password</label>
              <input
                type="password"
                id="previous-password"
                className="border rounded-md w-full p-1 outline-none"
              />
            </div>
            <div className="flex items-center justify-between py-4">
              <p>Forgotten Password? Click here</p>
              <button className="bg-blue-600 py-2 px-5 flex items-center justify-center font-semibold text-white rounded-3xl">
                Proceed
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountEditHost;
