import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import PhoneMockup from "./components/PhoneMockup.tsx";
import type { Post } from "./types/index.ts";

function App() {
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

  const handlePostSelect = (post: Post) => {
    setSelectedPost(post);
  };

  return (
    <div className="app">
      <div className="container">
        <Sidebar
          onPostSelect={handlePostSelect}
          selectedPostId={selectedPost?.id}
        />
        <div className="preview-section">
          <div className="preview-header">
            <span>Preview</span>
            <button className="go-live-btn">Go Live</button>
          </div>
          <PhoneMockup selectedPost={selectedPost} />
        </div>
      </div>
    </div>
  );
}

export default App;
