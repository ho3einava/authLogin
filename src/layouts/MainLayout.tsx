import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
interface IMainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = (props: IMainLayoutProps) => {
  const {children} = props;
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
