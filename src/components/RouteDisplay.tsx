import React from 'react';

interface RouteDisplayProps {
  route: {
    name: string;
    startPoint: string;
    instructions: string;
    distance: string;
  };
}

export default function RouteDisplay({ route }: RouteDisplayProps) {
  const speakRoute = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        `Route to ${route.name}. Total distance is ${route.distance}. Starting from ${route.startPoint}. Directions: ${route.instructions}`
      );
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            🧭
          </div>
          <h2 className="text-xl font-bold text-gray-900">Route to {route.name}</h2>
        </div>
        <button
          onClick={speakRoute}
          className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors duration-200"
          title="Listen to directions"
        >
          🔊
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Starting Point */}
        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
          📍
          <div>
            <p className="font-medium text-green-800">Starting from</p>
            <p className="text-green-700">{route.startPoint}</p>
          </div>
        </div>
        
        {/* Distance */}
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
          📏
          <div>
            <p className="font-medium text-blue-800">Total Distance</p>
            <p className="text-blue-700">{route.distance}</p>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            🕐
            <span>Step-by-step directions</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">{route.instructions}</p>
        </div>
        
        {/* Destination */}
        <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
          🎯
          <div>
            <p className="font-medium text-red-800">Destination</p>
            <p className="text-red-700">{route.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}