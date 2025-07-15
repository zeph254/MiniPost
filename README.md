# 📝 MiniPost - Simple Blog App with Local Storage

MiniPost is a clean, lightweight blogging application that lets you create, read, and delete posts with all data stored locally in your browser. Perfect for personal journaling or quick note-taking.

![MiniPost Screenshot](./screenshot.png) <!-- Add actual screenshot path later -->

---

## ✨ Key Features

- **Local-First Design**: All data stored in browser localStorage
- **CRUD Operations**: Create, Read, Update, and Delete blog posts
- **Responsive UI**: Works flawlessly on desktop and mobile devices
- **Modern Styling**: Beautiful gradients and smooth animations
- **Zero Dependencies**: No backend required - 100% client-side

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Persistence**: Browser localStorage API
- **Routing**: React Router

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Installation
1. Clone the repository:

git clone https://github.com/yourusername/minipost.git
cd minipost
npm install
npm run dev

## 📂 Project Architecture

src/
├── components/      # Reusable UI components
│   ├── PostForm.jsx # Post creation/editing form
│   ├── PostList.jsx # Posts listing component
│   └── PostItem.jsx # Individual post component
├── services/        # Data layer
│   └── postsService.js # Storage/API abstraction
├── utils/           # Utility functions
│   └── storage.js   # localStorage helpers
├── App.js           # Main application component
└── index.js         # Application entry point

## 📬 Contact

Your Name - ularezephaniah@gmail.com

## Live demo

https://minipost.netlify.app/


