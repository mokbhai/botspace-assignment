import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import PhoneMockup from "./components/PhoneMockup.tsx";
import type { Post } from "./types/index.ts";

function App() {
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [showCommentsSection, setShowCommentsSection] = useState(false);
  const [triggerWords, setTriggerWords] = useState<string[]>(["Price"]);

  const handlePostSelect = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCommentsVisibility = (visible: boolean) => {
    setShowCommentsSection(visible);
  };

  const handleTriggerWordsChange = (words: string[]) => {
    setTriggerWords(words);
  };

  return (
    <div className="app">
      <div className="container">
        <Sidebar
          onPostSelect={handlePostSelect}
          selectedPostId={selectedPost?.id}
          onCommentsVisibilityChange={handleCommentsVisibility}
          onTriggerWordsChange={handleTriggerWordsChange}
        />
        <div className="preview-section">
          <div className="preview-header">
            <span>Preview</span>
            <button className="go-live-btn">Go Live</button>
          </div>
          <PhoneMockup
            selectedPost={selectedPost}
            showCommentsSection={showCommentsSection}
            triggerWords={triggerWords}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
