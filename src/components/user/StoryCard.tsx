import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

interface StoryCardProps {
  story: {
    id: number;
    author: string;
    authorImage: string;
    location: string;
    content: string;
    image: string;
    likes: number;
    comments: number;
    isLiked: boolean;
  };
  onLike: (id: number) => void;
  onComment: (id: number, comment: string) => void;
  onShare: (id: number) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onLike, onComment, onShare }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(story.id, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Story Header */}
      <div className="p-4 flex items-center gap-4">
        <img
          src={story.authorImage}
          alt={story.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-header-600">{story.author}</h3>
          <p className="text-sm text-header-400">{story.location}</p>
        </div>
      </div>

      {/* Story Image */}
      <div className="relative">
        <img
          src={story.image}
          alt="Story"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Story Content */}
      <div className="p-4">
        <p className="text-header-600 mb-4">{story.content}</p>
        
        {/* Interaction Buttons */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onLike(story.id)}
            className="flex items-center gap-2 text-header-600 hover:text-blue-600"
          >
            {story.isLiked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
            <span>{story.likes}</span>
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 text-header-600 hover:text-blue-600"
          >
            <FaRegComment />
            <span>{story.comments}</span>
          </button>
          <button 
            onClick={() => onShare(story.id)}
            className="flex items-center gap-2 text-header-600 hover:text-blue-600"
          >
            <IoPaperPlaneOutline />
            <span>Share</span>
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-4 border-t pt-4">
            <form onSubmit={handleSubmitComment} className="flex gap-2 mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Post
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryCard;