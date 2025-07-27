import React, { useState } from "react";
import type { Post } from "../types/index.ts";
import "./CommentsView.css";
import { IoClose, IoPaperPlaneOutline, IoHeartOutline } from "react-icons/io5";

interface CommentsViewProps {
  post: Post;
  onClose?: () => void;
  triggerWords: string[];
}

const CommentsView: React.FC<CommentsViewProps> = ({
  onClose,
  triggerWords,
}) => {
  const [commentText, setCommentText] = useState("");

  // Generate dynamic comments based on trigger words
  const generateCommentsFromTriggerWords = () => {
    if (!triggerWords || triggerWords.length === 0) {
      return [];
    }

    return triggerWords.map((word, index) => ({
      id: index + 1,
      user: "Username",
      avatar:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2NjYiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDI4IEwyOCAyOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=",
      text: word,
      time: "Now",
    }));
  };

  const comments = generateCommentsFromTriggerWords();

  const emojiReactions = ["❤️", "🙌", "🔥", "🌮", "😢", "😍", "🙄", "😂"];

  return (
    <div className="comments-overlay-container">
      {/* Drag Handle */}
      <div className="drag-handle"></div>

      <div className="comments-header">
        <h3>Comments</h3>
        <div className="header-actions">
          <button className="send-btn">
            <IoPaperPlaneOutline size={20} />
          </button>
          {onClose && (
            <button className="close-btn" onClick={onClose}>
              <IoClose size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="comments-list">
        {comments.length === 0 ? (
          <div className="empty-comments">
            <p>
              No comments yet. Comments will appear here when users type the
              trigger words.
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-avatar">
                <img src={comment.avatar} alt={`${comment.user} avatar`} />
              </div>
              <div className="comment-content">
                <div className="comment-header">
                  <span className="comment-username">{comment.user}</span>
                  <span className="comment-time">{comment.time}</span>
                </div>
                <div className="comment-text">{comment.text}</div>
                <div className="comment-actions">
                  <button className="reply-btn">Reply</button>
                </div>
              </div>
              <button className="comment-like">
                <IoHeartOutline size={16} />
              </button>
            </div>
          ))
        )}
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
          <div className="avatar-circle">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2NjYiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDI4IEwyOCAyOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
              alt="User avatar"
            />
          </div>
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
