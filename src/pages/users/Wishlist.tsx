import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'
import { useWishlist } from '../../context/WishlistContext'
import { MdFavorite } from 'react-icons/md'

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-header-600 text-3xl font-bold mb-8">My Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => removeFromWishlist(property.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <MdFavorite className="text-red-500 text-xl" />
                  </button>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-blue-600 font-semibold">${property.range} USD</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist