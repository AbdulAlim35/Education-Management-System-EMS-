import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentSection from "@/features/student/pages/StudentSection";
import AuthLayout from "@/layouts/AuthLayout";
import TeachersSection from "@/features/teachers/pages/TeachersSection";
import Dashboard from "@/features/dashboard/pages/Dashboard";
import Class from "../features/class/pages/Class";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="class" element={<Class />} />
        <Route path="student" element={<StudentSection />} />
        <Route path="teachers" element={<TeachersSection />} />
      </Route>
    </Routes>
  );
}
