import React, { useState } from "react";
import type { Post } from "../types/index.ts";
import "./CommentsView.css";
import { IoEllipsisHorizontal, IoChevronDown } from "react-icons/io5";

interface CommentsViewProps {
  post: Post;
}

const CommentsView: React.FC<CommentsViewProps> = () => {
  const [commentText, setCommentText] = useState("");

  const comments = [
    {
      id: 1,
      username: "Username",
      timeAgo: "Now",
      text: "Price",
      isNew: true,
    },
    {
      id: 2,
      username: "johndoe_dev",
      timeAgo: "2h",
      text: "This is amazing! Love the automation features 🚀",
      isNew: false,
    },
    {
      id: 3,
      username: "sarah_startup",
      timeAgo: "1h",
      text: "Can't wait to try this out with my team! 💪",
      isNew: false,
    },
    {
      id: 4,
      username: "tech_wizard",
      timeAgo: "45m",
      text: "The collaboration features look incredible 🔥",
      isNew: false,
    },
  ];

  const emojiReactions = ["❤️", "🙌", "🔥", "👏", "😍", "😂", "😮", "😢"];

  return (
    <div className="comments-view">
      <div className="comments-header">
        <h3>Comments</h3>
        <div className="filter-dropdown">
          <IoChevronDown size={16} />
        </div>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <div className="comment-avatar">
              <div className="avatar-circle"></div>
            </div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-username">{comment.username}</span>
                {comment.isNew && <span className="new-badge">New</span>}
              </div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-time">{comment.timeAgo}</div>
            </div>
            <div className="comment-menu">
              <IoEllipsisHorizontal size={16} />
            </div>
          </div>
        ))}
      </div>

      <div className="emoji-reactions">
        {emojiReactions.map((emoji, index) => (
          <button key={index} className="emoji-btn">
            {emoji}
          </button>
        ))}
      </div>

      <div className="comment-input">
        <div className="input-avatar">
          <div className="avatar-circle"></div>
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Add a comment for username..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentsView;
