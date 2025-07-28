import React, { useState } from "react";
import "./Sidebar.css";
import type { Post } from "../types/index.ts";

interface SidebarProps {
  onPostSelect: (post: Post) => void;
  selectedPostId?: number;
  onCommentsVisibilityChange: (visible: boolean) => void;
  onDMVisibilityChange: (visible: boolean) => void;
  onTriggerWordsChange: (words: string[]) => void;
  onDMMessageChange: (message: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onPostSelect,
  selectedPostId,
  onCommentsVisibilityChange,
  onDMVisibilityChange,
  onTriggerWordsChange,
  onDMMessageChange,
}) => {
  const [selectedOption, setSelectedOption] = useState("specific");
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [commentTrigger, setCommentTrigger] = useState("specific");
  const [triggerWords, setTriggerWords] = useState("Price, Link, Shop");
  const [tags, setTags] = useState(["Price", "Link", "Shop"]);
  const [dmMessage, setDmMessage] = useState(
    "Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec 🔗"
  );
  const [dmLinkText, setDmLinkText] = useState("Hey");

  const posts: Post[] = [
    {
      id: 1,
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjQwIiB5PSIzMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CZWZvcmU8L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSI0NSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52cyBBZnRlcjwvdGV4dD4KPC9zdmc+Cg==",
      user: "botspacehq",
      caption: "Before vs After transformation",
      hashtags: "#Transformation #BeforeAfter",
      likes: 45,
      comments: 12,
    },
    {
      id: 2,
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMjVBRDcwIi8+Cjx0ZXh0IHg9IjQwIiB5PSIyMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5XaGF0c0FwcDwvdGV4dD4KPHRleHQgeD0iNDAiIHk9IjMwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmhpdHMgMyBCaWxsaW9uPC90ZXh0Pgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjRkZGRkZGIi8+CjxjaXJjbGUgY3g9IjY1IiBjeT0iNDUiIHI9IjYiIGZpbGw9IiNGRkZGRkYiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI1NSIgcj0iNCIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K",
      user: "botspacehq",
      caption:
        "WhatsApp hits 3 Billion Users! 🎉 The messaging giant continues to dominate the global communication landscape. Green balloons and celebrations everywhere! 🎈",
      hashtags: "#WhatsApp #3Billion #Messaging #TechNews #BotSpace",
      likes: 71,
      comments: 22,
    },
    {
      id: 3,
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjNjY2Ii8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjEwIiBmaWxsPSIjOTk5Ii8+CjxwYXRoIGQ9Ik0yNSA0NSBMNTUgNDUiIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0yNSA1NSBMNTUgNTUiIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0yNSA2NSBMNTUgNjUiIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=",
      user: "botspacehq",
      caption: "Person standing in a room",
      hashtags: "#Lifestyle #Room",
      likes: 23,
      comments: 8,
    },
    {
      id: 4,
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjOTk2NmNjIi8+Cjx0ZXh0IHg9IjQwIiB5PSIyMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VTkxPQ0s8L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSIzMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JTlNUQUdSQU0nUyA8L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSI0MCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ISURERU4gR09MRC08L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSI1MCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NSU5FIFdJVEggQUkhPC90ZXh0Pgo8L3N2Zz4K",
      user: "botspacehq",
      caption: "UNLOCK INSTAGRAM'S HIDDEN GOLDMINE WITH AI!",
      hashtags: "#Instagram #AI #Goldmine #Marketing",
      likes: 89,
      comments: 31,
    },
  ];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleCommentTriggerChange = (trigger: string) => {
    setCommentTrigger(trigger);
  };

  const handleNextClick = () => {
    setShowSecondSection(true);
    onCommentsVisibilityChange(true);
  };

  const handleSecondNextClick = () => {
    setShowThirdSection(true);
    onCommentsVisibilityChange(false);
    onDMVisibilityChange(true);
  };

  const handleBackClick = () => {
    if (showThirdSection) {
      setShowThirdSection(false);
      onDMVisibilityChange(false);
      onCommentsVisibilityChange(true);
    } else {
      setShowSecondSection(false);
      onCommentsVisibilityChange(false);
    }
  };

  const handleInputChange = (value: string) => {
    setTriggerWords(value);
    // Update tags based on input
    const newTags = value
      .split(",")
      .map((word) => word.trim())
      .filter((word) => word.length > 0);
    setTags(newTags.length > 0 ? newTags : ["Price"]);
    // Notify parent component about trigger words change
    onTriggerWordsChange(newTags.length > 0 ? newTags : ["Price"]);
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    const updatedWords = updatedTags.join(", ");
    setTriggerWords(updatedWords);
    // Notify parent component about trigger words change
    onTriggerWordsChange(updatedTags);
  };

  return (
    <div className="sidebar">
      {!showSecondSection ? (
        <>
          <h2>When someone comments on</h2>

          <div className="option-group">
            <label className="radio-option">
              <input
                type="radio"
                name="commentTarget"
                value="specific"
                checked={selectedOption === "specific"}
                onChange={() => handleOptionChange("specific")}
              />
              <span className="radio-custom"></span>
              <span className="option-text">a specific post or reel</span>
            </label>

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
            <label className="radio-option">
              <input
                type="radio"
                name="commentTarget"
                value="any"
                checked={selectedOption === "any"}
                onChange={() => handleOptionChange("any")}
              />
              <span className="radio-custom"></span>
              <span className="option-text">any post or reel</span>
              <span className="pro-badge">PRO</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="commentTarget"
                value="next"
                checked={selectedOption === "next"}
                onChange={() => handleOptionChange("next")}
              />
              <span className="radio-custom"></span>
              <span className="option-text">next post or reel</span>
              <span className="pro-badge">PRO</span>
            </label>
          </div>

          <div className="next-section">
            <button className="next-btn" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </>
      ) : !showThirdSection ? (
        <>
          <div className="section-header">
            <button className="back-btn" onClick={handleBackClick}>
              ← Back
            </button>
            <h2>And this comment has</h2>
          </div>

          <div className="option-group">
            <label className="radio-option">
              <input
                type="radio"
                name="commentTrigger"
                value="specific"
                checked={commentTrigger === "specific"}
                onChange={() => handleCommentTriggerChange("specific")}
              />
              <span className="radio-custom"></span>
              <span className="option-text">a specific word or words</span>
            </label>

            <div className="input-section">
              <input
                type="text"
                className="trigger-input"
                value={triggerWords}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter trigger words..."
              />
              <div className="input-hint">Use commas to separate words</div>

              <div className="tags-container">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                    <button
                      className="tag-remove"
                      onClick={() => removeTag(tag)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="notification-options">
            <label className="radio-option">
              <input
                type="radio"
                name="commentTrigger"
                value="any"
                checked={commentTrigger === "any"}
                onChange={() => handleCommentTriggerChange("any")}
              />
              <span className="radio-custom"></span>
              <span className="option-text">any word</span>
            </label>
          </div>

          <div className="next-section">
            <button className="next-btn" onClick={handleSecondNextClick}>
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="section-header">
            <button className="back-btn" onClick={handleBackClick}>
              ← Back
            </button>
            <h2>They will get</h2>
          </div>

          <div className="option-group">
            <label className="radio-option">
              <input
                type="radio"
                name="dmType"
                value="opening"
                checked={true}
                readOnly
              />
              <span className="radio-custom"></span>
              <span className="option-text">an opening DM</span>
              <div className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </div>
            </label>

            <div className="dm-preview">
              <textarea
                value={dmMessage}
                onChange={(e) => {
                  setDmMessage(e.target.value);
                  onDMMessageChange(e.target.value);
                }}
                className="dm-textarea"
                rows={4}
              />
              <button className="dm-link-btn">Send me the link</button>
            </div>
          </div>

          <div className="dm-options">
            <p>🛈 Why does an Opening DM matter?</p>

            <label className="radio-option">
              <input
                type="radio"
                name="dmType"
                value="link"
                checked={false}
                readOnly
              />
              <span className="radio-custom"></span>
              <span className="option-text">a DM with the link</span>
            </label>

            <div className="dm-input">
              <input
                type="text"
                value={dmLinkText}
                onChange={(e) => setDmLinkText(e.target.value)}
                className="dm-text-input"
              />
              <p className="dm-hint">Create the DM you'd like to send</p>
              <button className="add-link-btn">+ Add A Link</button>
            </div>
          </div>

          <div className="next-section">
            <button className="next-btn">Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
