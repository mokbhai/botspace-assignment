import React, { useState } from "react";
import "./DMView.css";
import {
  IoArrowBack,
  IoEllipsisHorizontal,
  IoMailOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";

const DMView: React.FC = () => {
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: 1,
      username: "sarah_dev",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c446?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Hey! Loved your latest post about automation 🚀",
      time: "2m",
      unread: true,
    },
    {
      id: 2,
      username: "mike_startup",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Can we discuss the collaboration features?",
      time: "1h",
      unread: false,
    },
    {
      id: 3,
      username: "tech_ninja",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Thanks for the insights! Really helpful 💪",
      time: "3h",
      unread: false,
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Hey! Loved your latest post about automation 🚀",
      sender: "sarah_dev",
      time: "2:45 PM",
      isOwn: false,
    },
    {
      id: 2,
      text: "Thank you! We're really excited about what we're building",
      sender: "botspacehq",
      time: "2:47 PM",
      isOwn: true,
    },
    {
      id: 3,
      text: "The team collaboration features look amazing. When will they be available?",
      sender: "sarah_dev",
      time: "2:48 PM",
      isOwn: false,
    },
    {
      id: 4,
      text: "We're planning to launch them next month! Stay tuned for updates 😊",
      sender: "botspacehq",
      time: "2:50 PM",
      isOwn: true,
    },
  ];

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [showConversations, setShowConversations] = useState(true);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle sending message logic here
      setMessageText("");
    }
  };

  return (
    <div className="dm-view">
      {showConversations ? (
        <div className="conversations-list">
          <div className="dm-header">
            <h3>Direct Messages</h3>
            <button className="new-message-btn">
              <IoMailOutline size={20} />
            </button>
          </div>

          <div className="conversations">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`conversation-item ${
                  conversation.unread ? "unread" : ""
                }`}
                onClick={() => {
                  setSelectedConversation(conversation);
                  setShowConversations(false);
                }}
              >
                <div className="conversation-avatar">
                  <img src={conversation.avatar} alt={conversation.username} />
                  {conversation.unread && (
                    <div className="unread-indicator"></div>
                  )}
                </div>
                <div className="conversation-content">
                  <div className="conversation-header">
                    <span className="conversation-username">
                      {conversation.username}
                    </span>
                    <span className="conversation-time">
                      {conversation.time}
                    </span>
                  </div>
                  <div className="conversation-preview">
                    {conversation.lastMessage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="chat-view">
          <div className="chat-header">
            <button
              className="back-btn"
              onClick={() => setShowConversations(true)}
            >
              <IoArrowBack size={20} />
            </button>
            <div className="chat-user-info">
              <img
                src={selectedConversation.avatar}
                alt={selectedConversation.username}
              />
              <span>{selectedConversation.username}</span>
            </div>
            <button className="chat-options">
              <IoEllipsisHorizontal size={20} />
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isOwn ? "own" : "other"}`}
              >
                <div className="message-bubble">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">{message.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="message-input">
            <input
              type="text"
              placeholder="Message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="send-btn" onClick={handleSendMessage}>
              <IoPaperPlaneOutline size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DMView;
