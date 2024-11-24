import React, { useState, useEffect } from 'react';
import Reservation from '../../pages/host/ReservationHost';

const ReservationPage: React.FC = () => {
  const [reservations, setReservations] = useState([]);
  const [upcomingReservations, setUpcomingReservations] = useState([]);
  const [pastReservations, setPastReservations] = useState([]);

  useEffect(() => {
    // Sample reservation data with future and past dates for demonstration
    const now = new Date();
    const sampleReservations = [
      {
        id: 1,
        title: "City Penthouse",
        date: new Date(now.getFullYear(), now.getMonth() + 1, 1),
      },
      {
        id: 2,
        title: "Beach House",
        date: new Date(now.getFullYear(), now.getMonth() - 1, 1),
      },
    ];
    setReservations(sampleReservations);
  }, []);

  useEffect(() => {
    const now = new Date();
    setUpcomingReservations(reservations.filter((res) => res.date >= now));
    setPastReservations(reservations.filter((res) => res.date < now));
  }, [reservations]);

  return (
    <Reservation
      upcomingReservations={upcomingReservations}
      pastReservations={pastReservations}
    />
  );
};

export default ReservationPage;
