import React from "react";
import { Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import ProtectedRoute from "./components/auth/ProtectedRoute";

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
import Booking from "./pages/users/Booking";
import "@radix-ui/themes/styles.css";

// Host Pages
import HomeHost from "./pages/host/HomeHost";
import AccountHost from "./pages/host/AccountHost";
import AccountEditHost from "./pages/host/AccountEditHost";
import PropertiesHost from "./pages/host/PropertiesHost";
import ReservationHost from "./pages/host/ReservationHost";
import Transaction from "./pages/host/Transaction";

// Property Management Pages
import AddProperty1 from "./pages/host/AddProperty1";
import AddProperty2 from "./pages/host/AddProperty2";
import AddProperty3 from "./pages/host/AddProperty3";
import AddProperty4 from "./pages/host/AddProperty4";
import AddProperty5 from "./pages/host/AddProperty5";

// Verification Pages
import VerificationRouter from "./pages/verification/VerificationRouter";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <WishlistProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          transition={Bounce}
        />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help" element={<HelpCenter />} />

          {/* Protected User Routes */}
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
          <Route path="/booking" element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          } />
          <Route path="/stories" element={
            <ProtectedRoute>
              <SharedStories />
            </ProtectedRoute>
          } />

          {/* Host Routes - Home page public, others protected */}
          <Route path="/host/*" element={
            <Routes>
              {/* Public Host Home */}
              <Route path="/" element={<HomeHost />} />
              
              {/* Protected Host Routes */}
              <Route path="/account" element={
                <ProtectedRoute>
                  <AccountHost />
                </ProtectedRoute>
              } />
              <Route path="/account-edit" element={
                <ProtectedRoute>
                  <AccountEditHost />
                </ProtectedRoute>
              } />
              <Route path="/property" element={
                <ProtectedRoute>
                  <PropertiesHost />
                </ProtectedRoute>
              } />
              <Route path="/reservation" element={
                <ProtectedRoute>
                  <ReservationHost />
                </ProtectedRoute>
              } />
              <Route path="/transaction" element={
                <ProtectedRoute>
                  <Transaction />
                </ProtectedRoute>
              } />
              <Route path="/add-property-1" element={
                <ProtectedRoute>
                  <AddProperty1 />
                </ProtectedRoute>
              } />
              <Route path="/add-property-2" element={
                <ProtectedRoute>
                  <AddProperty2 />
                </ProtectedRoute>
              } />
              <Route path="/add-property-3" element={
                <ProtectedRoute>
                  <AddProperty3 />
                </ProtectedRoute>
              } />
              <Route path="/add-property-4" element={
                <ProtectedRoute>
                  <AddProperty4 />
                </ProtectedRoute>
              } />
              <Route path="/add-property-5" element={
                <ProtectedRoute>
                  <AddProperty5 />
                </ProtectedRoute>
              } />
            </Routes>
          } />
        </Routes>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default App;
