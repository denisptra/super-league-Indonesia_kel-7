// components/admin/adminLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../../components/admin/Navbar";

const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Navbar />
      {/* Area konten */}
      <main className="min-h-screen pl-64 pt-16">
        {/* Container biar ga dempet & centered */}
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8 space-y-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
