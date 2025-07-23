import React from 'react';

export default function CampusMap({ selectedRoute }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">NIT Rourkela Campus Map</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span>Jagda Gate (H4)</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>Basketball Court (G7)</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {/* Campus Map Image */}
        <div className="w-full">
          <img 
            src="/Screenshot_2025-07-04-18-03-09-47_40deb401b9ffe8e1df2f1cc5ba480b12.jpg"
            alt="NIT Rourkela Campus Map"
            className="w-full h-auto rounded-b-xl"
            style={{ maxHeight: '600px', objectFit: 'contain' }}
          />
        </div>
        
        {/* Overlay markers for key locations */}
        <div className="absolute inset-0">
          {/* Jagda Gate (H4) - Corrected position */}
          <div className="absolute" style={{ top: '9%', left: '27%' }}>
            <div className={`w-5 h-5 rounded-full border-3 border-white shadow-lg ${
              selectedRoute?.startPoint?.includes('Jagda Gate') ? 'bg-yellow-500 animate-bounce' : 'bg-red-500 animate-pulse'
            }`}></div>
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-700 bg-white px-2 py-1 rounded shadow whitespace-nowrap">
              Jagda Gate (H4)
            </span>
          </div>
          
          {/* Basketball Court (G7) - Corrected position */}
          <div className="absolute" style={{ top: '20%', left: '50%' }}>
            <div className={`w-5 h-5 rounded-full border-3 border-white shadow-lg ${
              selectedRoute?.startPoint?.includes('Basketball Court') ? 'bg-yellow-500 animate-bounce' : 'bg-green-500 animate-pulse'
            }`}></div>
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-green-700 bg-white px-2 py-1 rounded shadow whitespace-nowrap">
              Basketball Court (G7)
            </span>
          </div>
          
          {/* Main Building (F5) */}
          <div className="absolute" style={{ top: '20%', left: '35%' }}>
            <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${
              selectedRoute?.name === 'Main Building' ? 'bg-yellow-500 animate-bounce' : 'bg-blue-500'
            }`}></div>
            <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-blue-700 bg-white px-1 py-0.5 rounded shadow text-center whitespace-nowrap">
              Main Building (F5)
            </span>
          </div>

          {/* TIIR Building (H6) */}
          <div className="absolute" style={{ top: '11%', left: '40%' }}>
            <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${
              selectedRoute?.name === 'TIIR Building' ? 'bg-yellow-500 animate-bounce' : 'bg-purple-500'
            }`}></div>
            <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-purple-700 bg-white px-1 py-0.5 rounded shadow text-center whitespace-nowrap">
              TIIR Building (H6)
            </span>
          </div>
        </div>
        
        {/* Selected Route Highlight */}
        {selectedRoute && (
          <div className="absolute top-4 left-4 bg-yellow-100 border-2 border-yellow-400 p-3 rounded-lg shadow-lg animate-pulse">
            <h4 className="font-bold text-yellow-800">🎯 Selected Route</h4>
            <p className="text-sm text-yellow-700">{selectedRoute.name}</p>
            <p className="text-xs text-yellow-600">From {selectedRoute.startPoint}</p>
          </div>
        )}
        
        {/* Grid Reference */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-95 p-3 rounded-lg shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">Grid Reference</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>H4 - Jagda Gate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>G7 - Basketball Court</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>F5 - Main Building</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>H6 - TIIR Building</span>
            </div>
          </div>
        </div>
        
        {/* Navigation Legend */}
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Navigation Points</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Jagda Gate (H4) - Main Entry Point</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Basketball Court (G7) - Central Hub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}