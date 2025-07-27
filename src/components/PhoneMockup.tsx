import React, { useState } from "react";
import "./PhoneMockup.css";
import type { Post } from "../types/index.ts";
import CommentsView from "./CommentsView.tsx";
import DMView from "./DMView.tsx";
import {
  IoArrowBack,
  IoEllipsisHorizontal,
  IoHeart,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoHomeOutline,
  IoSearchOutline,
  IoAddOutline,
  IoPersonOutline,
} from "react-icons/io5";

interface PhoneMockupProps {
  selectedPost?: Post;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ selectedPost }) => {
  const [activeTab, setActiveTab] = useState("Post");
  const [showComments, setShowComments] = useState(false);

  // Default post data if no post is selected
  const defaultPost: Post = {
    id: 2,
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMjVBRDcwIi8+CjxyZWN0IHk9IjgwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMjVBRDcwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTIwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+V2hhdHNBcHAgaGl0cyAzIEJpbGxpb24gVXNlcnMhPC90ZXh0Pgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIxMDAiIHI9IjIwIiBmaWxsPSIjRkZGRkZGIi8+CjxjaXJjbGUgY3g9IjMyMCIgY3k9IjgwIiByPSIxNSIgZmlsbD0iI0ZGRkZGRiIvPgo8Y2lyY2xlIGN4PSIzNDAiIGN5PSIxMjAiIHI9IjEwIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0yMDAgMzAwIEwyNTAgMzUwIEwyMDAgMzUwIFoiIGZpbGw9IiMyNUFENzAiLz4KPHN2ZyB4PSIxNzUiIHk9IjI3NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIj4KPHBhdGggZD0iTTE3LjQ3MiAxNC4wMDJjLjM5OC0uNDczLjEwMi0xLjQ1LS40NDMtMS40NWgtNC4wNzVjLSUyLjU0NSAwLTQuNjA0IDIuMDYtNC42MDQgNC42MDR2NC4wNzVjMCAyLjU0NSAyLjA2IDQuNjA0IDQuNjA0IDQuNjA0aDQuMDc1YzIuNTQ1IDAgNC42MDQtMi4wNiA0LjYwNC00LjYwNHYtNC4wNzVjMC0uMjE5LS4wMTgtLjQzNS0uMDUyLS42NDdsMS4xNzQtMS4xNzR6bS0xLjQ1LTEuNDVjLS4zOTgtLjQ3My0xLjA0NS0uNTUyLTEuNTE4LS4xNTQtLjQ3My4zOTgtLjU1MiAxLjA0NS0uMTU0IDEuNTE4bC0xLjE3NCAxLjE3NGMtLjIxOS0uMDM0LS40MjgtLjA1Mi0uNjQ3LS4wNTJoLTQuMDc1Yy0yLjU0NSAwLTQuNjA0IDIuMDYtNC42MDQgNC42MDR2NC4wNzVjMCAyLjU0NSAyLjA2IDQuNjA0IDQuNjA0IDQuNjA0aDQuMDc1YzIuNTQ1IDAgNC42MDQtMi4wNiA0LjYwNC00LjYwNHYtNC4wNzVjMC0uMjE5LS4wMTgtLjQzNS0uMDUyLS42NDdsMS4xNzQtMS4xNzR6Ii8+Cjwvc3ZnPgo8L3N2Zz4K",
    user: "botspacehq",
    caption:
      "WhatsApp hits 3 Billion Users! 🎉 The messaging giant continues to dominate the global communication landscape. Green balloons and celebrations everywhere! 🎈",
    hashtags: "#WhatsApp #3Billion #Messaging #TechNews #BotSpace",
    likes: 18,
    comments: 22,
  };

  const currentPost = selectedPost || defaultPost;

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="phone-mockup">
      <div className="phone-screen">
        <div className="phone-header">
          <div className="back-arrow">
            <IoArrowBack size={20} />
          </div>
          <div className="header-title">
            <div className="brand-name">BOTSPACEHQ</div>
            <div className="subtitle">
              {activeTab === "Post" && "Posts"}
              {activeTab === "Comments" && "Comments"}
              {activeTab === "DM" && "Direct Messages"}
            </div>
          </div>
        </div>

        <div className="post-container">
          {activeTab === "Post" && (
            <>
              {/* Background Post - Always visible */}
              <div
                className={`post-background ${showComments ? "dimmed" : ""}`}
              >
                <div className="post-header">
                  <div className="user-info">
                    <div className="profile-pic">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt={currentPost.user}
                      />
                    </div>
                    <span className="username">{currentPost.user}</span>
                  </div>
                  <div className="more-options">
                    <IoEllipsisHorizontal size={20} />
                  </div>
                </div>

                <div className="post-image">
                  <img src={currentPost.image} alt="Post content" />
                </div>

                <div className="post-actions">
                  <div className="action-buttons">
                    <button className="action-btn">
                      <IoHeart size={24} />
                    </button>
                    <span className="likes-count">{currentPost.likes}</span>
                    <button className="action-btn" onClick={handleCommentClick}>
                      <IoChatbubbleOutline size={24} />
                    </button>
                    <span className="comments-count">
                      {currentPost.comments}
                    </span>
                    <button className="action-btn">
                      <IoPaperPlaneOutline size={24} />
                    </button>
                  </div>
                  <button className="bookmark-btn">
                    <IoBookmarkOutline size={24} />
                  </button>
                </div>

                <div className="post-content">
                  <div className="post-text">
                    <span className="username">{currentPost.user}</span>
                    <span className="verified-badge">☑️</span>
                    <span className="text">
                      {currentPost.id === 2
                        ? "WhatsApp hits 3 Billion Users! 🎉 Connecting 3 billion people worldwide. Meta's AI and business tools are revolutionizing how we communicate. BotSpace is proud to be a Meta Business Partner! 🚀"
                        : currentPost.caption}
                    </span>
                  </div>
                  <div className="hashtags">{currentPost.hashtags}</div>
                  <div className="view-comments" onClick={handleCommentClick}>
                    View all comments
                  </div>
                  <div className="post-time">13 hours ago</div>
                </div>
              </div>

              {/* Comments Overlay */}
              {showComments && (
                <div className="comments-overlay">
                  <CommentsView
                    post={currentPost}
                    onClose={() => setShowComments(false)}
                  />
                </div>
              )}
            </>
          )}

          {activeTab === "Comments" && <CommentsView post={currentPost} />}

          {activeTab === "DM" && <DMView />}
        </div>

        <div className="phone-bottom-nav">
          <button className="nav-item">
            <IoHomeOutline size={24} />
          </button>
          <button className="nav-item">
            <IoSearchOutline size={24} />
          </button>
          <button className="nav-item">
            <IoAddOutline size={24} />
          </button>
          <button className="nav-item">
            <IoHeart size={24} />
          </button>
          <button className="nav-item">
            <IoPersonOutline size={24} />
          </button>
        </div>
      </div>

      <div className="bottom-tabs">
        {["Post", "Comments", "DM"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhoneMockup;
