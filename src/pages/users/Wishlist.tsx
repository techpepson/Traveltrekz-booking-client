import React from 'react'
import Navbar from '../../components/user/Navbar'
import Footer from '../../components/user/Footer'

const Wishlist: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="p-16">
        <h1 className="text-header-600 text-3xl font-bold">Wishlist</h1>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist