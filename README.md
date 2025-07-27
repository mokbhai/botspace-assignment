# BotSpace - Social Media App Mockup

A modern social media app mockup built with React and TypeScript, featuring a realistic smartphone interface with interactive comment sections and optimized space utilization that matches the design specification.

## Features

### 🎨 Modern UI/UX Design

- **Dark Mode Interface**: Sleek black and dark gray color scheme
- **Large Smartphone Mockup**: 400x800px realistic phone frame with rounded corners
- **Instagram-inspired Design**: Clean, modern social media aesthetic
- **Optimized Layout**: Full-screen utilization with larger components
- **Radio Button Controls**: Interactive selection for comment triggers

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
- **Sidebar**: Post selection interface with radio buttons and larger thumbnails
- **Bottom Navigation**: Standard social media app navigation

### 🎯 Content Management

- **Specific Post Selection**: Choose from predefined posts including WhatsApp milestone
- **Radio Button Interface**: Clean selection UI for comment triggers
- **PRO Features**: Premium options with badges
- **Post Thumbnails**: Visual preview of available posts

### ⚙️ Advanced Configuration

- **Two-Step Setup**: "When someone comments on" and "And this comment has" sections
- **Comment Trigger Words**: Input field for specific words that trigger responses
- **Tag System**: Visual tags for trigger words with remove functionality
- **Navigation Flow**: Back and Next buttons for seamless configuration

## How to Use

1. **Select Comment Target**: Use radio buttons to choose when comments should trigger
2. **Choose Specific Post**: Select from the thumbnail grid to preview different posts
3. **Click Next**: Proceed to the "And this comment has" configuration section
4. **Configure Triggers**: Set up specific words or phrases that trigger responses
5. **View Posts**: See the selected post in the large phone mockup
6. **Open Comments**: Click the comment button or "View all comments" to open the comment overlay
7. **Close Comments**: Click the close button or outside the overlay to close
8. **Switch Views**: Use the bottom tabs to switch between Post, Comments, and DM views

## Technical Implementation

### Component Structure

- `PhoneMockup`: Main phone interface component (400x800px)
- `CommentsView`: Comment overlay with bottom sheet design
- `Sidebar`: Post selection interface with radio buttons and configuration (400px width)
- `DMView`: Direct messages interface

### Key Features

- **State Management**: React hooks for managing overlay visibility, selections, and configuration flow
- **CSS Animations**: Smooth slide-up animation for comment overlay
- **Responsive Design**: Mobile-first approach with proper scaling
- **TypeScript**: Full type safety throughout the application
- **Space Optimization**: Larger components making better use of screen real estate
- **Radio Button UI**: Custom styled radio buttons for better UX
- **Input Management**: Dynamic tag system for trigger words
- **Navigation Flow**: Multi-step configuration process

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
- **WhatsApp Theme**: Green banner post with celebration content
- **Radio Button Interface**: Clean selection controls matching the design spec
- **Multi-Step Configuration**: Intuitive setup process for comment triggers
- **Dynamic Tag System**: Visual management of trigger words

The app demonstrates modern social media UI/UX patterns with a focus on the comment section overlay feature that hovers over the post content, creating an engaging and intuitive user experience. The larger mobile mockup and optimized layout make better use of available screen space, while the radio button interface and multi-step configuration provide clear control over comment triggers and response settings.
