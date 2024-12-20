import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, useAuth } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { toast } from 'react-toastify';

// User Pages
import Home from "./pages/users/Home";
import Properties from "./pages/users/Properties";
import PropertyDetails from "./pages/users/PropertyDetails";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Account from "./pages/users/Account";
import AccountEdit from "./pages/users/AccountEdit";
import Reservation from "./pages/users/Reservation";
import Wishlist from "./pages/users/Wishlist";
import SharedStories from "./pages/users/SharedStories";
import AboutUs from "./pages/users/AboutUs";
import HelpCenter from "./pages/users/HelpCenter";

// Host Pages
import HomeHost from "./pages/host/HomeHost";
import AccountHost from "./pages/host/AccountHost";
import AccountEditHost from "./pages/host/AccountEditHost";
import PropertiesHost from "./pages/host/PropertiesHost";
import ReservationHost from "./pages/host/ReservationHost";
import Transaction from "./pages/host/Transaction";

// Property Management Pages
import AddProperty1 from './pages/host/AddProperty1';
import AddProperty2 from './pages/host/AddProperty2';
import AddProperty3 from './pages/host/AddProperty3';
import AddProperty4 from './pages/host/AddProperty4';
import AddProperty5 from './pages/host/AddProperty5';

// Verification Pages
import VerificationRouter from './pages/verification/VerificationRouter';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please log in to access this page');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <WishlistProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Protected Routes */}
          <Route path="/verification" element={
            <ProtectedRoute>
              <VerificationRouter />
            </ProtectedRoute>
          } />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
          <Route path="/account-edit" element={
            <ProtectedRoute>
              <AccountEdit />
            </ProtectedRoute>
          } />
          <Route path="/reservation" element={
            <ProtectedRoute>
              <Reservation />
            </ProtectedRoute>
          } />
          <Route path="/wishlist" element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          } />
          <Route path="/stories" element={
            <ProtectedRoute>
              <SharedStories />
            </ProtectedRoute>
          } />
          <Route path="/host/*" element={
            <ProtectedRoute>
              <HostRoutes />
            </ProtectedRoute>
          } />
        </Routes>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default App;
