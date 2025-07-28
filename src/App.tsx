import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import PhoneMockup from "./components/PhoneMockup.tsx";
import type { Post } from "./types/index.ts";

function App() {
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [showCommentsSection, setShowCommentsSection] = useState(false);
  const [showDMSection, setShowDMSection] = useState(false);
  const [triggerWords, setTriggerWords] = useState<string[]>([
    "Price",
    "Link",
    "Shop",
  ]);
  const [dmMessage, setDmMessage] = useState(
    "Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec 🔗"
  );
  const [dmButtonText, setDmButtonText] = useState("Send me the link");

  const handlePostSelect = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCommentsVisibility = (visible: boolean) => {
    setShowCommentsSection(visible);
  };

  const handleDMVisibility = (visible: boolean) => {
    setShowDMSection(visible);
  };

  const handleTriggerWordsChange = (words: string[]) => {
    setTriggerWords(words);
  };

  const handleDMMessageChange = (message: string) => {
    setDmMessage(message);
  };

  const handleDMButtonTextChange = (buttonText: string) => {
    setDmButtonText(buttonText);
  };

  return (
    <div className="app">
      <div className="container">
        <Sidebar
          onPostSelect={handlePostSelect}
          selectedPostId={selectedPost?.id}
          onCommentsVisibilityChange={handleCommentsVisibility}
          onDMVisibilityChange={handleDMVisibility}
          onTriggerWordsChange={handleTriggerWordsChange}
          onDMMessageChange={handleDMMessageChange}
          onDMButtonTextChange={handleDMButtonTextChange}
        />
        <div className="preview-section">
          <div className="preview-header">
            <span>Preview</span>
            <button className="go-live-btn">Go Live</button>
          </div>
          <PhoneMockup
            selectedPost={selectedPost}
            showCommentsSection={showCommentsSection}
            showDMSection={showDMSection}
            triggerWords={triggerWords}
            dmMessage={dmMessage}
            dmButtonText={dmButtonText}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
