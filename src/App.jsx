// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import pages...
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage";
import Menu from "./pages/Menu/Menu";
import Dashboard from "./pages/Dashboard/Dashboard";
import PengajuanBarang from "./pages/PengajuanBarang/PengajuanBarang";
import AddPengajuanBarang from "./pages/PengajuanBarang/AddPengajuanBarang";
import PersetujuanBarang from "./pages/PengajuanBarang/PersetujuanBarang";
import DataAset from "./pages/DataAset/DataAset";
import AddDataAset from "./pages/DataAset/AddDataAset";
import EditDataAset from "./pages/DataAset/EditDataAset";
import DataBarang from "./pages/DataBarang/DataBarang";
import AddDataBarang from "./pages/DataBarang/AddDataBarang";
import EditDataBarang from "./pages/DataBarang/EditDataBarang";
import BarangKeluar from "./pages/BarangKeluar/BarangKeluar";
import AddBarangKeluar from "./pages/BarangKeluar/AddBarangKeluar";
import EditBarangKeluar from "./pages/BarangKeluar/EditBarangKeluar";
import BarangMasuk from "./pages/BarangMasuk/BarangMasuk";
import AddBarangMasuk from "./pages/BarangMasuk/AddBarangMasuk";
import EditBarangMasuk from "./pages/BarangMasuk/EditBarangMasuk";
import PeminjamanAset from "./pages/PeminjamanAset/PeminjamanAset";
import AddPeminjamanAset from "./pages/PeminjamanAset/AddPeminjamanAset";
import PeminjamanMultiple from "./pages/PeminjamanAset/PeminjamanMultiple";
import StokOpname from "./pages/StokOpname/StokOpname";
import Pekerjaan from "./pages/Pekerjaan/Pekerjaan";
import AddPekerjaan from "./pages/Pekerjaan/AddPekerjaan";


// 🔹 Animated wrapper
function AnimatedPage({ children, direction = 1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 * direction }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 * direction }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}


// 🔹 Whitelist animasi (gampang diatur di sini)
const animatedRoutes = [
  "/", 
  "/login", 
  "/register", 
  "/forgot-password"
];


// 🔹 Route handler
function AnimatedRoutes() {
  const location = useLocation();

  const withAnimation = (path, element, direction = 1) => {
    if (animatedRoutes.includes(path)) {
      return <AnimatedPage direction={direction}>{element}</AnimatedPage>;
    }
    return element;
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Auth */}
        <Route path="/" element={withAnimation("/", <LoginPage />)} />
        <Route path="/login" element={withAnimation("/login", <LoginPage />)} />
        <Route path="/register" element={withAnimation("/register", <RegisterPage />, -1)} />
        <Route path="/forgot-password" element={withAnimation("/forgot-password", <ForgotPasswordPage />)} />

        {/* Menu Dashboard */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/pekerjaan" element={<Pekerjaan />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Pengajuan Barang */}
        <Route path="/pengajuan-barang" element={<PengajuanBarang />} />
        <Route path="/add-pengajuan-barang" element={<AddPengajuanBarang />} />
        <Route path="/persetujuan-barang" element={<PersetujuanBarang />} />

        {/* Data Aset */}
        <Route path="/data-aset" element={<DataAset />} />
        <Route path="/add-data-aset" element={<AddDataAset />} />
        <Route path="/edit-data-aset/:id" element={<EditDataAset />} />

        {/* Data Barang */}
        <Route path="/data-barang" element={<DataBarang />} />
        <Route path="/add-data-barang" element={<AddDataBarang />} />
        <Route path="/edit-data-barang/:id" element={<EditDataBarang />} />

        {/* Barang Keluar */}
        <Route path="/barang-keluar" element={<BarangKeluar />} />
        <Route path="/add-barang-keluar" element={<AddBarangKeluar />} />
        <Route path="/edit-barang-keluar/:id" element={<EditBarangKeluar />} />

        {/* Barang Masuk */}
        <Route path="/barang-masuk" element={<BarangMasuk />} />
        <Route path="/add-barang-masuk" element={<AddBarangMasuk />} />
        <Route path="/edit-barang-masuk/:id" element={<EditBarangMasuk />} />

        {/* Peminjaman Aset */}
        <Route path="/peminjaman-aset" element={<PeminjamanAset />} />
        <Route path="/add-peminjaman-aset" element={<AddPeminjamanAset />} />
        <Route path="/peminjaman-multiple" element={<PeminjamanMultiple />} />

        {/* Stok Opname */}
        <Route path="/stok-opname" element={<StokOpname />} />

        {/* Pekerjaan */}
        <Route path="/add-pekerjaan" element={<AddPekerjaan />} />        
      </Routes>
    </AnimatePresence>
  );
}


export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
