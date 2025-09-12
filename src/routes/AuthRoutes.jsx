import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentSection from '../features/auth/dashboard/pages/components/StudentSection'
import AuthLayout from '../layouts/AuthLayout'
import Sidebar from '../components/ui/Sidebar'
import Header from '../components/ui/Header'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path='auth' element={<AuthLayout/>}>
      <Route path='student' element={<StudentSection/>} />
       </Route>
    </Routes>
  )
}
