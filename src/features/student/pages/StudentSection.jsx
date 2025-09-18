import React from "react";
import { Outlet } from "react-router-dom";
import PageLayout from "@/components/share/PageLayout";
import TableLayout from "@/components/share/TableLayout";
import tableConfig from "../config/tableConfig";
import { studentFields } from "@/features/student/config/studentFields";
import AuthFormLayout from "@/components/share/AuthFormLayout";
import useStudent from "@/features/student/hooks/useStudent";

export default function StudentSection() {
  const student = useStudent();
  return (
    <>
      <PageLayout
        title="students"
        description="Manage student information and records"
        buttonLabel="Add Student"
        header="Add New Student"
        form={
          <AuthFormLayout studentFields={studentFields} student={student} />
        }
      >
        <TableLayout filter={false} columns={tableConfig} data={tableConfig} />
      </PageLayout>
    </>
  );
}
