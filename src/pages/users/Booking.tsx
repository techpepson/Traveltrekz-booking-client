import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import { toast } from "react-toastify";

interface BookingFormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  startDate: string;
  endDate: string;
  guests: number;
}

interface LocationState {
  propertyId: string;
  propertyName: string;
  pricePerNight: number;
}

const Booking: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState<BookingFormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    startDate: "",
    endDate: "",
    guests: 1,
  });

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [numberOfNights, setNumberOfNights] = useState<number>(0);
  const propertyDetails = location.state as LocationState | null;

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please login to make a booking");
      navigate("/login");
      return;
    }

    if (!propertyDetails) {
      toast.error("Invalid property details");
      navigate("/property");
      return;
    }

    setIsLoading(false);
  }, [isAuthenticated, navigate, propertyDetails]);

  useEffect(() => {
    if (
      formData.startDate &&
      formData.endDate &&
      propertyDetails?.pricePerNight
    ) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const nights = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      setNumberOfNights(nights);
      setTotalPrice(nights * propertyDetails.pricePerNight);
    }
  }, [formData.startDate, formData.endDate, propertyDetails?.pricePerNight]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.startDate || !formData.endDate) {
      toast.error("Please select booking dates");
      return;
    }

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);

    if (startDate >= endDate) {
      toast.error("End date must be after start date");
      return;
    }

    if (startDate < new Date()) {
      toast.error("Start date cannot be in the past");
      return;
    }

    // Here you would typically make an API call to save the booking
    try {
      // Simulate API call
      toast.success("Booking successful!");
      navigate("/reservation", {
        state: {
          reservation: {
            ...formData,
            propertyId: propertyDetails?.propertyId,
            propertyName: propertyDetails?.propertyName,
            totalPrice,
            numberOfNights,
          },
        },
      });
    } catch (error) {
      toast.error("Failed to create booking. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="loading loading-spinner loading-lg text-blue-600"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!propertyDetails) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 md:p-8 mt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-header-600 mb-6">
          Book Your Stay at {propertyDetails.propertyName}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                required
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                name="guests"
                min="1"
                required
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                Check-in Date
              </label>
              <input
                type="date"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-header-600 mb-2">
                Check-out Date
              </label>
              <input
                type="date"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-header-600 mb-4">
              Booking Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Price per night</span>
                <span>${propertyDetails.pricePerNight}</span>
              </div>
              <div className="flex justify-between">
                <span>Number of nights</span>
                <span>{numberOfNights}</span>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between font-bold">
                <span>Total Price</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
