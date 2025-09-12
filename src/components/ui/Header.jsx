import React from 'react'

export default function Header() {
  return (
   <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <button
          id="sidebar-toggle"
          className="lg:hidden text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          Student Management System
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <span className="hidden md:block">Admin User</span>
          </button>
        </div>
        <button
          id="logout-btn"
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
  )
}
