import React from "react";
import "./Sidebar.css";
import type { Post } from "../types/index.ts";

interface SidebarProps {
  onPostSelect: (post: Post) => void;
  selectedPostId?: number;
}

const Sidebar: React.FC<SidebarProps> = ({ onPostSelect, selectedPostId }) => {
  const posts: Post[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
      user: "botspacehq",
      caption:
        "When your mom turns into your marketing manager 😅 But she's right... BotSpace is kinda genius. 😉",
      hashtags: "#BotSpace #MomKnowsBest #ContentCreatorLife",
      likes: 71,
      comments: 22,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
      user: "botspacehq",
      caption:
        "Building the future of automated content creation! 🚀 Who else is excited about AI-powered social media? Drop your thoughts below! ⬇️",
      hashtags: "#AI #Automation #SocialMedia #TechLife",
      likes: 124,
      comments: 38,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
      user: "botspacehq",
      caption:
        "Coffee + Code = Magic ✨ Late night coding session for our latest feature update. Can't wait to share what we've been working on! ☕️💻",
      hashtags: "#CodingLife #TechStartup #Innovation #LateNight",
      likes: 89,
      comments: 15,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      user: "botspacehq",
      caption:
        "Team collaboration at its finest! 🙌 Nothing beats brainstorming sessions with amazing people. Together we're revolutionizing social media automation! 🔥",
      hashtags: "#TeamWork #Collaboration #StartupLife #Innovation",
      likes: 156,
      comments: 42,
    },
  ];

  return (
    <div className="sidebar">
      <h2>When someone comments on</h2>

      <div className="specific-posts">
        <span className="section-title">a specific post or reel</span>
        <div className="post-thumbnails">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`post-thumbnail ${
                selectedPostId === post.id ? "selected" : ""
              }`}
              onClick={() => onPostSelect(post)}
            >
              <img src={post.image} alt={`Post ${post.id}`} />
            </div>
          ))}
        </div>
        <button className="show-all-btn">Show All</button>
      </div>

      <div className="notification-options">
        <div className="notification-item">
          <span>any post or reel</span>
          <span className="pro-badge">PRO</span>
        </div>
        <div className="notification-item">
          <span>next post or reel</span>
          <span className="pro-badge">PRO</span>
        </div>
      </div>

      <div className="next-section">
        <h3>Next</h3>
      </div>
    </div>
  );
};

export default Sidebar;
