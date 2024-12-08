import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { propertyDetails } from "../../dummy-data/home-property";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Navbar from "../../components/user/Navbar";
import Newsletter from "../../components/user/Newsletter";
import Footer from "../../components/user/Footer";
import { MdFavoriteBorder, MdFavorite, MdPets } from "react-icons/md";
import { IoBedOutline, IoShareSocialOutline } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { toast } from "react-toastify";
import BookingCard from "../../components/user/BookingCard";
import { LuBath } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import Kitchen from '../../assets/kitchen.svg';
import Balcony from '../../assets/balcony.svg';
import AirCondition from '../../assets/air-conditioner.svg';
import Washer from '../../assets/washer.svg';
import Television from '../../assets/television.svg';
import Internet from '../../assets/internet.svg';

// Google Maps container style
const containerStyle = {
  width: "100%",
  height: "400px",
};

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Find the property by ID
  const property = propertyDetails.find(prop => prop.id.toString() === id);

  // If no property found, show a proper error message
  if (!property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-header-600 mb-4">Property Not Found</h1>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-blue-600 text-white rounded-full"
            >
              Return to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      toast.error('Please log in to add properties to your wishlist');
      return;
    }

    const propertyForWishlist = {
      id: property.id,
      images: property.images,
      name: property.title,
      location: property.location,
      range: property.amount
    };

    if (isInWishlist(property.id)) {
      removeFromWishlist(property.id);
    } else {
      addToWishlist(propertyForWishlist);
    }
  };

  // Handle reservation
  const handleReserve = () => {
    const reservation = {
      id: property.id,
      title: property.title,
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    };
    navigate("/reservation", { state: { reservation } });
  };

  // Feature to icon mapping
  const featureIcons: { [key: string]: JSX.Element } = {
    'Bedrooms': <IoBedOutline className='text-xl md:text-3xl text-header-600' />,
    'Bathrooms': <LuBath className='text-xl md:text-3xl text-header-600' />,
    'Cars': <FaCar className='text-xl md:text-3xl text-header-600' />,
    'Pet Friendly': <MdPets className='text-xl md:text-3xl text-header-600' />,
    'No Pets': <MdPets className='text-xl md:text-3xl text-header-600' />,
  };

  // Count features for rendering
  const featureCount: { [key: string]: number } = {
    "Bedrooms": property.features.filter((feature) => feature.includes("Bedroom")).length,
    "Bathrooms": property.features.filter((feature) => feature.includes("Bathroom")).length,
    "Cars": property.features.filter((feature) => feature.includes("Car")).length,
    "Pet Friendly": property.features.includes("Pet Friendly") ? 1 : 0,
    "No Pets": property.features.includes("No Pets") ? 1 : 0,
  };

  // Amenities to icon mapping
  const amenityIcons: { [key: string]: JSX.Element } = {
    "Kitchen": <img src={Kitchen} alt="kitchen" className="w-5" />,
    "Balcony": <img src={Balcony} alt="balcony" className="w-5" />,
    "Air Conditioner": <img src={AirCondition} alt="air conditioner" className="w-5" />,
    "Washer": <img src={Washer} alt="washer" className="w-5" />,
    "Television": <img src={Television} alt="television" className="w-5" />,
    "Wifi": <img src={Internet} alt="wifi" className="w-5" />,
    // Add other amenities as needed
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto md:px-8 px-4 py-10 max-lg:mt-16">
        {/* Main image */}
        <img
          src={property.images[0]}
          alt={property.title}
          className="rounded-md w-full mb-4 md:mb-0 md:hidden"
        />
        
        {/* Mobile view: Horizontal scrollable images */}
        <div className="flex overflow-x-auto scrollbar-hide md:hidden gap-2 mt-2">
          {property.images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${property.title} ${index + 2}`}
              className="min-w-[250px] h-[150px] object-cover rounded-md"
            />
          ))}
        </div>

        {/* Original grid layout for md and up */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
          <img
            src={property.images[0]}
            alt={property.title}
            className="rounded-md"
          />
          <div className='md:grid flex md:grid-cols-2 w-full md:w-[45vw] gap-2'>
            <div className='flex md:grid md:grid-rows-2 gap-2 w-full'>
              <img
                src={property.images[1]}
                alt={property.title}
                className="rounded-md"
              />
              <img
                src={property.images[2]}
                alt={property.title}
                className="rounded-md"
              />
            </div>
            <div className='flex md:grid md:grid-rows-2 gap-2 w-full'>
              <img
                src={property.images[3]}
                alt={property.title}
                className="rounded-md"
              />
              <img
                src={property.images[2]}
                alt={property.title}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='max-[340px]:px-2 max-sm:px-6 md:px-16 md:py-8 flex flex-col lg:flex-row justify-between gap-8 lg:gap-20'>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className='text-xl md:text-3xl font-bold text-header-600'>{property.title}</h1>
              <p className='mt-2 text-header-400 max-sm:text-sm'>{property.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleFavoriteClick}
                className={`cursor-pointer text-3xl ${
                  isInWishlist(property.id) ? "text-red-500" : "text-header-400"
                } p-2 rounded-full hover:bg-gray-100 transition-colors`}
              >
                {isInWishlist(property.id) ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
              <IoShareSocialOutline className="text-3xl text-blue-400" />
            </div>
          </div>

          <ul className='md:mt-12 mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'>
            {Object.entries(featureCount).map(
              ([feature, count], index) =>
                count > 0 && (
                  <div
                    key={index}
                    className='bg-blue-200 p-2 md:p-6 max-sm:text-center max-sm:text-sm rounded-md flex items-center flex-col gap-2'
                  >
                    {featureIcons[feature]}
                    <span className="text-header-600">
                      {count} {feature}
                    </span>
                  </div>
                )
            )}
          </ul>
          <div className="flex flex-col gap-2 mt-8">
            <h1 className="text-xl md:text-3xl text-header-600 font-bold">Description</h1>
            <p className='max-sm:text-sm'>{property.description}</p>
          </div>
          <div className='lg:hidden pt-4'>
            <BookingCard amount={property.amount} handleReserve={handleReserve} />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <h1 className="text-xl md:text-3xl text-header-600 font-bold">Offered Amenities</h1>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  {amenityIcons[amenity]}
                  <span className="ml-2 text-header-600">{amenity}</span>
                </div>
              ))}
            </div>
            <button className='text-blue-400 border border-blue-400 rounded-md py-1 px-2 md:py-2 md:px-4 w-fit mt-4'>
              Show all amenities
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <h1 className="text-xl md:text-3xl text-header-600 font-bold">
              Safety & Hygiene
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  {amenityIcons[amenity]}
                  <span className="ml-2 text-header-600">{amenity}</span>
                </div>
              ))}
            </div>
            <button className='text-blue-400 border border-blue-400 rounded-md py-1 md:py-2 px-2 md:px-4 w-fit mt-4'>
              Show all amenities
            </button>
          </div>
          <div>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={property.coordinates}
                zoom={14}
              >
                <Marker position={property.coordinates} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
        <div className='max-lg:hidden w-full'>
          <BookingCard amount={property.amount} handleReserve={handleReserve} />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default PropertyDetails;
