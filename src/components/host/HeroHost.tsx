import React from 'react'
import Hero from "../../assets/host/herohost.png"

const HeroHost: React.FC = () => {
  return (
    <div className="lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[75vh] md:h-[60vh] flex items-center w-screen">
      <img src={Hero} className="bg-cover bg-center relative w-full h-full" />
      <div className="absolute max-[340px]:mt-10 flex flex-col gap-12 text-white px-12 w-[890px]">
        <div className="flex flex-col gap-2">
            <h1 className='text-5xl font-bold'>Try Hosting With Us</h1>
            <p className="text-lg">Become a TravelTrekz host and turn your property into a thriving rental. Start earning today with our simple, stress-free process.</p>
        </div>
        <button className='bg-blue-600 py-2 px-4 rounded-full w-fit'>Let's Get Started</button>
      </div>
    </div>
  );
};

export default HeroHost