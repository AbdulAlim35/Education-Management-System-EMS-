import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

export default function Header() {
  const navigate =useNavigate()
  const {setAuth} =useTheme()
  const logout = async () => {
     setAuth(false)
     localStorage.removeItem("token")
      toast.success("Logout Successfully!");
     navigate("/", {replace:true})
  }


  return (
  <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-40">
  <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
    {/* Left section */}
    <div className="flex items-center space-x-3 sm:space-x-4">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
        Student Management System
      </h1>
    </div>

    {/* Right section */}
    <div className="flex items-center space-x-3 sm:space-x-4">
      <button
        onClick={logout}
        id="logout-btn"
        className="bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base cursor-pointer "
      >
        Logout
      </button>
    </div>
  </div>
</header>

  )
}
