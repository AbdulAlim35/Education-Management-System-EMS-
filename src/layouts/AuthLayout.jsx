import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/ui/Sidebar'
import Header from '../components/ui/Header'

export default function AuthLayout() {
  return (
   <div id="admin-panel" className=" min-h-screen bg-gray-50">
  {/* Header */}
  <Header/>
  <div className="flex">
    {/* Sidebar */}
   <Sidebar/>
    {/* Main Content */}
    <main className="flex-1 lg:ml-0">
     <Outlet/>
    </main>
  </div>
</div>

  )
}
