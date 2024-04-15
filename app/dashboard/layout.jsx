import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <section className="flex text-[#222]">
      <div className="flex-1 bg-blue-700 p-[20px]">
        <Sidebar />
      </div>

      <div className="flex-[4] p-[20px]">
        <Nav />
        {children}
        <Footer />
      </div>
    </section>
  );
};

export default DashboardLayout;
