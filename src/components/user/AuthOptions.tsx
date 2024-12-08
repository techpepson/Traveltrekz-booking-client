import React from 'react';
import { useAuth } from '../../context/AuthContext';
import SignedinOption from './SignedinOption';
import SigninOption from './SigninOption';

const AuthOptions: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <SignedinOption /> : <SigninOption />;
};

export default AuthOptions; 