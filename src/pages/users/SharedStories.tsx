import React from "react";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import Newsletter from "../../components/user/Newsletter";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline, IoArrowUpCircle } from "react-icons/io5";
import { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { IoMdClose } from "react-icons/io";
import StoryCard from "../../components/user/StoryCard";

interface Comment {
  id: number;
  authorId: number;
  authorName: string;
  authorImage: string;
  content: string;
  timestamp: Date;
}

interface Story {
  id: number;
  author: string;
  authorImage: string;
  location: string;
  content: string;
  image: string;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
}

const SharedStories: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showPostModal, setShowPostModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const [newStory, setNewStory] = useState({
    content: '',
    image: null as File | null,
  });

  // Updated initial stories data with more diverse content
  const initialStories: Story[] = [
    {
      id: 1,
      author: "Sarah Parker",
      authorImage: "https://randomuser.me/api/portraits/women/1.jpg",
      location: "Bali, Indonesia",
      content: "Found this amazing villa in Bali! The sunrise view from the infinity pool was absolutely breathtaking. Perfect for a peaceful morning yoga session. #TravelTrekz #BaliLife",
      image: "https://images.unsplash.com/photo-1573548842355-73bb50e50323",
      likes: 234,
      comments: [],
      isLiked: false
    },
    {
      id: 2,
      author: "Mike Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/2.jpg",
      location: "Santorini, Greece",
      content: "Working remotely has never been better! This cozy apartment with its traditional architecture and modern amenities is perfect for digital nomads. The sunset views are a bonus! 🌅",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      likes: 456,
      comments: [],
      isLiked: false
    },
    {
      id: 3,
      author: "Emma Wilson",
      authorImage: "https://randomuser.me/api/portraits/women/3.jpg",
      location: "Marrakech, Morocco",
      content: "Staying in this traditional riad has been a dream! The intricate tilework, peaceful courtyard, and amazing local breakfast make every morning special. 🌺 #MarrakechMagic",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
      likes: 789,
      comments: [],
      isLiked: false
    },
    {
      id: 4,
      author: "James Chen",
      authorImage: "https://randomuser.me/api/portraits/men/4.jpg",
      location: "Swiss Alps",
      content: "This mountain chalet exceeded all expectations! Waking up to snow-capped peaks and enjoying the cozy fireplace after a day of skiing. Pure bliss! ⛷️❄️",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      likes: 567,
      comments: [],
      isLiked: false
    },
    {
      id: 5,
      author: "Sofia Rodriguez",
      authorImage: "https://randomuser.me/api/portraits/women/5.jpg",
      location: "Tulum, Mexico",
      content: "Found paradise in this beachfront eco-resort! The sustainable design blends perfectly with nature, and falling asleep to ocean waves is pure magic. 🌊 #TulumVibes",
      image: "https://images.unsplash.com/photo-1501855901994-8b6e140da87f",
      likes: 892,
      comments: [],
      isLiked: false
    },
    {
      id: 6,
      author: "Alex Thompson",
      authorImage: "https://randomuser.me/api/portraits/men/6.jpg",
      location: "Tokyo, Japan",
      content: "Living like a local in this modern Tokyo apartment! The mix of traditional elements with cutting-edge technology is fascinating. Love the convenience of being near Shibuya! 🗼",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      likes: 645,
      comments: [],
      isLiked: false
    },
    {
      id: 7,
      author: "Isabella Costa",
      authorImage: "https://randomuser.me/api/portraits/women/7.jpg",
      location: "Amalfi Coast, Italy",
      content: "This cliffside villa is straight out of a movie! The terrace views of the Mediterranean are incredible, and the private beach access is a dream. 🍝🌊 #AmalfiDreams",
      image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca",
      likes: 934,
      comments: [],
      isLiked: false
    },
    {
      id: 8,
      author: "Thomas Anderson",
      authorImage: "https://randomuser.me/api/portraits/men/8.jpg",
      location: "Cape Town, South Africa",
      content: "What a find! This modern penthouse has the most stunning views of Table Mountain. Perfect spot for watching the sunset with a glass of local wine. 🌅🍷",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      likes: 723,
      comments: [],
      isLiked: false
    },
    {
      id: 9,
      author: "Lily Zhang",
      authorImage: "https://randomuser.me/api/portraits/women/9.jpg",
      location: "Maldives",
      content: "Living the overwater villa dream! The glass floor panels showing marine life below are mesmerizing. Snorkeling right from our private deck is incredible! 🐠🌊",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      likes: 1045,
      comments: [],
      isLiked: false
    },
    {
      id: 10,
      author: "Marcus Bennett",
      authorImage: "https://randomuser.me/api/portraits/men/10.jpg",
      location: "Scottish Highlands",
      content: "Found this gem of a castle-turned-hotel! The historic architecture, misty morning views, and cozy library make you feel like royalty. Perfect for a romantic getaway! 🏰",
      image: "https://images.unsplash.com/photo-1589489873423-d1745278a8f7",
      likes: 867,
      comments: [],
      isLiked: false
    }
  ];

  const [stories, setStories] = useState<Story[]>(initialStories);

  // Function to generate more stories
  const generateMoreStories = (pageNumber: number): Story[] => {
    return Array(5).fill(null).map((_, index) => ({
      id: pageNumber * 5 + index + 1,
      author: `User ${pageNumber * 5 + index + 1}`,
      authorImage: `https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${pageNumber + index}.jpg`,
      location: ["Paris, France", "Tokyo, Japan", "New York, USA", "Dubai, UAE", "London, UK"][index],
      content: `Amazing experience at this beautiful location! #Travel #Adventure ${pageNumber * 5 + index + 1}`,
      image: `https://source.unsplash.com/random/800x600?travel&sig=${pageNumber * 5 + index}`,
      likes: Math.floor(Math.random() * 1000),
      comments: [],
      isLiked: false
    }));
  };

  // Last element ref for infinite scroll
  const lastStoryElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreStories();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Load more stories
  const loadMoreStories = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if we've reached the limit (e.g., 10 pages)
      if (page >= 10) {
        setHasMore(false);
        return;
      }

      const newStories = generateMoreStories(page);
      setStories(prev => [...prev, ...newStories]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Error loading more stories:', error);
      toast.error('Failed to load more stories');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (storyId: number) => {
    setStories(stories.map(story => {
      if (story.id === storyId) {
        return {
          ...story,
          likes: story.isLiked ? story.likes - 1 : story.likes + 1,
          isLiked: !story.isLiked
        };
      }
      return story;
    }));
  };

  const handlePostStory = () => {
    if (!isAuthenticated) {
      toast.error('Please log in to share your story');
      return;
    }
    setShowPostModal(true);
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle story submission logic here
    setShowPostModal(false);
    toast.success('Story posted successfully!');
  };

  const handleComment = (storyId: number, comment: string) => {
    if (!isAuthenticated) {
      toast.error('Please log in to comment');
      return;
    }
    // Add comment logic here
    toast.success('Comment posted successfully!');
  };

  const handleShare = (storyId: number) => {
    // Add share logic here
    navigator.clipboard.writeText(`${window.location.origin}/stories/${storyId}`);
    toast.success('Story link copied to clipboard!');
  };

  // Add scroll listener to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 mt-16 lg:mt-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-header-600 mb-4">
            Travel Stories & Experiences
          </h1>
          <p className="text-header-400 max-w-2xl mx-auto">
            Discover amazing experiences and inspiring stories from our community of travelers and property enthusiasts.
          </p>
        </div>

        {/* Share Story Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handlePostStory}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
          >
            Share Your Story
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-8 md:gap-12">
          {stories.map((story, index) => (
            <div
              key={story.id}
              ref={index === stories.length - 1 ? lastStoryElementRef : null}
            >
              <StoryCard
                story={story}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
              />
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* End message */}
        {!hasMore && !loading && (
          <div className="text-center py-8">
            <p className="text-header-400 text-lg">You've reached the end! 🎉</p>
            <button
              onClick={scrollToTop}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Back to top
            </button>
          </div>
        )}

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
            showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Scroll to top"
        >
          <IoArrowUpCircle size={24} />
        </button>

        {/* Post Story Modal */}
        {showPostModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-lg w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-header-600">Share Your Story</h2>
                <button
                  onClick={() => setShowPostModal(false)}
                  className="text-header-400 hover:text-header-600"
                >
                  <IoMdClose size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmitStory} className="space-y-4">
                <textarea
                  placeholder="Share your experience..."
                  className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:border-blue-600"
                  value={newStory.content}
                  onChange={(e) => setNewStory(prev => ({ ...prev, content: e.target.value }))}
                />
                <div className="border-2 border-dashed rounded-lg p-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewStory(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
                    className="w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Post Story
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SharedStories; 