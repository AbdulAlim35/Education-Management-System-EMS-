import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentSection from '../features/auth/student/pages/StudentSection'
import AuthLayout from '../layouts/AuthLayout'



export default function AuthRoutes() {
  return (
    <Routes>
      <Route path='auth' element={<AuthLayout/>}>
      <Route path='student' element={<StudentSection/>} />
       </Route>
    </Routes>
  )
}
