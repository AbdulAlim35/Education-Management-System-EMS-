import React from 'react'

export default function StudentSection() {
  return (
    <div id="students-section" className="content-section p-6">
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Students</h2>
      <p className="text-gray-600">Manage student information and records</p>
    </div>
    <button
      id="add-student-btn"
      className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <span>Add Student</span>
    </button>
  </div>
  {/* Search and Filter */}
  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <input
            type="text"
            id="student-search"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <svg
            className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <select
          id="class-filter"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">All Classes</option>
          <option value="10A">Class 10A</option>
          <option value="10B">Class 10B</option>
          <option value="11A">Class 11A</option>
          <option value="11B">Class 11B</option>
          <option value="12A">Class 12A</option>
          <option value="12B">Class 12B</option>
        </select>
        <select
          id="status-filter"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="flex space-x-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Export CSV
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Import CSV
        </button>
      </div>
    </div>
  </div>
  {/* Students Table */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JS</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    John Smith
                  </div>
                  <div className="text-sm text-gray-500">
                    john.smith@email.com
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              STU001
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              10A
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              +1 234 567 8900
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
              <button className="text-primary-600 hover:text-primary-900">
                View
              </button>
              <button className="text-yellow-600 hover:text-yellow-900">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-900">
                Delete
              </button>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">EJ</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Emma Johnson
                  </div>
                  <div className="text-sm text-gray-500">
                    emma.johnson@email.com
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              STU002
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              10B
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              +1 234 567 8901
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
              <button className="text-primary-600 hover:text-primary-900">
                View
              </button>
              <button className="text-yellow-600 hover:text-yellow-900">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-900">
                Delete
              </button>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">MW</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Michael Wilson
                  </div>
                  <div className="text-sm text-gray-500">
                    michael.wilson@email.com
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              STU003
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              11A
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              +1 234 567 8902
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
              <button className="text-primary-600 hover:text-primary-900">
                View
              </button>
              <button className="text-yellow-600 hover:text-yellow-900">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-900">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Pagination */}
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </button>
        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">3</span> of{" "}
            <span className="font-medium">1247</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
