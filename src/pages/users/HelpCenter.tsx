import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import Newsletter from "../../components/user/Newsletter";
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import HelpHero from "../../assets/help/help-hero.png";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      category: "booking",
      question: "How do I make a reservation?",
      answer: "Making a reservation is easy! Simply search for your desired location and dates, select a property, and click 'Book Now'. Follow the prompts to complete your booking. You'll need to be logged in to finalize the reservation."
    },
    {
      category: "booking",
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Payment options may vary by region."
    },
    {
      category: "cancellation",
      question: "What is your cancellation policy?",
      answer: "Cancellation policies vary by property and booking type. Generally, cancellations made 48 hours before check-in are eligible for a full refund. Please check the specific policy for your booking in the reservation details."
    },
    {
      category: "hosting",
      question: "How do I become a host?",
      answer: "To become a host, click on 'Become a Host' in the navigation menu. You'll need to create an account, verify your identity, and provide details about your property. Our team will review your listing before it goes live."
    },
    {
      category: "hosting",
      question: "How do I set my property pricing?",
      answer: "You have full control over your property pricing. We provide pricing recommendations based on location, seasonality, and market demand. You can set base rates, special offers, and seasonal adjustments through your host dashboard."
    },
    {
      category: "account",
      question: "How do I reset my password?",
      answer: "To reset your password, click 'Login', then 'Forgot Password'. Enter your email address, and we'll send you instructions to create a new password. For security, the reset link expires after 24 hours."
    },
    {
      category: "safety",
      question: "What safety measures are in place?",
      answer: "We prioritize user safety through verified profiles, secure payments, 24/7 customer support, and property verification. All hosts must meet our safety standards, and we encourage guests to review property safety features before booking."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "booking", "cancellation", "hosting", "account", "safety"];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HelpHero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl">
          <h1 className="text-3xl max-md:mt-10 md:text-4xl font-bold mb-6">How can we help you?</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-2 md:py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 pl-14"
            />
            <MdSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <IoIosArrowDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    openItems.includes(index) ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? "py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-8">
            Our support team is always ready to assist you
          </p>
          <a
            href="mailto:support@traveltrekz.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </>
  );
};

export default HelpCenter; 