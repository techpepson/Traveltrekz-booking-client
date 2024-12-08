import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';

interface UserFormData {
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  country: string;
  profilePicture: File | null;
  frontIdCard: File | null;
  backIdCard: File | null;
  idType: string;
  idNumber: string;
  userRole: 'user' | 'host';
}

const UserVerification: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    dateOfBirth: '',
    phoneNumber: '',
    country: '',
    profilePicture: null,
    frontIdCard: null,
    backIdCard: null,
    idType: '',
    idNumber: '',
    userRole: 'user'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep1 = () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
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
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Profile Picture</label>
        <input
          type="file"
          name="profilePicture"
          onChange={handleFileChange}
          accept="image/*"
          className="border rounded-md p-2"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">ID Type</label>
        <select
          name="idType"
          value={formData.idType}
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
          name="idNumber"
          value={formData.idNumber}
          onChange={handleInputChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Front ID Card</label>
        <input
          type="file"
          name="frontIdCard"
          onChange={handleFileChange}
          accept="image/*"
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Back ID Card</label>
        <input
          type="file"
          name="backIdCard"
          onChange={handleFileChange}
          accept="image/*"
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
          <div className={`h-2 w-1/3 ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`h-2 w-1/3 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`h-2 w-1/3 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        </div>

        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className={`px-6 py-2 rounded-full ${
              currentStep === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white'
            }`}
            disabled={currentStep === 1}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-full"
          >
            {currentStep === 3 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Verification In Progress</h2>
            <p className="mb-6">Your information is under review. We will notify you once the verification process is complete.</p>
            <button
              onClick={() => navigate('/')}
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