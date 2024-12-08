import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  review: string;
  hostingSince: string;
  propertyType: string;
  earnings: string;
}

const testimonialData: TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
    review: "Hosting on TravelTrekz has been life-changing! The platform is incredibly user-friendly, and the support team is always there when I need them.",
    hostingSince: "2021",
    propertyType: "Luxury Apartment",
    earnings: "$45,000+"
  },
  {
    name: "Michael Chen",
    location: "Vancouver, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 4,
    review: "As a property investor, TravelTrekz has made it easy to manage multiple listings. Their tools for pricing optimization and calendar management are top-notch.",
    hostingSince: "2020",
    propertyType: "Multiple Properties",
    earnings: "$80,000+"
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
    review: "The flexibility TravelTrekz offers is unmatched. The platform's security features give me peace of mind, and the guest screening process is excellent.",
    hostingSince: "2022",
    propertyType: "Beachfront Villa",
    earnings: "$35,000+"
  },
  {
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
    review: "TravelTrekz has helped me turn my family property into a successful business. The international exposure has brought guests from all corners of the world.",
    hostingSince: "2021",
    propertyType: "Traditional House",
    earnings: "$52,000+"
  },
  {
    name: "Lisa Thompson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    rating: 4,
    review: "The automated messaging and check-in systems save me so much time. I can manage my properties remotely while maintaining high guest satisfaction.",
    hostingSince: "2020",
    propertyType: "City Apartments",
    earnings: "$67,000+"
  }
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Hosts Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful hosts who have transformed their properties into thriving businesses with TravelTrekz
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            240: {
              slidesPerView: 1,
              spaceBetween: 15,
              },
              640: {
              slidesPerView: 2,
              spaceBetween: 20,
              },
              1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              },
          }}
          className="pb-12"
        >
          {[...testimonialData, ...testimonialData].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4 italic min-h-[80px]">
                    "{testimonial.review}"
                  </p>

                  <div className="border-t pt-4 mt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Hosting since</p>
                        <p className="font-semibold">{testimonial.hostingSince}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Property Type</p>
                        <p className="font-semibold">{testimonial.propertyType}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500">Annual Earnings</p>
                        <p className="font-semibold text-green-600">{testimonial.earnings}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      
      </div>
    </section>
  );
};

export default Testimonial;
