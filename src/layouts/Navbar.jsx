import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const location = useLocation();

  // Mapping route ke judul halaman
  const pageTitles = {
    "/": "Dashboard",
    "/data-barang": "Data Barang",
    "/barang-masuk": "Barang Masuk",
    "/barang-keluar": "Barang Keluar",
    "/pengajuan-barang": "Pengajuan Barang",
    "/data-aset": "Data Aset",
    "/peminjaman-aset": "Peminjaman Aset",
    "/stok-opname": "Stok Opname",
  };

  // Ambil judul sesuai path, default "Dashboard"
  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="bg-white shadow p-3 sm:p-4 flex flex-wrap gap-2 justify-between items-center 
                    fixed top-0 left-0 right-0 z-50 lg:ml-64">
      {/* Tombol Toggle khusus HP */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-700 p-2 rounded hover:bg-gray-100"
      >
        <FaBars className="w-5 h-5" />
      </button>

      {/* Judul Halaman Dinamis */}
      <h1 className="text-base sm:text-lg md:text-xl font-bold">{currentTitle}</h1>

      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-gray-600 text-xs sm:text-sm md:text-base">Halo, Admin</span>
        <img
          src="public\ChatGPT_Image_8_Agu_2025__23.59.29-removebg-preview (1).png"
          alt="User"
          className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </div>
  );
}
