import React from "react";
import PageLayout from "@/components/share/PageLayout";
import CardLayout from "@/components/share/CardLayout";
import { CardConfig } from "../config/CardConfig";

export default function TeachersSection() {
  return (
    <>
      <PageLayout
        title="Teachers"
        description="Manage teacher information and assignments"
        buttonLabel="Add Teacher"
      >
        <CardLayout  CardConfig={CardConfig} />
      </PageLayout>
    </>
  );
}
