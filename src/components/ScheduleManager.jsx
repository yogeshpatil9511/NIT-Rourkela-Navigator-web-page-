import React, { useState } from 'react';

export default function ScheduleManager({ rollNumber }) {
  const [schedules, setSchedules] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    subject: '',
    time: '',
    location: '',
    day: 'Monday'
  });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handleAddSchedule = (e) => {
    e.preventDefault();
    const schedule = {
      id: Date.now().toString(),
      ...newSchedule
    };
    setSchedules([...schedules, schedule]);
    setNewSchedule({ subject: '', time: '', location: '', day: 'Monday' });
    setShowAddForm(false);
  };

  const handleDeleteSchedule = (id) => {
    setSchedules(schedules.filter(s => s.id !== id));
  };

  const todaySchedules = schedules.filter(s => s.day === new Date().toLocaleDateString('en-US', { weekday: 'long' }));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">My Schedule</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
        >
          ➕
          <span>Add Class</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAddSchedule} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Subject"
              value={newSchedule.subject}
              onChange={(e) => setNewSchedule({ ...newSchedule, subject: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="time"
              value={newSchedule.time}
              onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={newSchedule.location}
              onChange={(e) => setNewSchedule({ ...newSchedule, location: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              value={newSchedule.day}
              onChange={(e) => setNewSchedule({ ...newSchedule, day: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {days.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors duration-200"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
          📅
          <span>Today's Classes</span>
        </h3>
        
        {todaySchedules.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No classes scheduled for today</p>
        ) : (
          todaySchedules.map(schedule => (
            <div key={schedule.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{schedule.subject}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center space-x-1">
                      🕐
                      <span>{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      📍
                      <span>{schedule.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteSchedule(schedule.id)}
                  className="p-2 hover:bg-red-100 rounded-full transition-colors duration-200"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}