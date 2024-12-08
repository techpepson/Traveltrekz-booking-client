import React, { useRef, useState } from 'react'
import Navbar from '../../components/user/Navbar'
import Hero from '../../components/user/Hero'
import PropertySection from '../../components/user/PropertySection'
import Banner from '../../components/user/Banner'
import { properties } from '../../dummy-data/home-property'
import Property from '../../components/user/Property'
import Banner2 from '../../components/user/Banner2'
import Guide from '../../components/user/Guide'
import Banner3 from '../../components/user/Banner3'
import Discover from '../../assets/user/discover.png'
import Newsletter from '../../components/user/Newsletter'
import Footer from '../../components/user/Footer'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Home: React.FC = () => {
  const [displayCount, _] = useState(6);
  
  const latestScrollRef = useRef(null);
  const nearbyScrollRef = useRef(null);
  const topRatedScrollRef = useRef(null);
  const scrollLeft = (scrollRef: React.RefObject<HTMLElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = (scrollRef: React.RefObject<HTMLElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="py-6 md:py-16 max-[340px]:mt-6">
        <div className="mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-6 lg:gap-12">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-2 md:gap-5">
                <h1 className="text-header-600 max-[340px]:text-lg max-sm:text-xl md:text-3xl lg:text-4xl font-bold max-[340px]:w-[50vw] max-sm:w-[48vw] md:w-[40vw] lg:max-w-[30vw] leading-[1.2]">
                  <span className="relative inline-block text-blue-600">
                    Latest
                    <svg
                      className="absolute left-0 right-0 -bottom-2 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 10"
                    >
                      <path
                        fill="none"
                        stroke="#0077B6"
                        strokeWidth="4"
                        d="M0,5 Q25,0 50,5 T100,5"
                      />
                    </svg>
                  </span>{" "}
                  on the Property Listing
                </h1>
                <div className="h-1 w-32 bg-blue-600" />
              </div>
              <div className="flex gap-1">
                <MdChevronLeft
                  onClick={() => scrollLeft(latestScrollRef)}
                  className="cursor-pointer text-3xl text-blue-600"
                />
                <MdChevronRight
                  onClick={() => scrollRight(latestScrollRef)}
                  className="cursor-pointer text-3xl text-blue-600"
                />
              </div>
            </div>
            <PropertySection
              properties={properties.latest.map(property => ({...property, id: property.id.toString()}))}
              scrollRef={latestScrollRef}
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-12">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-2 md:gap-5">
                <h1 className="text-header-600 max-[340px]:text-lg max-sm:text-xl md:text-3xl max-[340px]:w-[50vw] max-sm:w-[48vw] lg:text-4xl font-bold max-w-72 leading-[1.2]">
                  <span className="relative inline-block text-blue-600">
                    Nearby
                    <svg
                      className="absolute left-0 right-0 -bottom-2 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 10"
                    >
                      <path
                        fill="none"
                        stroke="#0077B6"
                        strokeWidth="4"
                        d="M0,5 Q25,0 50,5 T100,5"
                      />
                    </svg>
                  </span>{" "}
                  Listed Properties
                </h1>
                <div className="h-1 w-32 bg-blue-600" />
              </div>
              <div className="flex gap-1">
                <MdChevronLeft
                  onClick={() => scrollLeft(nearbyScrollRef)}
                  className="cursor-pointer text-3xl text-blue-600"
                />
                <MdChevronRight
                  onClick={() => scrollRight(nearbyScrollRef)}
                  className="cursor-pointer text-3xl text-blue-600"
                />
              </div>
            </div>
            <PropertySection
              properties={properties.nearby.map(property => ({...property, id: property.id.toString()}))}
              scrollRef={nearbyScrollRef}
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-12">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-2 md:gap-5">
                <h1 className="text-header-600 max-[340px]:text-lg max-sm:text-xl md:text-3xl max-[340px]:w-[50vw] max-sm:w-[48vw] lg:text-4xl font-bold max-w-72 leading-[1.2]">
                  <span className="relative inline-block text-blue-600">
                    Top
                    <svg
                      className="absolute left-0 right-0 -bottom-2 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 10"
                    >
                      <path
                        fill="none"
                        stroke="#0077B6"
                        strokeWidth="4"
                        d="M0,5 Q25,0 50,5 T100,5"
                      />
                    </svg>
                  </span>{" "}
                  Rated Properties
                </h1>
                <div className="h-1 w-32 bg-blue-600" />
              </div>
              <div className="flex gap-1">
                <MdChevronLeft
                  onClick={() => scrollLeft(topRatedScrollRef)}
                  className="cursor-pointer text-3xl text-blue-600"
                />
                <MdChevronRight
                  onClick={() => scrollRight(topRatedScrollRef)}
                  className="cursor-pointer text-3xl text-blue-600"
                />
              </div>
            </div>
            <PropertySection
              properties={properties.topRated.map(property => ({...property, id: property.id.toString()}))}
              scrollRef={topRatedScrollRef}
            />
          </div>
          <Banner />
          <div className="flex flex-col gap-6 lg:gap-12 mt-16">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-2 md:gap-5">
                <h1 className="text-header-600 max-[340px]:text-lg max-sm:text-xl md:text-3xl max-[340px]:w-[50vw] max-sm:w-[48vw] lg:text-4xl font-bold max-w-[45vw] lg:max-w-[35vw] xl:max-w-[30vw] leading-[1.2]">
                  <span className="relative inline-block text-blue-600">
                    Featured
                    <svg
                      className="absolute left-0 right-0 -bottom-2 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 10"
                    >
                      <path
                        fill="none"
                        stroke="#0077B6"
                        strokeWidth="4"
                        d="M0,5 Q25,0 50,5 T100,5"
                      />
                    </svg>
                  </span>{" "}
                  Properties on our Listing
                </h1>
                <div className="h-1 w-32 bg-blue-600" />
              </div>
              <div>{/* Arrows */}</div>
            </div>
            <Property displayCount={displayCount} />
            <Banner2 />
          </div>
          <div className="flex flex-col gap-6 lg:gap-12 mt-10 md:mt-16">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-4 md:gap-9">
                <h1 className="text-header-600 max-[340px]:text-lg max-sm:text-xl md:text-3xl max-[340px]:w-[50vw] max-sm:w-[50vw] lg:text-4xl font-bold md:max-w-[35vw] xl:max-w-[30vw] leading-[1.2]">
                  Property Rental
                  <span className="relative inline-block text-blue-600">
                    Guides
                    <svg
                      className="absolute left-0 right-0 -bottom-2 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 10"
                    >
                      <path
                        fill="none"
                        stroke="#0077B6"
                        strokeWidth="4"
                        d="M0,5 Q25,0 50,5 T100,5"
                      />
                    </svg>
                  </span>{" "}
                  &
                  <span className="relative inline-block text-blue-600">
                    Tips
                    <svg
                      className="absolute left-0 right-0 -bottom-2 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 10"
                    >
                      <path
                        fill="none"
                        stroke="#0077B6"
                        strokeWidth="4"
                        d="M0,5 Q25,0 50,5 T100,5"
                      />
                    </svg>
                  </span>
                </h1>
                <div className="h-1 w-24 md:w-44 bg-blue-600" />
              </div>
              <div>{/* Arrows */}</div>
            </div>
            <Guide />
            <Banner3 />
          </div>
          <div className="my-12 flex flex-col gap-4 md:flex-row items-center justify-between lg:gap-28 max-sm:px-4">
            <div className="flex flex-col gap-2 md:gap-5 justify-center">
              <div className="flex flex-col gap-2 md:gap-5 max-sm:px-2">
                <h1 className="text-header-600 max-[340px]:text-lg max-sm:text-xl md:text-3xl max-[340px]:w-[60vw] max-sm:w-[60vw] lg:text-4xl font-bold md:max-w-[35vw] xl:max-w-[35vw] leading-[1.2]">
                  <span className="relative inline-block text-blue-600">
                    Discover
                    <svg
                      className="absolute left-0 right-0 -bottom-2 w-full h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 10"
                    >
                      <path
                        fill="none"
                        stroke="#0077B6"
                        strokeWidth="4"
                        d="M0,5 Q25,0 50,5 T100,5"
                      />
                    </svg>
                  </span>{" "}
                  More About Property Rental
                </h1>
                <div className="h-1 w-24 md:w-44 bg-blue-600" />
              </div>
              <p className="text-header-400 max-md:text-sm max-sm:w-screen max-sm:px-2 max-lg:w-[60vw]">
                Unlock the potential of your property with TravelTrekz. Whether
                you're a seasoned host or just starting out, we'll guide you
                through every step — from creating a standout listing to
                providing exceptional guest experiences. With our seamless tools
                and dedicated support, renting your space has never been easier
                or more rewarding.
              </p>
              <div className="text-header-600 text-lg font-semibold flex items-center gap-2 max-sm:px-2 md:gap-5">
                <button className="max-sm:text-sm">Ask A Question</button>
                <button className="max-sm:text-sm">Find A Property</button>
              </div>
              <button className="md:text-lg font-semibold w-fit max-sm:mx-2 bg-blue-600 text-white px-4 md:py-2 py-1 rounded-full">
                Discover More
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-full w-full">
              <img
                src={Discover}
                alt="discover"
                className="lg:w-[80%] w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-100 hover:opacity-0 md:w-[80%] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home