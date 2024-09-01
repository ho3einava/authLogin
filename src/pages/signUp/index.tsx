import MainForm from "@/src/components/SignUpForm/MainForm";
import MainLayout from "@/src/layouts/MainLayout";
import React from "react";

export default function index() {
  return (
    <div>
      <MainLayout>
        <MainForm />
      </MainLayout>
    </div>
  );
}
