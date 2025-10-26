import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";

import Dashboard from "@/features/dashboard/pages/Dashboard";
import Class from "../features/class/pages/Class";
import Section from "@/features/section/pages/Section";
import Student from "@/features/student/pages/Student";
import Teacher from "@/features/teacher/pages/Teacher";
import Subject from "@/features/subject/pages/Subject";
import ProtectedRoute from "@/components/route/ProtectedRoute";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="auth" element={
       <ProtectedRoute>
           <AuthLayout />
       </ProtectedRoute>

      
       
        }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="class" element={<Class />} />
        <Route path="section" element={<Section />} />
        <Route path="student" element={<Student />} />
        <Route path="teacher" element={<Teacher />} />
         <Route path="subject" element={<Subject />} />
      </Route>
    </Routes>
  );
}
