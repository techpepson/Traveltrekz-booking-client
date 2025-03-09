import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
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
import HostProtectedRoute from "./components/auth/HostProtectedRoute";

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
import { getCookie } from "./utils/cookieGetFunction";
import { setAuth } from "./apis/api.config";
import UniversalProtectedRoute from "./components/auth/UniversalProtectedRoute";

const App: React.FC = () => {
  const [cookie, setCookie] = useState<string>("");
  useEffect(() => {
    const fetchCookie = async () => {
      const cookie = await getCookie();
      setCookie(cookie.token);
      console.log(cookie);
    };
    fetchCookie();
  }, []);

  useEffect(() => {
    setAuth(cookie);
  });
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
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route
            path="/verification"
            element={
              <UniversalProtectedRoute>
                <VerificationRouter />
              </UniversalProtectedRoute>
            }
          />
          <Route
            path="/account-edit"
            element={
              <ProtectedRoute>
                <AccountEdit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reservation"
            element={
              <ProtectedRoute>
                <Reservation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stories"
            element={
              <ProtectedRoute>
                <SharedStories />
              </ProtectedRoute>
            }
          />

          {/* Host Routes - Home page public, others protected */}
          <Route
            path="/host/*"
            element={
              <Routes>
                {/* Public Host Home */}
                <Route path="/" element={<HomeHost />} />

                {/* Protected Host Routes */}
                <Route
                  path="/account"
                  element={
                    <HostProtectedRoute>
                      <AccountHost />
                    </HostProtectedRoute>
                  }
                />

                <Route
                  path="/account-edit"
                  element={
                    <HostProtectedRoute>
                      <AccountEditHost />
                    </HostProtectedRoute>
                  }
                />
                <Route
                  path="/property"
                  element={
                    <HostProtectedRoute>
                      <PropertiesHost />
                    </HostProtectedRoute>
                  }
                />
                <Route
                  path="/reservation"
                  element={
                    <HostProtectedRoute>
                      <ReservationHost />
                    </HostProtectedRoute>
                  }
                />
                <Route
                  path="/transaction"
                  element={
                    <HostProtectedRoute>
                      <Transaction />
                    </HostProtectedRoute>
                  }
                />
                <Route
                  path="/add-property-1"
                  element={
                    <ProtectedRoute>
                      <AddProperty1 />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add-property-2"
                  element={
                    <HostProtectedRoute>
                      <AddProperty2 />
                    </HostProtectedRoute>
                  }
                />
                <Route
                  path="/add-property-3"
                  element={
                    <HostProtectedRoute>
                      <AddProperty3 />
                    </HostProtectedRoute>
                  }
                />
                <Route
                  path="/add-property-4"
                  element={
                    <HostProtectedRoute>
                      <AddProperty4 />
                    </HostProtectedRoute>
                  }
                />
                <Route
                  path="/add-property-5"
                  element={
                    <HostProtectedRoute>
                      <AddProperty5 />
                    </HostProtectedRoute>
                  }
                />
              </Routes>
            }
          />
        </Routes>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default App;
