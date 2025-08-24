// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Auth Pages
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Pengajuan Barang
import PengajuanBarang from "./pages/PengajuanBarang/PengajuanBarang";
import AddPengajuanBarang from "./pages/PengajuanBarang/AddPengajuanBarang";
import PersetujuanBarang from "./pages/PengajuanBarang/PersetujuanBarang";

// Data Aset
import DataAset from "./pages/DataAset/DataAset";
import AddDataAset from "./pages/DataAset/AddDataAset";
import EditDataAset from "./pages/DataAset/EditDataAset";

// Data Barang
import DataBarang from "./pages/DataBarang/DataBarang";
import AddDataBarang from "./pages/DataBarang/AddDataBarang";
import EditDataBarang from "./pages/DataBarang/EditDataBarang";

// Barang Keluar
import BarangKeluar from "./pages/BarangKeluar/BarangKeluar";
import AddBarangKeluar from "./pages/BarangKeluar/AddBarangKeluar";
import EditBarangKeluar from "./pages/BarangKeluar/EditBarangKeluar";

// Barang Masuk
import BarangMasuk from "./pages/BarangMasuk/BarangMasuk";
import AddBarangMasuk from "./pages/BarangMasuk/AddBarangMasuk";
import EditBarangMasuk from "./pages/BarangMasuk/EditBarangMasuk";

// Peminjaman Aset
import PeminjamanAset from "./pages/PeminjamanAset/PeminjamanAset";
import AddPeminjamanAset from "./pages/PeminjamanAset/AddPeminjamanAset";
import PeminjamanMultiple from "./pages/PeminjamanAset/PeminjamanMultiple";

// Stok Opname
import StokOpname from "./pages/StokOpname/StokOpname";

// Wrapper untuk animasi halaman
function AnimatedPage({ children, direction = 1 }) {
  return (
    <motion.div
      key={direction}
      initial={{ opacity: 0, x: 30 * direction }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 * direction }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Auth */}
          <Route path="/" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/login" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/register" element={<AnimatedPage direction={-1}><RegisterPage /></AnimatedPage>} />
          <Route path="/forgot-password" element={<AnimatedPage><ForgotPasswordPage /></AnimatedPage>} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<AnimatedPage><Dashboard /></AnimatedPage>} />

          {/* Pengajuan Barang */}
          <Route path="/pengajuan-barang" element={<AnimatedPage><PengajuanBarang /></AnimatedPage>} />
          <Route path="/add-pengajuan-barang" element={<AnimatedPage><AddPengajuanBarang /></AnimatedPage>} />
          <Route path="/persetujuan-barang" element={<AnimatedPage><PersetujuanBarang /></AnimatedPage>} />

          {/* Data Aset */}
          <Route path="/data-aset" element={<AnimatedPage><DataAset /></AnimatedPage>} />
          <Route path="/add-data-aset" element={<AnimatedPage><AddDataAset /></AnimatedPage>} />
          <Route path="/edit-data-aset/:id" element={<AnimatedPage><EditDataAset /></AnimatedPage>} />

          {/* Data Barang */}
          <Route path="/data-barang" element={<AnimatedPage><DataBarang /></AnimatedPage>} />
          <Route path="/add-data-barang" element={<AnimatedPage><AddDataBarang /></AnimatedPage>} />
          <Route path="/edit-data-barang/:id" element={<AnimatedPage><EditDataBarang /></AnimatedPage>} />

          {/* Barang Keluar */}
          <Route path="/barang-keluar" element={<AnimatedPage><BarangKeluar /></AnimatedPage>} />
          <Route path="/add-barang-keluar" element={<AnimatedPage><AddBarangKeluar /></AnimatedPage>} />
          <Route path="/edit-barang-keluar/:id" element={<AnimatedPage><EditBarangKeluar /></AnimatedPage>} />

          {/* Barang Masuk */}
          <Route path="/barang-masuk" element={<AnimatedPage><BarangMasuk /></AnimatedPage>} />
          <Route path="/add-barang-masuk" element={<AnimatedPage><AddBarangMasuk /></AnimatedPage>} />
          <Route path="/edit-barang-masuk/:id" element={<AnimatedPage><EditBarangMasuk /></AnimatedPage>} />

          {/* Peminjaman Aset */}
          <Route path="/peminjaman-aset" element={<AnimatedPage><PeminjamanAset /></AnimatedPage>} />
          <Route path="/add-peminjaman-aset" element={<AnimatedPage><AddPeminjamanAset /></AnimatedPage>} />
          <Route path="/peminjaman-multiple" element={<AnimatedPage><PeminjamanMultiple /></AnimatedPage>} />

          {/* Stok Opname */}
          <Route path="/stok-opname" element={<AnimatedPage><StokOpname /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
