// src/pages/BarangKeluar.jsx
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import TableRow from "../components/TableRowBK";
import { Plus, Printer, Pencil } from "lucide-react";

export default function BarangKeluar() {
  const [barangKeluar] = useState([
  { no: 1, noTransaksi: "T-BK-2508010001", tglKeluar: "01-08-2025", namaBarang: "Laptop", namaPenerima: "Advin", divisi: "IT", totalKeluar: "5 Unit", petugas: "Administrator" },
  { no: 2, noTransaksi: "T-BK-2508010002", tglKeluar: "01-08-2025", namaBarang: "Printer", namaPenerima: "Budi", divisi: "Keuangan", totalKeluar: "2 Unit", petugas: "Dewi" },
  { no: 3, noTransaksi: "T-BK-2508020003", tglKeluar: "02-08-2025", namaBarang: "Kursi Kantor", namaPenerima: "Citra", divisi: "HRD", totalKeluar: "10 Pcs", petugas: "Rudi" },
  { no: 4, noTransaksi: "T-BK-2508020004", tglKeluar: "02-08-2025", namaBarang: "Meja Kantor", namaPenerima: "Dani", divisi: "Operasional", totalKeluar: "4 Pcs", petugas: "Sinta" },
  { no: 5, noTransaksi: "T-BK-2508030005", tglKeluar: "03-08-2025", namaBarang: "Proyektor", namaPenerima: "Eka", divisi: "Marketing", totalKeluar: "1 Unit", petugas: "Bima" },
  { no: 6, noTransaksi: "T-BK-2508030006", tglKeluar: "03-08-2025", namaBarang: "Whiteboard", namaPenerima: "Fajar", divisi: "Training", totalKeluar: "3 Pcs", petugas: "Kevin" },
  { no: 7, noTransaksi: "T-BK-2508040007", tglKeluar: "04-08-2025", namaBarang: "Mouse Wireless", namaPenerima: "Gina", divisi: "IT", totalKeluar: "15 Pcs", petugas: "Sarah" },
  { no: 8, noTransaksi: "T-BK-2508040008", tglKeluar: "04-08-2025", namaBarang: "Keyboard Mechanical", namaPenerima: "Hendra", divisi: "Design", totalKeluar: "7 Pcs", petugas: "Andi" },
  { no: 9, noTransaksi: "T-BK-2508050009", tglKeluar: "05-08-2025", namaBarang: "Router", namaPenerima: "Indra", divisi: "Network", totalKeluar: "2 Unit", petugas: "Lina" },
  { no: 10, noTransaksi: "T-BK-2508050010", tglKeluar: "05-08-2025", namaBarang: "Harddisk Eksternal", namaPenerima: "Joko", divisi: "R&D", totalKeluar: "6 Unit", petugas: "Hadi" },
]);


  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
          <h2 className="font-bold text-lg">Riwayat Barang Keluar</h2>
          <div className="flex gap-2">
            <button
              onClick={() => alert("Cetak data")}
              className="flex items-center gap-2 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm transition-colors justify-center"
               title="Print Data"
            >
              <Printer size={20} />
              <span className="hidden sm:inline">Cetak</span>
            </button>
            <button
              onClick={() => alert("Tambah data barang keluar")}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              <Plus size={18} /> Tambah
            </button>
          </div>
        </div>

        {/* Table (tanpa border luar, tapi full lebar) */}
        <div className="overflow-x-auto">
          <Table
            headers={[
              "No",
              "No Transaksi",
              "Tgl Keluar",
              "Nama Barang",
              "Nama Penerima",
              "Divisi",
              "Total Keluar",
              "Petugas",
              "Aksi",
            ]}
          >
            {barangKeluar.map((item) => (
              <TableRow
                key={item.no}
                item={item}
                onEdit={() => alert(`Edit ${item.noTransaksi}`)}
                onDelete={() => alert(`Hapus ${item.noTransaksi}`)}
                editIcon={<Pencil size={16} />}
              />
            ))}
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}
