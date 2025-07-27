# BotSpace - Social Media App Mockup

A modern social media app mockup built with React and TypeScript, featuring a realistic smartphone interface with interactive comment sections and optimized space utilization.

## Features

### 🎨 Modern UI/UX Design

- **Dark Mode Interface**: Sleek black and dark gray color scheme
- **Large Smartphone Mockup**: 400x800px realistic phone frame with rounded corners
- **Instagram-inspired Design**: Clean, modern social media aesthetic
- **Optimized Layout**: Full-screen utilization with larger components

### 💬 Interactive Comment Section

- **Bottom Sheet Overlay**: Comments slide up from the bottom as a modal
- **Background Post Dimming**: Post becomes dimmed when comments are active
- **Drag Handle**: Visual indicator for the overlay
- **Emoji Reactions**: Quick reaction buttons with hover effects
- **Comment Input**: Functional input field with placeholder text
- **Like/Reply Actions**: Interactive comment actions

### 📱 Responsive Components

- **Post Display**: Shows user posts with images, captions, and engagement metrics
- **Tab Navigation**: Switch between Post, Comments, and DM views
- **Sidebar**: Post selection interface with larger thumbnails
- **Bottom Navigation**: Standard social media app navigation

## How to Use

1. **View Posts**: Select different posts from the sidebar to see them in the phone mockup
2. **Open Comments**: Click the comment button or "View all comments" to open the comment overlay
3. **Close Comments**: Click the close button or outside the overlay to close
4. **Switch Views**: Use the bottom tabs to switch between Post, Comments, and DM views

## Technical Implementation

### Component Structure

- `PhoneMockup`: Main phone interface component (400x800px)
- `CommentsView`: Comment overlay with bottom sheet design
- `Sidebar`: Post selection interface (400px width)
- `DMView`: Direct messages interface

### Key Features

- **State Management**: React hooks for managing overlay visibility
- **CSS Animations**: Smooth slide-up animation for comment overlay
- **Responsive Design**: Mobile-first approach with proper scaling
- **TypeScript**: Full type safety throughout the application
- **Space Optimization**: Larger components making better use of screen real estate

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Design Highlights

- **Large Mobile Mockup**: 400x800px phone frame for better visibility
- **Modern Bottom Sheet**: Comments appear as a bottom sheet modal
- **Background Dimming**: Post content dims when comments are active
- **Smooth Animations**: CSS transitions for all interactive elements
- **Realistic Mockup**: Phone frame with proper shadows and styling
- **Social Media UX**: Familiar interaction patterns from popular apps
- **Optimized Layout**: Better space utilization with larger components

The app demonstrates modern social media UI/UX patterns with a focus on the comment section overlay feature that hovers over the post content, creating an engaging and intuitive user experience. The larger mobile mockup and optimized layout make better use of available screen space.
