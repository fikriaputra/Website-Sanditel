import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden 
                      transition-all duration-300
                      lg:ml-64"> {/* 👉 ini penting biar konten geser saat sidebar fixed */}
        {/* Navbar */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Konten Halaman */}
        <main className="flex-1 p-4 overflow-y-auto mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
