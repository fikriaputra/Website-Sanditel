import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBox,
  FaSignInAlt,
  FaSignOutAlt,
  FaClipboardList,
  FaDatabase,
  FaExchangeAlt,
  FaBoxes,
  FaChartPie
} from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menus = [
    { name: "Dashboard", icon: <FaChartPie />, path: "/dashboard" },
    { name: "Data Barang", icon: <FaBox />, path: "/data-barang" },
    { name: "Barang Masuk", icon: <FaSignInAlt />, path: "/barang-masuk" },
    { name: "Barang Keluar", icon: <FaSignOutAlt />, path: "/barang-keluar" },
    { name: "Pengajuan Barang", icon: <FaClipboardList />, path: "/pengajuan-barang" },
    { name: "Data Aset", icon: <FaDatabase />, path: "/data-aset" },
    { name: "Peminjaman Aset", icon: <FaExchangeAlt />, path: "/peminjaman-aset" },
    { name: "Stok Opname", icon: <FaBoxes />, path: "/stok-opname" },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-500 text-white p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 z-40 
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-64`}
      >
        <div className="p-4 text-lg font-bold border-b flex items-center gap-2">
          <img
            src="/ChatGPT_Image_8_Agu_2025__23.59.29-removebg-preview (1).png" // FIX path public
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          SANDITEL App
        </div>

        <ul className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-60px)]">
          {menus.map((menu, idx) => (
            <li
              key={menu.path}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-50 cursor-pointer"
              onClick={() => {
                setOpen(false); // Tutup sidebar di mobile
                navigate(menu.path);
              }}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
