import React from 'react';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  userRollNumber: string;
  onLogout: () => void;
}

export default function Header({ onLoginClick, isLoggedIn, userRollNumber, onLogout }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg border-b border-blue-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <img 
                src="/512px-NIT_Rourkela_Colour_Logo.svg.webp" 
                alt="NIT Rourkela Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <span className="h-6 w-6 text-blue-600 hidden">🏛️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">NIT Rourkela Navigator</h1>
              <p className="text-sm text-blue-200 hidden sm:block">Campus Navigation System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-white font-medium">{userRollNumber}</p>
                  <p className="text-blue-200 text-xs">Student</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
                >
                  🚪
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                👤
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}