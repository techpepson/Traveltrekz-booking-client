import React from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import Newsletter from "../../components/user/Newsletter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Import images from index file
import {
  HeroImage,
  MissionImage,
  VisionImage,
  CommunityImage,
  InnovationImage,
  TrustImage
} from "../../assets/about";

interface DeveloperProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const AboutUs: React.FC = () => {
  const developers: DeveloperProfile[] = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Full-stack developer with expertise in React, TypeScript, and Node.js. Passionate about creating seamless user experiences.",
      social: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        email: "john@example.com"
      }
    },
    // Add more developer profiles as needed
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About TravelTrekz</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting travelers with exceptional properties and creating unforgettable experiences worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission & Vision Section with Images */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-xl">
            <img 
              src={MissionImage} 
              alt="Our Mission" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/90">
                To revolutionize the way people discover and book accommodations by providing a platform 
                that emphasizes authentic experiences, community engagement, and seamless connectivity.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img 
              src={VisionImage} 
              alt="Our Vision" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/90">
                To become the world's most trusted platform for travel accommodation, where every booking 
                leads to memorable experiences and meaningful connections.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section with Icons and Images */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-header-600 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src={CommunityImage} 
                alt="Community" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent hover:from-blue-900/80 transition-colors duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">Community First</h3>
                <p className="text-white/90">Building and nurturing a vibrant community of travelers and hosts.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src={InnovationImage} 
                alt="Innovation" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent hover:from-blue-900/80 transition-colors duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-white/90">Continuously improving our platform with cutting-edge technology.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src={TrustImage} 
                alt="Trust" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent hover:from-blue-900/80 transition-colors duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">Trust & Safety</h3>
                <p className="text-white/90">Ensuring secure and reliable experiences for all users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-header-600 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((dev, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={dev.image} 
                    alt={dev.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-header-600 mb-1">{dev.name}</h3>
                  <p className="text-blue-600 mb-3">{dev.role}</p>
                  <p className="text-header-400 mb-4">{dev.bio}</p>
                  <div className="flex gap-4">
                    <a href={dev.social.github} target="_blank" rel="noopener noreferrer" 
                       className="text-header-600 hover:text-blue-600">
                      <FaGithub size={20} />
                    </a>
                    <a href={dev.social.linkedin} target="_blank" rel="noopener noreferrer"
                       className="text-header-600 hover:text-blue-600">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={dev.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="text-header-600 hover:text-blue-600">
                      <FaTwitter size={20} />
                    </a>
                    <a href={`mailto:${dev.social.email}`}
                       className="text-header-600 hover:text-blue-600">
                      <MdEmail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section with Background */}
        <section className="relative rounded-2xl overflow-hidden mb-16">
          <img 
            src={HeroImage} 
            alt="Contact Us" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-white/90 mb-8 max-w-2xl">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <a 
              href="mailto:contact@traveltrekz.com"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutUs; 