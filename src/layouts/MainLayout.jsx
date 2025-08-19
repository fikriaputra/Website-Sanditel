// src/layouts/MainLayout.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* di HP -> sidebar jadi overlay, di desktop -> fixed di kiri */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:inset-auto`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Konten Halaman */}
        <main className="flex-1 p-4 transition-all duration-300 overflow-y-auto mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
