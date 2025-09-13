import React from 'react'

export default function CardLayout({CardConfig}) {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {CardConfig && CardConfig().map((card, idx)=> (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow" key={idx}>
      <div className="flex items-center space-x-4 mb-4">
        <div className={` ${card.color} w-16 h-16 rounded-full flex items-center justify-center`}>
          <span className="text-white text-xl font-semibold">{card.initials}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
           {card.name}
          </h3>
          <p className="text-gray-600">{card.subject}</p>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium">Email:</span> {card.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {card.phone}
        </p>
        <p>
          <span className="font-medium">Experience:</span> {card.experience}
        </p>
        <p>
          <span className="font-medium">Classes:</span> {card.classes.join(", ")}
        </p>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className={`flex-1 ${card.color} text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors`}>
          View Profile
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
          Edit
        </button>
      </div>
    </div>
    ))}
  </div>
  )
}
