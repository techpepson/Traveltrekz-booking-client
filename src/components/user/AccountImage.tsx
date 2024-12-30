import React, { useEffect, useState } from "react";
import Profile from "../../assets/profile.svg";
import { getToken } from "../../utils/cookieGetFunction";
import { fetchUserDetails } from "../../utils/userDetailsFetch";

const AccountImage: React.FC = () => {
  const [joinYear, setJoinYear] = useState<string>(""); // Default empty string
  const [verificationStatus, setVerificationStatus] = useState<boolean>(false); // Default false
  const [phoneVerificationStatus, setPhoneVerificationStatus] =
    useState<boolean>(false); // Default false
  const [name, setName] = useState<string>(""); // Default empty string

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookie = await getToken();
        const userEmail = cookie.cookieEmail;
        const userName = cookie.userName;

        const user = await fetchUserDetails(userEmail);

        // Update states
        setName(userName);
        setJoinYear(user?.regYear || ""); // Fallback to empty string
        setVerificationStatus(user?.emailVerificationStatus === true); // Ensure boolean
        setPhoneVerificationStatus(user?.phoneNumberVerification === true); // Ensure boolean
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once

  return (
    <div className="bg-blue-200 text-header-600 p-4 flex flex-col rounded-lg gap-6">
      <div className="flex flex-col items-center justify-center">
        <img src={Profile} alt="" className="w-36" />
        <button>Upload a photo</button>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Identity Verification</h1>
        <p className="">
          Easily update your details and preferences to enjoy a smoother, more
          personalized TravelTrekz experience.
        </p>
      </div>
      <div>
        <p className="text-xl font-semibold">{name}</p>
        <div>
          <div>
            <p>
              Email Confirmation Status:{" "}
              {verificationStatus ? "Verified" : "Not verified"}
            </p>
          </div>
          <div>
            <p>
              Mobile Confirmation Status:{" "}
              {phoneVerificationStatus ? "Verified" : "Not verified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountImage;
