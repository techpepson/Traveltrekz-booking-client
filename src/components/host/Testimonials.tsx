import { Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Import modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css'; // Core styles
import 'swiper/css/scrollbar'; // Scrollbar styles
import 'swiper/css/autoplay'; // Autoplay styles

const service = [
  { image: 'https://via.placeholder.com/300', name: 'Service 1', description: "Hosting on TravelTrekz has been life-changing! Managing bookings is a breeze, and I’ve met amazing travelers." },
  { image: 'https://via.placeholder.com/300', name: 'Service 2', description: "I love how easy hosting is with TravelTrekz. The platform helped me earn more than I ever expected!" },
  { image: 'https://via.placeholder.com/300', name: 'Service 3', description: "Thanks to TravelTrekz, my guesthouse is always booked. The flexibility and tools are fantastic!" },
  { image: 'https://via.placeholder.com/300', name: 'Service 4', description: "TravelTrekz gives my property global exposure. I’ve hosted guests from all over the world!" },
  { image: 'https://via.placeholder.com/300', name: 'Service 5', description: "TravelTrekz made hosting simple and rewarding. My property is now a top-rated stay in Accra!" },
  // Add more services as needed
];

export const Testimonials = () => {
  return (
    <div className='w-full gap-8 mt-24 mb-10 text-header-600'>
      <h1 className='text-4xl font-bold'><span className='text-blue-600'>Testimonials</span> From Our Host</h1>
      <Swiper
        modules={[Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ 
          delay: 0, // No delay between slides 
          disableOnInteraction: false 
        }}
        speed={3500} // Smooth slide transition
        loop={true} // Enables continuous loop
        className='md:mx-10 mx-5 my-6'
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
      >
        {service.map((item, id) => (
          <SwiperSlide key={id} className="p-4 bg-white rounded-lg shadow-md">
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-600">{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
