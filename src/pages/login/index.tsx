import MainLayout from "@/src/layouts/MainLayout";
import React from "react";
import MainForm from "@/src/components/loginForm/MainForm";

const index: React.FC = () => {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <MainLayout>
      <MainForm />
    </MainLayout>
  );
};
export default index;
