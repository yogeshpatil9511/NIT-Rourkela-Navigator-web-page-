
# 🗺️ NIT Rourkela Campus Navigator


A responsive web application designed to help students and visitors navigate the NIT Rourkela campus with ease. This project leverages modern web technologies to provide real-time route planning, voice navigation, and various campus-related utilities.

-----

## 🚀 Live Demo

Experience the NIT Rourkela Campus Navigator live here:

👉 **[https://strong-rolypoly-e22dcd.netlify.app](https://strong-rolypoly-e22dcd.netlify.app)**

-----

## ✨ Features

  * **🎬 Welcome Animation**: Engaging animated intro with cycling students.
  * **🗺️ Interactive Campus Map**: Visual route highlighting for optimal navigation.
  * **🔊 Voice Navigation**: AI-powered route announcements for hands-free guidance.
  * **📱 Responsive Design**: Mobile-first approach ensuring seamless experience across all devices.
  * **🌐 Offline Detection**: Monitors network status and provides an indicator when offline.
  * **🌤️ Weather Widget**: Displays real-time campus weather information.
  * **🆘 Emergency Contacts**: Quick access to essential emergency services.
  * **📅 Schedule Manager**: Personal class scheduling and management.
  * **📢 Live Updates**: Provides real-time campus announcements and news.
  * **💬 Feedback System**: Allows users to submit feedback directly from the app.
  * **🔐 Student Authentication**: Secure roll number validation for access to certain features.
  * **⚡ Quick Actions**: Shortcuts to popular campus destinations.

-----

## 💻 Technology Stack

  * **React 18.3.1**: A declarative, component-based UI library for building interactive user interfaces.
  * **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and developer experience.
  * **Vite**: A next-generation frontend tooling that provides an extremely fast development server and optimized build performance.
  * **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs without leaving your HTML.

### React Libraries & Hooks

  * `useState`: For managing component-level state such as user data, routes, and modal visibility.
  * `useEffect`: For handling side effects, including timers, event listeners, and interactions with `localStorage`.
  * `React.FormEvent`: For type-safe handling of form submissions and validation.
  * `React.ChangeEvent`: For managing changes in input elements.

### Web APIs Used

  * `Speech Synthesis API`: Powers the voice navigation feature, converting text-based route instructions into spoken audio.
  * `Navigator.onLine`: Detects the user's online/offline status, enabling the offline detection feature.
  * `localStorage`: Used for persistent storage of user sessions and other data that needs to survive browser closures.
  * `sessionStorage`: Utilized for temporary storage, such as controlling the one-time welcome animation display.

-----

## 🏗️ Project Architecture

The project follows a component-based architecture, promoting modularity and reusability.

```
src/
├── App.tsx             (Main application logic and routing)
├── components/
│   ├── Header.tsx          (Navigation bar and user authentication controls)
│   ├── SearchBar.tsx       (Functionality for searching campus locations and routes)
│   ├── CampusMap.tsx       (Interactive map display with location markers and route visualization)
│   ├── RouteDisplay.tsx    (Displays detailed route information and controls voice navigation)
│   ├── LoginModal.tsx      (Modal for student authentication)
│   ├── ScheduleManager.tsx (Component for managing class schedules)
│   ├── WelcomeAnimation.tsx(Animated introductory screen)
│   ├── WeatherWidget.tsx   (Displays current campus weather)
│   ├── EmergencyContacts.tsx(Quick access to emergency services contact information)
│   ├── QuickActions.tsx    (Buttons for quick navigation to popular destinations)
│   ├── LiveUpdates.tsx     (Displays real-time campus announcements)
│   ├── FeedbackModal.tsx   (User interface for submitting feedback)
│   └── OfflineIndicator.tsx(Indicates network connection status)
├── data/               (Static data like campus locations, routes, etc.)
├── hooks/              (Custom React Hooks for reusable logic)
├── utils/              (Utility functions and helpers)
└── assets/             (Images, icons, and other static assets)
```

### Data Management

  * **Route Data**: Structured object arrays define campus locations and navigation paths.
  * **User State**: `localStorage` is used to persist user-specific data and sessions across browser sessions.
  * **Component State**: `useState` effectively manages UI interactions and component-specific data.
  * **Side Effects**: `useEffect` is employed for handling API calls, timers, and other non-rendering-related operations.

-----

## 🚀 Deployment

This application is set up for continuous deployment with Netlify.

### Netlify

The project is automatically deployed to Netlify upon pushes to the `main` branch.

Your deployed site can be found at: **[https://strong-rolypoly-e22dcd.netlify.app](https://strong-rolypoly-e22dcd.netlify.app)**


## 🤝 Contributing

Contributions are welcome\! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

-----

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

