import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Printer, Plus, CopyPlus } from "lucide-react"; // ⬅️ tambahkan ikon

export default function PeminjamanAset() {
  const navigate = useNavigate();

  const [peminjamanAset, setPeminjamanAset] = useState([
    {
      number: 1,
      barang: "TL-SG1024D / TP-LINK ()",
      pamina: "Biro Bia / BKD",
      tglPinjam: "10-07-2025",
      tglKembali: "31-07-2025",
      jumlah: 1,
      sisaStok: 0,
    },
    {
      number: 2,
      barang: "Dell Laptop Latitude 3420",
      pamina: "Bagian IT",
      tglPinjam: "12-07-2025",
      tglKembali: "25-07-2025",
      jumlah: 2,
      sisaStok: 3,
    },
    {
      number: 3,
      barang: "Proyektor Epson X500",
      pamina: "Biro Umum",
      tglPinjam: "15-07-2025",
      tglKembali: "30-07-2025",
      jumlah: 1,
      sisaStok: 1,
    },
    {
      number: 4,
      barang: "Kursi Kantor Ergonomic",
      pamina: "Divisi HRD",
      tglPinjam: "18-07-2025",
      tglKembali: "01-08-2025",
      jumlah: 5,
      sisaStok: 10,
    },
    {
      number: 5,
      barang: "Meja Rapat Kayu Jati",
      pamina: "Divisi Keuangan",
      tglPinjam: "20-07-2025",
      tglKembali: "05-08-2025",
      jumlah: 3,
      sisaStok: 2,
    },
    {
      number: 6,
      barang: "Printer Laser HP MFP",
      pamina: "Divisi Pemasaran",
      tglPinjam: "22-07-2025",
      tglKembali: "06-08-2025",
      jumlah: 1,
      sisaStok: 4,
    },
    {
      number: 7,
      barang: "Whiteboard Magnetik",
      pamina: "Divisi Riset",
      tglPinjam: "25-07-2025",
      tglKembali: "10-08-2025",
      jumlah: 2,
      sisaStok: 3,
    },
  ]);

  const handleTambah = () => {
    navigate("/add-peminjaman-aset");
  };

  const handleTambahMultiple = () => {
    alert("Tambah peminjaman multiple");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleKembalikan = (index) => {
    alert(`Barang dengan nomor ${peminjamanAset[index].number} dikembalikan`);
  };

  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow p-4">
        {/* Header Halaman */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
          <h2 className="text-xl font-bold">Data Peminjaman Asset</h2>

          <div className="flex flex-wrap gap-2">
            {/* Print */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded shadow transition"
            >
              <Printer size={18} />
            </button>

            {/* Tambah */}
            <button
              onClick={handleTambah}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition"
            >
              <Plus size={18} /> Tambah
            </button>

            {/* Peminjaman Multiple */}
            <button
              onClick={handleTambahMultiple}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition"
            >
              <CopyPlus size={18} /> Peminjaman Multiple
            </button>
          </div>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <Table
            headers={[
              "Number",
              "Barang",
              "Peminjam",
              "Tanggal Pinjam",
              "Tanggal Kembali",
              "Jumlah",
              "Sisa Stok",
              "Aksi",
            ]}
          >
            {peminjamanAset.map((item, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 text-sm font-semibold text-gray-800">
                  {item.number}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  {item.barang}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  {item.pamina}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  {item.tglPinjam}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  {item.tglKembali}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  {item.jumlah}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  {item.sisaStok}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleKembalikan(idx)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow text-sm"
                  >
                    Kembalikan
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}
