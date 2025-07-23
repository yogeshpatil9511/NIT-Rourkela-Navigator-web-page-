import React from 'react';

export default function WelcomeAnimation() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-green-500 to-orange-400 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating clouds */}
        <div className="absolute top-20 left-10 w-20 h-12 bg-white bg-opacity-30 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-10 bg-white bg-opacity-25 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-1/3 w-24 h-14 bg-white bg-opacity-20 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Trees */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-green-600 bg-opacity-40"></div>
        <div className="absolute bottom-20 left-10 w-8 h-16 bg-green-800 rounded-t-full"></div>
        <div className="absolute bottom-20 right-16 w-6 h-12 bg-green-800 rounded-t-full"></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-20 bg-green-800 rounded-t-full"></div>
        <div className="absolute bottom-20 right-1/3 w-7 h-14 bg-green-800 rounded-t-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        {/* Cycling Animation */}
        <div className="mb-8 relative">
          {/* First Cyclist */}
          <div className="absolute left-0 animate-cycle-move">
            <div className="flex items-center">
              {/* Bicycle */}
              <div className="relative">
                {/* Wheels */}
                <div className="flex space-x-8">
                  <div className="w-8 h-8 border-2 border-white rounded-full animate-spin-wheel">
                    <div className="w-full h-full border border-white rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 border-2 border-white rounded-full animate-spin-wheel">
                    <div className="w-full h-full border border-white rounded-full"></div>
                  </div>
                </div>
                {/* Frame */}
                <div className="absolute top-4 left-2 w-12 h-1 bg-white transform -rotate-12"></div>
                <div className="absolute top-2 left-6 w-8 h-1 bg-white transform rotate-45"></div>
                {/* Rider */}
                <div className="absolute -top-6 left-4">
                  <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                  <div className="w-3 h-6 bg-blue-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Cyclist */}
          <div className="absolute left-20 animate-cycle-move" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center">
              {/* Bicycle */}
              <div className="relative">
                {/* Wheels */}
                <div className="flex space-x-8">
                  <div className="w-8 h-8 border-2 border-white rounded-full animate-spin-wheel">
                    <div className="w-full h-full border border-white rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 border-2 border-white rounded-full animate-spin-wheel">
                    <div className="w-full h-full border border-white rounded-full"></div>
                  </div>
                </div>
                {/* Frame */}
                <div className="absolute top-4 left-2 w-12 h-1 bg-white transform -rotate-12"></div>
                <div className="absolute top-2 left-6 w-8 h-1 bg-white transform rotate-45"></div>
                {/* Rider */}
                <div className="absolute -top-6 left-4">
                  <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
                  <div className="w-3 h-6 bg-red-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-6 mt-20">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-2">
              Welcome Freshers!
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-4xl font-semibold">
              to <span className="text-yellow-300">NIT Rourkela</span>
            </h2>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-2xl">
              🚴‍♂️ Your Campus Tour Begins Here 🚴‍♀️
            </p>
          </div>
          
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mt-8 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <div className="animate-bounce">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🏀</span>
              </div>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
            </div>
          </div>
          
          {/* Loading Bar */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '2s' }}>
            <div className="w-80 h-3 bg-white bg-opacity-20 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-white rounded-full animate-loading-bar"></div>
            </div>
            <p className="text-lg mt-3 opacity-90">Loading your campus navigator...</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes loading-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(20px) translateY(0px); }
          75% { transform: translateX(10px) translateY(5px); }
        }
        
        @keyframes cycle-move {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes spin-wheel {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-loading-bar {
          animation: loading-bar 3s ease-in-out forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-cycle-move {
          animation: cycle-move 4s linear infinite;
        }
        
        .animate-spin-wheel {
          animation: spin-wheel 0.5s linear infinite;
        }
      `}</style>
    </div>
  );
}