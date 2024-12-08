import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface Property {
  id: string | number;
  images: string[];
  name: string;
  location: string;
  range: string;
}

interface WishlistContextType {
  wishlist: Property[];
  addToWishlist: (property: Property) => void;
  removeFromWishlist: (propertyId: string | number) => void;
  isInWishlist: (propertyId: string | number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Property[]>([]);

  const addToWishlist = (property: Property) => {
    if (!isInWishlist(property.id)) {
      setWishlist(prev => [...prev, property]);
      toast.success('Added to wishlist!');
    }
  };

  const removeFromWishlist = (propertyId: string | number) => {
    setWishlist(prev => prev.filter(item => item.id !== propertyId));
    toast.success('Removed from wishlist');
  };

  const isInWishlist = (propertyId: string | number) => {
    return wishlist.some(item => item.id === propertyId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}; 