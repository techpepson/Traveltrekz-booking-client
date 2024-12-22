<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
=======
import React, { createContext, useContext, useState, ReactNode } from "react";
>>>>>>> 470b766e2287ef605d460d067886bc673a46b7bc

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

<<<<<<< HEAD
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check localStorage on initial load
    return localStorage.getItem('isAuthenticated') === 'true';
  });
=======
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // In a real app, you'd want to check localStorage or a token here
  const [isAuthenticated, setIsAuthenticated] = useState(false);
>>>>>>> 470b766e2287ef605d460d067886bc673a46b7bc

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  // Optional: Verify token validity on page load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Add your token validation logic here
        const token = localStorage.getItem('token');
        if (!token) {
          logout();
        }
      } catch (error) {
        logout();
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
