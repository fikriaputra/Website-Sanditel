// src/pages/BarangKeluar.jsx
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import TableRow from "../components/TableRowBK";
import { Plus, Printer, Pencil } from "lucide-react";

export default function BarangKeluar() {
  const [barangKeluar] = useState([
    { no: 1, noTransaksi: "T-BK-2411130009", tglKeluar: "13-02-2024", namaBarang: "Buku", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "20 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
    { no: 2, noTransaksi: "T-BK-2411130008", tglKeluar: "13-02-2024", namaBarang: "Lakban", namaPenerima: "Advin", divisi: "CCTV", totalKeluar: "30 Pcs", petugas: "Administrator" },
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
