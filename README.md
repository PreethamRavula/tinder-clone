# 🔥 Tinder Clone - Full Stack Dating App

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

**A modern, responsive dating application featuring real-time card swiping functionality**

[View Demo](#-demo) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Setup](#-installation--setup)

</div>

---

## 📖 About The Project

A full-stack web application replicating core Tinder functionality. Built with the MERN stack (MongoDB, Express, React, Node.js), this project demonstrates proficiency in modern web development practices, RESTful API design, and responsive UI implementation.

### 🎯 Key Highlights

- **Full-stack Development**: Complete frontend and backend implementation
- **Modern UI/UX**: Clean, responsive design using Material-UI components
- **Real-time Interactions**: Smooth card swiping animations with gesture detection
- **RESTful API**: Backend API for data management and retrieval
- **Cloud Deployment**: Frontend hosted on Firebase, backend deployed to Heroku
- **Database Integration**: MongoDB for persistent data storage

---

## ✨ Features

### Core Functionality
- 💳 **Interactive Card Swiping** - Swipe left (pass) or right (like) on profiles
- 🎴 **Dynamic Card Stack** - Cards fetched from database and rendered dynamically
- 🎨 **Responsive Design** - Mobile-first approach, works on all device sizes
- 🔄 **Gesture Controls** - Touch and mouse-based swipe detection
- 🎯 **Action Buttons** - Alternative to swiping with clickable button controls

### Technical Features
- ⚡ React Hooks for state management (useState, useEffect)
- 🔌 Axios for HTTP requests to backend API
- 🎭 Material-UI icons and components for consistent styling
- 🔥 Firebase hosting for frontend deployment
- 🌐 Express.js REST API backend
- 🗄️ MongoDB database for user profile storage

---

## 📸 Demo

> **Note**: Screenshots demonstrate the application functionality. The live deployment was previously hosted on Heroku.

### Application Screenshots

**Main Interface - Card Swiping**
```
┌─────────────────────────────────────┐
│  [👤]  🔥 TINDER LOGO  [💬]        │  ← Header
├─────────────────────────────────────┤
│                                     │
│        ┌─────────────────┐         │
│        │                 │         │
│        │   Profile Card  │         │  ← Swipeable Cards
│        │   with Image    │         │
│        │                 │         │
│        └─────────────────┘         │
│                                     │
├─────────────────────────────────────┤
│   [↻]  [✕]  [⭐]  [♥]  [⚡]       │  ← Action Buttons
└─────────────────────────────────────┘
```

<!-- Add your screenshots here -->
<!--
![Home Screen](./screenshots/home.png)
![Swipe Animation](./screenshots/swipe.gif)
![Mobile View](./screenshots/mobile.png)
-->

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building component-based interface |
| **Material-UI (MUI)** | Component library for icons and styled components |
| **react-tinder-card** | Card swipe gesture library |
| **Axios** | HTTP client for API communication |
| **CSS3** | Custom styling and animations |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework for REST API |
| **MongoDB** | NoSQL database for profile data |
| **Mongoose** | ODM for MongoDB object modeling |

### DevOps & Deployment
| Technology | Purpose |
|------------|---------|
| **Firebase Hosting** | Frontend static site hosting |
| **Heroku** | Backend API hosting |
| **Git/GitHub** | Version control and code repository |

---

## 🏗 Project Architecture

```
┌─────────────────┐
│  React Frontend │  (Firebase)
│   Port: 3000    │
└────────┬────────┘
         │ HTTP Requests (Axios)
         ↓
┌─────────────────┐
│  Express API    │  (Heroku)
│   Port: 8001    │
└────────┬────────┘
         │ Mongoose ODM
         ↓
┌─────────────────┐
│    MongoDB      │
│   Database      │
└─────────────────┘
```

### API Endpoints
```
GET  /tinder/cards  - Fetch all profile cards
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or Atlas)
- Git

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tinder-clone.git
   cd tinder-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint** (Optional - for local backend)

   Update `src/axios.js` with your backend URL:
   ```javascript
   const instance = axios.create({
       baseURL: 'http://localhost:8001'  // or your backend URL
   })
   ```

4. **Start development server**
   ```bash
   npm start
   ```

   Application will open at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup

The backend repository is separate. To run the full stack locally:

1. Set up Node.js/Express server with MongoDB
2. Create endpoint: `GET /tinder/cards`
3. Return array of objects with structure:
   ```javascript
   {
     name: "John Doe",
     imgUrl: "https://example.com/image.jpg"
   }
   ```

---

## 📁 Project Structure

```
tinder-clone/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js                 # Main application component
│   ├── Header.js              # Header with logo and navigation icons
│   ├── TinderCards.js         # Card stack with swipe functionality
│   ├── SwipeButtons.js        # Bottom action buttons
│   ├── axios.js               # Axios instance configuration
│   ├── *.css                  # Component-specific styles
│   └── index.js               # React DOM render
├── .firebaserc                # Firebase project configuration
├── firebase.json              # Firebase hosting settings
├── package.json
└── README.md
```

---

## 💡 Key Learnings & Skills Demonstrated

### Frontend Development
- ✅ React functional components and hooks
- ✅ Component lifecycle management with useEffect
- ✅ State management with useState
- ✅ Third-party library integration (react-tinder-card)
- ✅ Responsive CSS design
- ✅ Material-UI component customization

### Backend Development
- ✅ RESTful API design and implementation
- ✅ Express.js routing and middleware
- ✅ MongoDB schema design and queries
- ✅ CORS configuration for cross-origin requests

### DevOps
- ✅ Firebase hosting deployment
- ✅ Heroku backend deployment
- ✅ Environment variable management
- ✅ Git version control

---

## 🔮 Future Enhancements

- [ ] User authentication and login system
- [ ] Match algorithm and mutual like detection
- [ ] Real-time messaging between matched users
- [ ] User profile creation and editing
- [ ] Like/pass history and statistics
- [ ] Advanced filtering (age, location, interests)
- [ ] Push notifications for new matches
- [ ] Image upload functionality
- [ ] WebSocket integration for real-time updates

---

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available for educational purposes.

---

## 📬 Contact & Links

**Your Name** - [GitHub Profile](https://github.com/yourusername)

- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 📧 Email: your.email@example.com
- 🌐 Portfolio: [yourportfolio.com](https://yourportfolio.com)

**Project Repository:** [https://github.com/yourusername/tinder-clone](https://github.com/yourusername/tinder-clone)

---

<div align="center">

### ⭐ If you found this project interesting, please consider giving it a star!

**Built with ❤️ and React**

</div>
