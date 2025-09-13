import React from 'react'
import PageLayout from '@/components/share/PageLayout'

export default function TeachersSection() {
  return (
   
   <>
   <PageLayout title="Teachers" description="Manage teacher information and assignments" buttonLabel="Add Teacher"/>



   <div id="teachers-section" className="content-section p-6">
  {/* Teachers Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-semibold">DR</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Dr. Robert Smith
          </h3>
          <p className="text-gray-600">Mathematics</p>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium">Email:</span> robert.smith@school.edu
        </p>
        <p>
          <span className="font-medium">Phone:</span> +1 234 567 8900
        </p>
        <p>
          <span className="font-medium">Experience:</span> 15 years
        </p>
        <p>
          <span className="font-medium">Classes:</span> 10A, 11B, 12A
        </p>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          View Profile
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
          Edit
        </button>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-semibold">SJ</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
          <p className="text-gray-600">English Literature</p>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium">Email:</span> sarah.johnson@school.edu
        </p>
        <p>
          <span className="font-medium">Phone:</span> +1 234 567 8901
        </p>
        <p>
          <span className="font-medium">Experience:</span> 12 years
        </p>
        <p>
          <span className="font-medium">Classes:</span> 10B, 11A, 12B
        </p>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          View Profile
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
          Edit
        </button>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-semibold">MW</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Michael Wilson
          </h3>
          <p className="text-gray-600">Physics</p>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium">Email:</span> michael.wilson@school.edu
        </p>
        <p>
          <span className="font-medium">Phone:</span> +1 234 567 8902
        </p>
        <p>
          <span className="font-medium">Experience:</span> 8 years
        </p>
        <p>
          <span className="font-medium">Classes:</span> 11A, 11B, 12A
        </p>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          View Profile
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
          Edit
        </button>
      </div>
    </div>
  </div>
</div>
   
   
   </>
   
   
   
   
   

  )
}
