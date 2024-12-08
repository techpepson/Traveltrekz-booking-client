import React, { useState } from 'react';
import UserVerification from './UserVerification';
import HostVerification from './HostVerification';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';

const VerificationRouter: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'user' | 'host' | null>(null);

  if (selectedRole === 'user') {
    return <UserVerification />;
  }

  if (selectedRole === 'host') {
    return <HostVerification />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Select Your Role</h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setSelectedRole('user')}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Continue as User
            </button>
            <button
              onClick={() => setSelectedRole('host')}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Continue as Host
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerificationRouter; 