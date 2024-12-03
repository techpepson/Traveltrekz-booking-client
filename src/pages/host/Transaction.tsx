import React, { useState, useEffect } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import { useLocation } from 'react-router-dom';

const Transaction: React.FC = () => {
  

  return (
    <>
      <Navbar />
      <div className='md:p-16 p-8 flex flex-col gap-6'>
        <h1 className='text-header-600 text-3xl font-bold'>Transaction History</h1>
        <div role="tablist" className="tabs tabs-bordered">
          <input type="radio" name="my_tabs_1" role="tab" className="tab md:text-lg font-semibold" aria-label="Completed" defaultChecked/>
          <div role="tabpanel" className="tab-content p-10">
            
          </div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab md:text-lg font-semibold" aria-label="Upcoming"/>
          <div role="tabpanel" className="tab-content p-10">
            
          </div>
          <input type="radio" name="my_tabs_1" role="tab" className="tab md:text-lg font-semibold" aria-label="Gross Earning"/>
          <div role="tabpanel" className="tab-content p-10">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transaction;
