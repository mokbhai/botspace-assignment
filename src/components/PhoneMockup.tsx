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

  // Default post data if no post is selected
  const defaultPost: Post = {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    user: "botspacehq",
    caption:
      "When your mom turns into your marketing manager 😅 But she's right... BotSpace is kinda genius. 😉",
    hashtags: "#BotSpace #MomKnowsBest #ContentCreatorLife",
    likes: 71,
    comments: 22,
  };

  const currentPost = selectedPost || defaultPost;

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
                  <button className="action-btn">
                    <IoChatbubbleOutline size={24} />
                  </button>
                  <span className="comments-count">{currentPost.comments}</span>
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
                  <span className="text">{currentPost.caption}</span>
                </div>
                <div className="hashtags">{currentPost.hashtags}</div>
                <div className="view-comments">View all comments</div>
                <div className="post-time">13 hours ago</div>
              </div>
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
