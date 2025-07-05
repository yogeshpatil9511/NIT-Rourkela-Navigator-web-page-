import React, { useState } from 'react';

interface LoginModalProps {
  onLogin: (rollNumber: string) => void;
  onClose: () => void;
}

export default function LoginModal({ onLogin, onClose }: LoginModalProps) {
  const [rollNumber, setRollNumber] = useState('');
  const [error, setError] = useState('');

  const validateRollNumber = (roll: string) => {
    // Check if it's 9 characters, starts with 122-129, and has the format 12XXXXX0000
    // Where XX can be any 2 letters (a-z, A-Z) and 0000 can be any 4 digits
    const pattern = /^12[2-9][a-zA-Z]{2}\d{4}$/;
    return pattern.test(roll);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateRollNumber(rollNumber)) {
      setError('Invalid roll number format. Must be 9 characters: 122-129 + 2 letters + 4 digits (e.g., 122mm0690, 123cs1234, 124ee5678)');
      return;
    }
    
    onLogin(rollNumber.toUpperCase());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setRollNumber(value);
    setError('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Student Login</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Roll Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                👤
              </div>
              <input
                type="text"
                id="rollNumber"
                value={rollNumber}
                onChange={handleInputChange}
                placeholder="122mm0690"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={9}
              />
            </div>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-gray-500">
                Format: 122-129 + 2 letters + 4 digits
              </p>
              <p className="text-xs text-blue-600">
                Examples: 122mm0690, 123cs1234, 124ee5678, 125me9876
              </p>
            </div>
          </div>
          
          {error && (
            <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              ⚠️
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Valid formats:</strong> Roll numbers starting with 122-129 followed by 2 letters and 4 digits
          </p>
        </div>
      </div>
    </div>
  );
}