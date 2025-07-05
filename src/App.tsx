import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CampusMap from './components/CampusMap';
import RouteDisplay from './components/RouteDisplay';
import LoginModal from './components/LoginModal';
import ScheduleManager from './components/ScheduleManager';
import WelcomeAnimation from './components/WelcomeAnimation';
import WeatherWidget from './components/WeatherWidget';
import EmergencyContacts from './components/EmergencyContacts';
import QuickActions from './components/QuickActions';
import LiveUpdates from './components/LiveUpdates';
import FeedbackModal from './components/FeedbackModal';
import OfflineIndicator from './components/OfflineIndicator';

function App() {
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userRollNumber, setUserRollNumber] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Welcome animation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Online/Offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Check for saved login state
  useEffect(() => {
    const savedRollNumber = localStorage.getItem('userRollNumber');
    const savedLoginState = localStorage.getItem('isLoggedIn');
    
    if (savedRollNumber && savedLoginState === 'true') {
      setUserRollNumber(savedRollNumber);
      setIsLoggedIn(true);
    }
  }, []);

  const handleRouteSelect = (route: any) => {
    setSelectedRoute(route);
    
    // AI Voice Feature - Speak the route
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        `Route to ${route.name}. Total distance is ${route.distance}. Starting from ${route.startPoint}. ${route.instructions}`
      );
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const handleLogin = (rollNumber: string) => {
    setUserRollNumber(rollNumber);
    setIsLoggedIn(true);
    setShowLogin(false);
    
    // Save login state
    localStorage.setItem('userRollNumber', rollNumber);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRollNumber('');
    localStorage.removeItem('userRollNumber');
    localStorage.removeItem('isLoggedIn');
  };

  if (showWelcome) {
    return <WelcomeAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {!isOnline && <OfflineIndicator />}
      
      <Header 
        onLoginClick={() => setShowLogin(true)}
        isLoggedIn={isLoggedIn}
        userRollNumber={userRollNumber}
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              <span className="text-blue-600">WELCOME TO</span> NIT Rourkela
            </h1>
            <p className="text-xl text-gray-600 mb-2 animate-fade-in-delay">
              Smart Navigation from Jagda Gate & Basketball Court
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-3xl mx-auto animate-slide-up">
              <p className="text-yellow-800 font-medium">
                📍 We provide navigation routes from two main starting points:
              </p>
              <div className="flex justify-center space-x-8 mt-2">
                <span className="text-yellow-700">🚪 Jagda Gate (H4)</span>
                <span className="text-yellow-700">🏀 Basketball Court (G7)</span>
              </div>
            </div>
          </div>
          <SearchBar onRouteSelect={handleRouteSelect} />
        </div>

        {/* Quick Actions & Live Updates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <QuickActions onRouteSelect={handleRouteSelect} />
          <WeatherWidget />
          <LiveUpdates />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Campus Map */}
          <div className="xl:col-span-2">
            <CampusMap selectedRoute={selectedRoute} />
          </div>
          
          {/* Route Display & Schedule */}
          <div className="xl:col-span-1 space-y-6">
            {selectedRoute && <RouteDisplay route={selectedRoute} />}
            {isLoggedIn && <ScheduleManager rollNumber={userRollNumber} />}
            <EmergencyContacts />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200 mt-12">
          <div className="flex justify-center space-x-6 mb-4">
            <button 
              onClick={() => setShowFeedback(true)}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              📧 Feedback
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors">
              📱 Download App
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors">
              ⭐ Rate Us
            </button>
          </div>
          <p className="text-gray-600">
            © 2024 NIT Rourkela Campus Navigator. Built for Students, by Students.
          </p>
        </footer>
      </main>

      {/* Modals */}
      {showLogin && (
        <LoginModal 
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}

      {showFeedback && (
        <FeedbackModal 
          onClose={() => setShowFeedback(false)}
        />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}

export default App;