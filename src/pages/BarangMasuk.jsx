// src/pages/BarangKeluar.jsx
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import TableRow from "../components/TableRowBM";
import { Plus, Printer, Pencil } from "lucide-react";

export default function BarangMasuk() {
  const [barangKeluar] = useState([
  { no: 1, noTransaksi: "T-BK-2508010001", tglMasuk: "01-08-2025", supplier: "PT Asia", namaBarang: "AC", jumlahMasuk: "20", user: "Kevin" },
  { no: 2, noTransaksi: "T-BK-2508010002", tglMasuk: "01-08-2025", supplier: "PT Indo", namaBarang: "Laptop", jumlahMasuk: "15", user: "Sarah" },
  { no: 3, noTransaksi: "T-BK-2508020003", tglMasuk: "02-08-2025", supplier: "PT Sinar Jaya", namaBarang: "Printer", jumlahMasuk: "10", user: "Andi" },
  { no: 4, noTransaksi: "T-BK-2508020004", tglMasuk: "02-08-2025", supplier: "PT Maju Mundur", namaBarang: "Mouse Wireless", jumlahMasuk: "50", user: "Dewi" },
  { no: 5, noTransaksi: "T-BK-2508030005", tglMasuk: "03-08-2025", supplier: "PT Cahaya", namaBarang: "Meja Kantor", jumlahMasuk: "8", user: "Rudi" },
  { no: 6, noTransaksi: "T-BK-2508030006", tglMasuk: "03-08-2025", supplier: "PT Teknologi Nusantara", namaBarang: "Proyektor", jumlahMasuk: "5", user: "Budi" },
  { no: 7, noTransaksi: "T-BK-2508040007", tglMasuk: "04-08-2025", supplier: "PT Elektronik Jaya", namaBarang: "TV LED", jumlahMasuk: "12", user: "Sinta" },
  { no: 8, noTransaksi: "T-BK-2508040008", tglMasuk: "04-08-2025", supplier: "PT Sukses Makmur", namaBarang: "Kursi Kantor", jumlahMasuk: "30", user: "Ahmad" },
  { no: 9, noTransaksi: "T-BK-2508050009", tglMasuk: "05-08-2025", supplier: "PT OfficeMart", namaBarang: "Whiteboard", jumlahMasuk: "7", user: "Lina" },
  { no: 10, noTransaksi: "T-BK-2508050010", tglMasuk: "05-08-2025", supplier: "PT Komputerindo", namaBarang: "Keyboard Mechanical", jumlahMasuk: "25", user: "Hadi" },
]);


  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
          <h2 className="font-bold text-lg">Riwayat Barang Masuk</h2>
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
              "Tgl Masuk",
              "Supplier",
              "Nama Barang",
              "Jumlah Masuk",
              "User",
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
