import React, { useState, useEffect } from 'react';

export default function LiveUpdates() {
  const [updates, setUpdates] = useState([
    { id: 1, message: 'Mess timings updated for weekend', time: '2 hours ago', type: 'info' },
    { id: 2, message: 'Basketball court maintenance completed', time: '4 hours ago', type: 'success' },
    { id: 3, message: 'Library extended hours during exams', time: '6 hours ago', type: 'info' }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'info': return 'ℹ️';
      case 'success': return '✅';
      case 'warning': return '⚠️';
      default: return '📢';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">📢</span>
          <h3 className="text-lg font-bold text-gray-900">Live Updates</h3>
        </div>
        <div className="text-sm text-gray-500">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
      
      <div className="space-y-3 max-h-48 overflow-y-auto">
        {updates.map((update) => (
          <div key={update.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start space-x-2">
              <span className="text-sm">{getTypeIcon(update.type)}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{update.message}</p>
                <p className="text-xs text-gray-500 mt-1">{update.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          🔔 Stay updated with campus announcements!
        </p>
      </div>
    </div>
  );
}