import React, { useState, useEffect } from 'react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    temp: '28°C',
    condition: 'Sunny',
    humidity: '65%',
    windSpeed: '12 km/h'
  });

  // Simulate weather updates
  useEffect(() => {
    const conditions = ['Sunny', 'Cloudy', 'Partly Cloudy', 'Light Rain'];
    const temps = ['26°C', '28°C', '30°C', '32°C', '25°C'];
    
    const interval = setInterval(() => {
      setWeather({
        temp: temps[Math.floor(Math.random() * temps.length)],
        condition: conditions[Math.floor(Math.random() * conditions.length)],
        humidity: `${Math.floor(Math.random() * 30) + 50}%`,
        windSpeed: `${Math.floor(Math.random() * 10) + 8} km/h`
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'Sunny': return '☀️';
      case 'Cloudy': return '☁️';
      case 'Partly Cloudy': return '⛅';
      case 'Light Rain': return '🌦️';
      default: return '🌤️';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Weather</h3>
        <span className="text-2xl">{getWeatherIcon(weather.condition)}</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Temperature</span>
          <span className="font-semibold text-blue-600">{weather.temp}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Condition</span>
          <span className="font-medium">{weather.condition}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Humidity</span>
          <span className="font-medium">{weather.humidity}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Wind Speed</span>
          <span className="font-medium">{weather.windSpeed}</span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          🌡️ Perfect weather for campus exploration!
        </p>
      </div>
    </div>
  );
}