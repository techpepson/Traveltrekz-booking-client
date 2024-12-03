import React from "react";
import Profile from "../../assets/profile.svg";

const HostAccountImage: React.FC = () => {
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
        <p className="text-xl font-semibold">John Doe - ( HOST )</p>
        <div>
          <div>
            <p>Email Confirmed</p>
          </div>
          <div>
            <p>Mobile Confirmed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAccountImage;
