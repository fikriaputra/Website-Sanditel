// pages/PeminjamanAset.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Printer, Plus, CopyPlus } from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import Table from "../../components/DataBarang/Table";

export default function PeminjamanAset() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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

  const handleTambah = () => navigate("/add-peminjaman-aset");
  const handleTambahMultiple = () => navigate("/peminjaman-multiple");
  const handlePrint = () => window.print();
  const handleKembalikan = (index) => {
    alert(`Barang dengan nomor ${peminjamanAset[index].number} dikembalikan`);
  };

  // Filter data berdasarkan search
  const filteredData = peminjamanAset.filter(
    (item) =>
      item.barang.toLowerCase().includes(search.toLowerCase()) ||
      item.pamina.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow p-4">
        {/* Header Halaman */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
          <h2 className="text-xl font-bold">Data Peminjaman Aset</h2>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm transition-colors justify-center"
              title="Print Data"
            >
              <Printer size={18} />
              <span className="hidden sm:inline">Cetak</span>
            </button>

            <button
              onClick={handleTambah}
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded shadow transition w-10 h-10 sm:w-auto sm:h-auto"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Tambah</span>
            </button>

            <button
              onClick={handleTambahMultiple}
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded shadow transition w-10 h-10 sm:w-auto sm:h-auto"
            >
              <CopyPlus size={18} />
              <span className="hidden sm:inline">Peminjaman Multiple</span>
            </button>
          </div>
        </div>

        {/* Search (Mobile) */}
        <div className="sm:hidden mb-4 relative">
          <input
            type="text"
            placeholder="Cari barang..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none text-sm"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </div>

        {/* Card View (Mobile) */}
        <div className="block sm:hidden space-y-3">
          {filteredData.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-sm p-3 bg-gray-50"
            >
              {/* Header Card */}
              <div className="flex justify-between items-center mb-1">
                <div className="font-bold text-gray-800">{item.barang}</div>
                <span className="text-sm text-gray-500">#{item.number}</span>
              </div>

              <div className="text-sm text-gray-600">Peminjam: {item.pamina}</div>
              <div className="text-sm text-gray-600">Tgl Pinjam: {item.tglPinjam}</div>
              <div className="text-sm text-gray-600">Tgl Kembali: {item.tglKembali}</div>
              <div className="text-sm text-gray-600">Jumlah: {item.jumlah}</div>
              <div className="text-sm text-gray-600">
                Sisa Stok:{" "}
                <span
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    item.sisaStok > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.sisaStok}
                </span>
              </div>

              <div className="mt-2">
                <button
                  onClick={() => handleKembalikan(idx)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded shadow text-sm"
                >
                  Kembalikan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table View (Desktop) */}
        <div className="hidden sm:block overflow-x-auto">
          <Table
            headers={[
              "No",
              "Nama Barang",
              "Peminjam",
              "Tanggal Pinjam",
              "Tanggal Kembali",
              "Jumlah",
              "Sisa Stok",
              "Aksi",
            ]}
          >
            {filteredData.map((item, idx) => (
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
                <td className="p-3 text-sm text-gray-600 font-medium whitespace-nowrap">
                  {item.tglPinjam}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium whitespace-nowrap">
                  {item.tglKembali}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  {item.jumlah}
                </td>
                <td className="p-3 text-sm text-gray-600 font-medium">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      item.sisaStok > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.sisaStok}
                  </span>
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
