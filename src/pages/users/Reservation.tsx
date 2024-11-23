import React, { useState, useEffect } from 'react';
import Navbar from '../../components/user/Navbar';
import Footer from '../../components/user/Footer';
import { useLocation } from 'react-router-dom';

const Reservation: React.FC = () => {
  const { state } = useLocation();
  const [upcoming, setUpcoming] = useState(state?.reservation ? [state.reservation] : []);
  const [past, setPast] = useState([]);

  useEffect(() => {
    const now = new Date();
    const newPast = upcoming.filter(reservation => new Date(reservation.endDate) <= now);
    const newUpcoming = upcoming.filter(reservation => new Date(reservation.endDate) > now);

    // Update states only if they change
    if (newPast.length > 0 || newUpcoming.length > 0) {
      setPast(prevPast => [...prevPast, ...newPast]);
      setUpcoming(newUpcoming);
    }
  }, [upcoming]);

  return (
    <>
      <Navbar />
      <div className='p-16 flex flex-col gap-6'>
        <h1 className='text-header-600 text-3xl font-bold'>Reservation</h1>
        <div role="tablist" className="tabs tabs-bordered">
          <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold" aria-label="Upcoming" defaultChecked/>
          <div role="tabpanel" className="tab-content p-10">
            {upcoming.length > 0 ? upcoming.map((res, idx) => (
              <div key={idx} className='flex items-center justify-between'>
                <div>
                    <img src={res.images} alt="" />
                    <div>
                        <h1>{res.title}</h1>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1'>
                                <h1>Check-in:</h1>
                                <p>12-Oct-2024</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <h1>Duration:</h1>
                                <p>2 weeks</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <h1>Guest:</h1>
                                <p>2</p>
                            </div>
                        </div>
                        <p className='text-header-600 font-semibold'>$ 3000</p>
                    </div>
                </div>
                <button className='bg-blue-600 py-1 px-4 text-white rounded-2xl'>Cancel Reservations</button>
              </div>
            )) : "No upcoming reservations"}
          </div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold" aria-label="Past"/>
          <div role="tabpanel" className="tab-content p-10">
            {past.length > 0 ? past.map((res, idx) => (
              <div key={idx} className='flex items-center justify-between'>
              <div>
                  <img src={res.images} alt="" />
                  <div>
                      <h1>{res.title}</h1>
                      <div className='flex items-center gap-3'>
                          <div className='flex items-center gap-1'>
                              <h1>Check-in:</h1>
                              <p>12-Oct-2024</p>
                          </div>
                          <div className='flex items-center gap-1'>
                              <h1>Duration:</h1>
                              <p>2 weeks</p>
                          </div>
                          <div className='flex items-center gap-1'>
                              <h1>Guest:</h1>
                              <p>2</p>
                          </div>
                      </div>
                      <p className='text-header-600 font-semibold'>$ 3000</p>
                  </div>
              </div>
            </div>
            )) : "No past reservations"}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;
