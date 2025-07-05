import React, { useState } from 'react';

interface SearchBarProps {
  onRouteSelect: (route: any) => void;
}

export default function SearchBar({ onRouteSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // Route data based on your specifications
  const routes = {
    jagdaGate: [
      { name: 'Main Building', instructions: 'Go left for 160 meters, then turn right and go another 160 meters to reach the Main Building ', distance: '320 Meters' },
      { name: 'Main Gate', instructions: 'Go right At 600 meters, turn left and continue for 350 meters for destination', distance: '950 Meters' },
      { name: 'Dispensary', instructions: 'Turn right and go 100 meters. Take the first left and go straight for 500 meters to reach your destination.', distance: '600 Meters ' },
      { name: 'Faculty Apartment', instructions: 'Turn right and go 100 meters. Take the first left and go straight for 1.4 kilometers to reach your destination', distance: '1.5 kilometers' },
      { name: 'LA Gate', instructions: ' Turn left and go 650 meters. Take the first right and go straight for 600 meters to reach your destination', distance: '1.25 kilometers ' },
      { name: 'SD Hall', instructions: ' Turn left and go straight for 2 kilometers. Turn right, then left, and then take the next right. Continue straight for 400 meters to reach your destination', distance: '2.4 kilometers' },
      { name: 'Back-post', instructions: ' Turn left and go straight for 2 kilometers, then turn right to reach your destination', distance: '2 kilometers' },
      { name: 'DTS', instructions: ' Turn left and go straight for 1 kilometer. Turn right and go 100 meters to the gate', distance: '1.1 kilometers' },
      { name: 'STS', instructions: '  Turn left and go straight for 1 kilometer. Turn right and go 100 meters to the gate, which is next to DTS Ground.(next to DTS)', distance: '1.1 kilometers' },
      { name: 'Amul Parlour', instructions: 'Turn left and go straight for 1 kilometer. Turn right and go straight for 200 meters.', distance: '1.2 kilometers' },
      { name: 'CVR Girls Hostel', instructions: 'Turn left and go 650 meters. Take the first right and go straight for 100 meters to reach your destination', distance: '750 meters' },
      { name: 'KMS Girls Hostel', instructions: ' Turn right and go 100 meters. Take the first left and go straight for 200 meters. Then, take the second right and go 300 meters to reach your destination', distance: '600 meters' },
      { name: 'VS Hall', instructions: 'Turn left and go straight for 1 kilometer. Turn right and go straight for 200 meters. After passing the Amul Parlour, cross Gulmohar Road and turn left. Walk 100 meters to reach your destination ', distance: '1.3 kilometers' },
      { name: 'GDB Hall & (MV Hall)', instructions: ' Turn left and go straight for 1 kilometer. Turn right and go straight for 250 meters to reach your destination', distance: '1.25 kilometers' },
      { name: 'DBA Hall', instructions: ' Turn left and go straight for 1 kilometer. Turn right and go straight for 250 meters. Then, go 100 meters on your left to reach your destination ', distance: '1.35 kilometers' },
      { name: 'MSS Hall', instructions: ' Turn left and go straight for 1 kilometer. Turn right and go straight for 250 meters. Then, go 250 meters on your left to reach your destination', distance: '1.5 kilometers' },
      { name: 'HB Hall', instructions: 'Turn left and go straight for 1 kilometer. Turn right and go straight for 250 meters. Then, go 350 meters on your left to reach your destination', distance: '1.6 kilometers' }
    ],
    basketballCourt: [
      { name: 'Biotech Department', instructions: ' Walk 50 meters, take the first left, and go straight for 100 meters to reach your destination.', distance: '150 meters' },
      { name: 'LA 1', instructions: 'Walk 50 meters, take the first left, and go straight for 150 meters to reach your destination', distance: '200 meters' },
      { name: 'LA 2', instructions: '  Walk 50 meters, take the first left, and go straight for 300 meters to reach your destination ', distance: '350 meters' },
      { name: 'Mechanical Department', instructions: 'Walk 50 meters, take the first left, and go straight for 300 meters. Then, turn right and go 350 meters to reach your destination', distance: '700 meters' },
      { name: 'Ceramic Department', instructions: '70 meters walk from the Basket-ball court gate', distance: 'Walk 70 meters from the gate' },
      { name: 'Mining Department', instructions: '450 meters straight walk from the Basket-ball court gate', distance: 'Walk 450 meters from the gate' },
      { name: 'Chemical & Food Processing Department', instructions: 'Walk straight for 250 meters, then turn left and go 50 meters to reach your destination.', distance: '300 meters' },
      { name: 'Central Workshop', instructions: '  Walk straight for 350 meters, then turn left and go 50 meters to reach your destination ', distance: '400 meters' },
      { name: 'Central Library', instructions: '350 meters walk straight, left 100 meters', distance: '450m' },
     { name: 'TIIR Building', instructions: ' Walk 150 meters towards CVR, then go 50 meters from the gate to reach your destination ', distance: '200 meters' },
      { name: 'Arun Tea Stall', instructions: ' Walk straight for 400 meters, then turn right and go 50 meters to reach your destination ', distance: '450m' },
      { name: 'Metallurgy Department', instructions: 'Walk straight for 500 meters from the gate', distance: '500 meters ' },
      { name: 'PPA', instructions: ' Walk straight for 500 meters from the gate, then turn left and go 20 meters to the gate', distance: '520 meters' },
      { name: 'BBA', instructions: ' Walk straight for 550 meters from the gate, then turn right and go 50 meters to the gate.', distance: '600 meters' },
      { name: 'CS Department', instructions: 'Walk straight for 570 meters from the gate, then turn left and go 30 meters to the gate.', distance: '600 meters' },
      { name: 'SAC', instructions: ' Walk straight for 650 meters from the gate', distance: '650 meters' },
      { name: 'Electrical Department', instructions: ' Walk straight for 650 meters from the gate, then turn left and go 100 meters to the gate', distance: '750 meters' }
    ]
  };

  const allDestinations = [
    ...routes.jagdaGate.map(route => ({ ...route, startPoint: 'Jagda Gate (H4)' })),
    ...routes.basketballCourt.map(route => ({ ...route, startPoint: 'Basketball Court (G7)' }))
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 0) {
      const filtered = allDestinations.filter(dest =>
        dest.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 8));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setQuery(suggestion.name);
    setSuggestions([]);
    onRouteSelect(suggestion);
  };

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          🔍
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search destinations (e.g., CS Department, Amul Parlour, CVR Hostel...)"
          className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 shadow-sm text-lg"
        />
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 flex items-center justify-between transition-colors duration-150"
            >
              <div className="flex items-center space-x-3">
                📍
                <div>
                  <span className="text-gray-900 font-medium">{suggestion.name}</span>
                  <p className="text-sm text-gray-500">From {suggestion.startPoint}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                🧭
                <span className="text-sm text-blue-600 font-medium">{suggestion.distance}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}