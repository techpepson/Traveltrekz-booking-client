import React from "react";
import { Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';

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
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<VerificationRouter />} />

          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account-edit" element={<AccountEdit />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Host Routes */}
          <Route path="/host" element={<HomeHost />} />
          <Route path="/host/account" element={<AccountHost />} />
          <Route path="/host/account-edit" element={<AccountEditHost />} />
          <Route path="/host/property" element={<PropertiesHost />} />
          <Route path="/host/reservation" element={<ReservationHost />} />
          <Route path="/host/transaction" element={<Transaction />} />

          {/* Property Management Routes */}
          <Route path="/host/add-property-1" element={<AddProperty1 />} />
          <Route path="/host/add-property-2" element={<AddProperty2 />} />
          <Route path="/host/add-property-3" element={<AddProperty3 />} />
          <Route path="/host/add-property-4" element={<AddProperty4 />} />
          <Route path="/host/add-property-5" element={<AddProperty5 />} />
        </Routes>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default App;
