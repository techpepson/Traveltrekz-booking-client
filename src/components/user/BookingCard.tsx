import React from 'react'
import { useNavigate } from 'react-router-dom';
import Enquiry from '../../assets/inquiry.svg'
import Phone from '../../assets/call.svg'
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

interface BookingCardProps {
  propertyId: string;
  propertyName: string;
  pricePerNight: number;
}

const BookingCard: React.FC<BookingCardProps> = ({ propertyId, propertyName, pricePerNight }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleReserve = () => {
    if (!isAuthenticated) {
      toast.error('Please login to make a booking');
      navigate('/login');
      return;
    }

    if (!propertyId || !propertyName || !pricePerNight) {
      toast.error('Invalid property details');
      return;
    }

    navigate('/booking', {
      state: {
        propertyId,
        propertyName,
        pricePerNight
      }
    });
  };

  return (
    <div className="shadow-2xl h-fit w-full p-6 flex justify-center rounded-lg flex-col ">
      <h1 className="text-2xl text-header-600 font-bold py-4">${pricePerNight}</h1>
      <div className="h-0.5 w-full bg-header-200"></div>
      <div className="pt-4 text-header-400 font-medium">
        <p>Short period</p>
        <p>Medium period</p>
        <p>Long period</p>
      </div>
      <button
        onClick={handleReserve}
        className="bg-blue-600 p-4 rounded-full flex items-center justify-center my-10 text-white font-semibold"
      >
        Reserve Now
      </button>
      <div className="text-header-600 gap-2 w-full font-semibold flex items-center justify-between pb-10">
        <div className="flex items-center gap-2 w-full">
          <img src={Enquiry} alt="" />
          Enquiries
        </div>
        <div className="flex items-center gap-2 w-full">
          <img src={Phone} alt="" />
          Contact Host
        </div>
      </div>
    </div>
  );
};

export default BookingCard;