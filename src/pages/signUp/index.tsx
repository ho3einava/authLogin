import MainForm from "@/src/components/SignupForm/MainForm";
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
