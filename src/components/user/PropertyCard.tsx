import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdFavoriteBorder, MdFavorite, MdPets } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface PropertyCardProps {
  images: string[];
  name: string;
  location: string;
  range: string;
  position: string;
  id: string | number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  images,
  name,
  location,
  range,
  position,
  id,
}) => {
  const [favorites, setFavorites] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const toggleFavorite = (id: string | number) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const borderRadiusClass =
    position === "left"
      ? "lg:rounded-bl-[121px] rounded-bl-[61px]"
      : position === "right"
      ? "lg:rounded-br-[121px] rounded-br-[61px]"
      : "rounded-b-none";
  const paddingClass = position === "left" ? "px-16" : "";

  const handleCardClick = () => {
    navigate(`/property/${id}`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className={`bg-white drop-shadow-md w-full overflow-hidden rounded-xl cursor-pointer`}
    >
      <div className="relative">
        {/* Display one image at a time */}
        <img
          src={images[currentImageIndex]}
          alt={`Image of ${name}`}
          className={`h-full w-full object-cover ${borderRadiusClass}`}
        />
        <div
          className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-50"
          onClick={prevImage}
        >
          <button className="bg-white p-2 rounded-full shadow">❮</button>
        </div>
        <div
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-50"
          onClick={nextImage}
        >
          <button className="bg-white p-2 rounded-full shadow">❯</button>
        </div>
        <p
          className={`absolute text-header-200 bottom-2 left-4 z-50 font-medium ${paddingClass}`}
        >
          ${range} USD
        </p>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-100 hover:opacity-0 ${borderRadiusClass}`}
        ></div>
        <div
          className={`absolute top-2 right-2 cursor-pointer text-3xl text-blue-400 ${
            favorites[id] ? "text-blue-400" : ""
          } p-2 rounded-full`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
        >
          {favorites[id] ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder className="text-white" />
          )}
        </div>
      </div>
      <div className="p-4" onClick={handleCardClick}>
        <p className="font-semibold text-header-600">{name}</p>
        <p className="text-header-400 text-sm">{location}</p>
      </div>
      <div className="flex items-center gap-3 px-4 pb-4 text-header-600">
        <div className="flex items-center gap-1">
          <IoBedOutline className="text-lg" />
          <p>2</p>
        </div>
        <div className="flex items-center gap-1">
          <LuBath className="text-lg" />
          <p>2</p>
        </div>
        <div className="flex items-center gap-1">
          <FaCar className="text-lg" />
          <p>2</p>
        </div>
        <div className="flex items-center gap-1">
          <MdPets className="text-lg" />
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
