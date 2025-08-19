import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import PengajuanBarang from "./pages/PengajuanBarang";
import DataAset from "./pages/DataAset"; // <-- tambahkan import baru
import DataBarang from "./pages/DataBarang";
import BarangKeluar from "./pages/BarangKeluar";
import BarangMasuk from "./pages/BarangMasuk";
import PeminjamanAset from "./pages/PeminjamanAset";
import StokOpname from "./pages/StokOpname";

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
          <Route path="/" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/register" element={<AnimatedPage direction={-1}><RegisterPage /></AnimatedPage>} />
          <Route path="/dashboard" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
          <Route path="/pengajuan-barang" element={<AnimatedPage><PengajuanBarang /></AnimatedPage>} />
          <Route path="/data-aset" element={<AnimatedPage><DataAset /></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/data-barang" element={<AnimatedPage><DataBarang /></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/barang-keluar" element={<AnimatedPage><BarangKeluar /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/barang-masuk" element={<AnimatedPage><BarangMasuk /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/peminjaman-aset" element={<AnimatedPage><PeminjamanAset /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/stok-opname" element={<AnimatedPage><StokOpname /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
