import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";

import Dashboard from "@/features/dashboard/pages/Dashboard";
import Class from "../features/class/pages/Class";
import Section from "@/features/section/pages/Section";
import Student from "@/features/student/pages/Student";
import Teacher from "@/features/teacher/pages/teacher";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="class" element={<Class />} />
        <Route path="section" element={<Section />} />
        <Route path="student" element={<Student />} />
        <Route path="teacher" element={<Teacher />} />
      </Route>
    </Routes>
  );
}
