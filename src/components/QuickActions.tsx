import React from 'react';

interface QuickActionsProps {
  onRouteSelect: (route: any) => void;
}

export default function QuickActions({ onRouteSelect }: QuickActionsProps) {
  const quickRoutes = [
    { 
      name: 'Main Building', 
      startPoint: 'Jagda Gate (H4)', 
      instructions: 'Go left for 160 meters, then turn right and go another 160 meters to reach the Main Building', 
      distance: '320 Meters',
      icon: '🏛️'
    },
    { 
      name: 'CS Department', 
      startPoint: 'Basketball Court (G7)', 
      instructions: 'Walk straight for 570 meters from the gate, then turn left and go 30 meters to the gate.', 
      distance: '600 meters',
      icon: '💻'
    },
    { 
      name: 'Central Library', 
      startPoint: 'Basketball Court (G7)', 
      instructions: '350 meters walk straight, left 100 meters', 
      distance: '450 meters',
      icon: '📚'
    },
    { 
      name: 'Amul Parlour', 
      startPoint: 'Jagda Gate (H4)', 
      instructions: 'Turn left and go straight for 1 kilometer. Turn right and go straight for 200 meters.', 
      distance: '1.2 kilometers',
      icon: '🥛'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-xl">⚡</span>
        <h3 className="text-lg font-bold text-gray-900">Quick Routes</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {quickRoutes.map((route, index) => (
          <button
            key={index}
            onClick={() => onRouteSelect(route)}
            className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200 text-left"
          >
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-lg">{route.icon}</span>
              <span className="font-medium text-blue-800 text-sm">{route.name}</span>
            </div>
            <p className="text-xs text-blue-600">{route.distance}</p>
          </button>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-800">
          🎯 Click any route for instant navigation!
        </p>
      </div>
    </div>
  );
}