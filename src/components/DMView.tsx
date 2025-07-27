import React, { useState } from "react";
import "./DMView.css";
import {
  IoArrowBack,
  IoEllipsisHorizontal,
  IoMailOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";

interface DMViewProps {
  triggerWords?: string[];
  editableMessage1?: string;
  editableMessage2?: string;
  editableMessage3?: string;
  onMessage1Change?: (text: string) => void;
  onMessage2Change?: (text: string) => void;
  onMessage3Change?: (text: string) => void;
}

const DMView: React.FC<DMViewProps> = ({ triggerWords = [] }) => {
  const [messageText, setMessageText] = useState("");
  const [editableMessage1, setEditableMessage1] = useState("Hey there! I'm so happy you're here, thanks so much for your interest 😊");
  const [editableMessage2, setEditableMessage2] = useState("Click below and I'll send you the link in just a sec 🔗");
  const [editableMessage3, setEditableMessage3] = useState("Send me the link");

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

  // Generate dynamic messages based on trigger words
  const generateMessagesFromTriggerWords = () => {
    if (!triggerWords || triggerWords.length === 0) {
      return [
        {
          id: 1,
          text: "Hey there! I'm so happy you're here, thanks so much for your interest �",
          sender: "botspacehq",
          time: "2:45 PM",
          isOwn: true,
        },
        {
          id: 2,
          text: editableMessage2,
          sender: "botspacehq",
          time: "2:46 PM",
          isOwn: true,
        },
        {
          id: 3,
          text: editableMessage3,
          sender: "botspacehq",
          time: "2:47 PM",
          isOwn: true,
          isButton: true,
        },
      ];
    }

    const baseMessages = [
      {
        id: 1,
        text: editableMessage1,
        sender: "botspacehq",
        time: "2:45 PM",
        isOwn: true,
      },
      {
        id: 2,
        text: editableMessage2,
        sender: "botspacehq",
        time: "2:46 PM",
        isOwn: true,
      },
      {
        id: 3,
        text: editableMessage3,
        sender: "botspacehq",
        time: "2:47 PM",
        isOwn: true,
        isButton: true,
      },
    ];

    // Add messages for each trigger word
    triggerWords.forEach((word) => {
      baseMessages.push({
        id: baseMessages.length + 1,
        text: word,
        sender: "Username",
        time: "Now",
        isOwn: false,
      });
    });

    return baseMessages;
  };

  const messages = generateMessagesFromTriggerWords();

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [showConversations, setShowConversations] = useState(false);

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
                  {message.isButton ? (
                    <button className="message-button">
                      {message.text}
                    </button>
                  ) : (
                    <div className="message-text">{message.text}</div>
                  )}
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
