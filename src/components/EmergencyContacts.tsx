import React from 'react';

export default function EmergencyContacts() {
  const contacts = [
    { name: 'Campus Security', number: '0661-246-2999', icon: '🚨' },
    { name: 'Medical Emergency', number: '0661-246-2777', icon: '🏥' },
    { name: 'Hostel Warden', number: '0661-246-2888', icon: '🏠' },
    { name: 'Student Helpline', number: '0661-246-2555', icon: '📞' }
  ];

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-xl">🆘</span>
        <h3 className="text-lg font-bold text-gray-900">Emergency Contacts</h3>
      </div>
      
      <div className="space-y-3">
        {contacts.map((contact, index) => (
          <button
            key={index}
            onClick={() => handleCall(contact.number)}
            className="w-full flex items-center justify-between p-3 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{contact.icon}</span>
              <div className="text-left">
                <p className="font-medium text-red-800">{contact.name}</p>
                <p className="text-sm text-red-600">{contact.number}</p>
              </div>
            </div>
            <span className="text-red-600">📞</span>
          </button>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          ⚠️ For immediate emergencies, dial 100 (Police) or 108 (Ambulance)
        </p>
      </div>
    </div>
  );
}