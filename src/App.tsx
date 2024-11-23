import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/users/PropertyDetails";
import Properties from "./pages/users/Properties";
import Home from "./pages/users/Home";
import Login from "./pages/users/Login";
import { Bounce, ToastContainer } from "react-toastify";
import Register from "./pages/users/Register";
// import SigninOption from './components/user/SigninOption';
// import SignedinOption from './components/user/SignedinOption';
import Account from "./pages/users/Account";
import AccountEdit from "./pages/users/AccountEdit";
import Reservation from "./pages/users/Reservation";
import Wishlist from "./pages/users/Wishlist";
import "react-toastify/dist/ReactToastify.css";
import HomeHost from "./pages/host/HomeHost";
import AccountHost from "./pages/host/AccountHost";
import AccountEditHost from "./pages/host/AccountEditHost";
import PropertiesHost from "./pages/host/PropertiesHost";
import AddProperty1 from './pages/host/AddProperty1'
import AddProperty2 from './pages/host/AddProperty2'
import AddProperty3 from './pages/host/AddProperty3'

const App = () => {
  return (
    <>
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
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account-edit" element={<AccountEdit />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/host" element={<HomeHost />} />
        <Route path="/host/account" element={<AccountHost />} />
        <Route path="/host/account-edit" element={<AccountEditHost />} />
        <Route path="/host/property" element={<PropertiesHost />} />
        <Route path="/host/add-property-1" element={<AddProperty1 />} />
        <Route path="/host/add-property-2" element={<AddProperty2 />} />
        <Route path="/host/add-property-3" element={<AddProperty3 />} />
      </Routes>
    </>
  );
};

export default App;
