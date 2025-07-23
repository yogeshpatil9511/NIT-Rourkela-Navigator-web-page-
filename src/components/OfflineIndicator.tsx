import React from 'react';

export default function OfflineIndicator() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
      <div className="flex items-center justify-center space-x-2">
        <span>📶</span>
        <span className="font-medium">You're offline. Some features may not work.</span>
      </div>
    </div>
  );
}