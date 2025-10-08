import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import TeachersSection from "@/features/teachers/pages/TeachersSection";
import Dashboard from "@/features/dashboard/pages/Dashboard";
import Class from "../features/class/pages/Class";
import Section from "@/features/section/pages/Section";
import Student from "@/features/student/pages/Student";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="class" element={<Class />} />
         <Route path="section" element={<Section />} />
         <Route path="student" element={<Student />} />
        <Route path="teachers" element={<TeachersSection />} />
      </Route>
    </Routes>
  );
}
