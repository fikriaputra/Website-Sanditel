import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import PengajuanBarang from "./pages/PengajuanBarang/PengajuanBarang";
import AddPengajuanBarang from "./pages/PengajuanBarang/AddPengajuanBarang";
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
import StokOpname from "./pages/StokOpname/StokOpname";
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage";
import PersetujuanBarang from "./pages/PengajuanBarang/PersetujuanBarang";
import PeminjamanMultiple from "./pages/PeminjamanAset/PeminjamanMultiple";


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
          <Route path="/login" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
          <Route path="/forgot-password" element={<AnimatedPage><ForgotPasswordPage /></AnimatedPage>} />
          <Route path="/register" element={<AnimatedPage direction={-1}><RegisterPage /></AnimatedPage>} />
          <Route path="/dashboard" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
          <Route path="/pengajuan-barang" element={<AnimatedPage><PengajuanBarang /></AnimatedPage>} />
          <Route path="/add-pengajuan-barang" element={<AnimatedPage><AddPengajuanBarang /></AnimatedPage>} />
          <Route path="/persetujuan-barang" element={<AnimatedPage><PersetujuanBarang /></AnimatedPage>} />
          <Route path="/data-aset" element={<AnimatedPage><DataAset /></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/add-data-aset" element={<AnimatedPage><AddDataAset /></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/edit-data-aset/:id" element={<AnimatedPage><EditDataAset /></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/data-barang" element={<AnimatedPage><DataBarang /></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/add-data-barang" element={<AnimatedPage><AddDataBarang /></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/edit-data-barang/:id" element={<AnimatedPage><EditDataBarang/></AnimatedPage>} /> {/* <-- arahkan ke DataAset */}
          <Route path="/barang-keluar" element={<AnimatedPage><BarangKeluar /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/add-barang-keluar" element={<AnimatedPage><AddBarangKeluar /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/edit-barang-keluar/:id" element={<AnimatedPage><EditBarangKeluar /></AnimatedPage>} />


          <Route path="/barang-masuk" element={<AnimatedPage><BarangMasuk /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/add-barang-masuk" element={<AnimatedPage><AddBarangMasuk /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
           <Route 
  path="/edit-barang-masuk/:id" 
  element={<AnimatedPage><EditBarangMasuk /></AnimatedPage>} 
/> 
          <Route path="/peminjaman-aset" element={<AnimatedPage><PeminjamanAset /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/add-peminjaman-aset" element={<AnimatedPage><AddPeminjamanAset /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          <Route path="/peminjaman-multiple" element={<AnimatedPage><PeminjamanMultiple /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
          
          <Route path="/stok-opname" element={<AnimatedPage><StokOpname /></AnimatedPage>} /> {/* <-- arahkan ke BarangMasuk */}
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
