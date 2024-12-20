import React from "react";
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import HeroHost from "../../components/host/HeroHost";
import HomeIcon from "../../assets/home.svg";
import PriceIcon from "../../assets/price.svg";
import SafeIcon from "../../assets/safe.svg";
import PaidIcon from "../../assets/paid.svg";
import Listing from "../../assets/listing.svg";
import Host from "../../assets/host/host.png";
import Support from "../../assets/support.svg";
import Banner from "../../components/user/Banner";
import Testimonial from "../../components/host/Testimonials";

const Features = [
  {
    id: 1,
    title: "List Your Space",
    description:
      "Easily create a listing with photos and details about your property.",
    image: HomeIcon,
  },
  {
    id: 2,
    title: "Set Your Price",
    description: "You control how much you want to charge per night.",
    image: PriceIcon,
  },
  {
    id: 3,
    title: "Host With Confidence",
    description:
      "We handle bookings and provide 24/7 support for you and your guests.",
    image: SafeIcon,
  },
  {
    id: 4,
    title: "Get Paid",
    description:
      "Earn money with each booking, directly deposited to your account.",
    image: PaidIcon,
  },
];

const Hosting = [
  {
    id: 1,
    title: "Flexible Listings",
    message: "You control availability, pricing, and guest rules.",
    icon: Listing,
  },
  {
    id: 2,
    title: "Secure Payment",
    message: "Hassle-free, timely payments for every stay.",
    icon: SafeIcon,
  },
  {
    id: 3,
    title: "24/7 Support",
    message: "Dedicated support team to help with any issues.",
    icon: Support,
  },
  {
    id: 4,
    title: "Boost Your Income",
    message: "Maximize earnings by listing your space to a global audience.",
    icon: PriceIcon,
  },
];

const HomeHost: React.FC = () => {
  return (
    <>
      <NavbarHost />
      <HeroHost />
      <div className="mx-8 md:mx-20 py-12">
        <h1 className="font-bold text-3xl pt-4 pb-10 w-[350px]">
          How <span className="text-blue-600">Hosting</span> Works With
          TravelTrekz
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
          {Features.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-blue-200 bg-opacity-40 p-2 md:p-4 flex flex-col gap-1 items-center rounded-xl"
              >
                <img src={item.image} alt={item.title} className="w-16 h-16" />
                <h1 className="font-bold text-center">{item.title}</h1>
                <p className="text-sm px-4 text-center">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-32 my-20 justify-between">
          <div className="flex flex-col gap-8 md:gap-12">
            <h1 className="text-4xl font-bold">Why Host With Us</h1>
            <div className="grid grid-cols-2 gap-4 md:gap-16">
              {Hosting.map((item) => {
                return (
                  <div className="flex items-center justify-center flex-col">
                    <img src={item.icon} alt={item.title} />
                    <h1 className="font-semibold">{item.title}</h1>
                    <p className="text-center text-sm">{item.message}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <img src={Host} alt="Host with us" className="w-[500px]" />
        </div>
        <Banner />
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default HomeHost;
