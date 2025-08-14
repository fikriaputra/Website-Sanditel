// src/pages/DataBarang.jsx
import MainLayout from "../layouts/MainLayout";
import Table from "../components/Table";
import TableRowDA from "../components/TableRowDA";
import { Printer, Plus } from "lucide-react";
import "../index.css"; // pastikan style scrollbar di-load

export default function DataBarang() {
  const dataBarang = [
    { Number: 1, ID: 1, Nama: "Laptop", Jenis: "Alat", Stok: 98, Satuan: "Pcs", Harga: "Rp 1.000.000" },
    { Number: 2, ID: 2, Nama: "Projector", Jenis: "Alat", Stok: 12, Satuan: "Pcs", Harga: "Rp 200.000" },
    { Number: 3, ID: 3, Nama: "Office Chair", Jenis: "Alat", Stok: 21, Satuan: "Pcs", Harga: "Rp 200.000" },
    { Number: 4, ID: 4, Nama: "Desk", Jenis: "Alat", Stok: 23, Satuan: "Bungkus", Harga: "Rp 200.000" },
    { Number: 5, ID: 5, Nama: "Printer", Jenis: "Alat", Stok: 13, Satuan: "Pcs", Harga: "Rp 200.000" },
  ];

  const headers = [
    "Number",
    "ID Barang",
    "Nama Barang",
    "Jenis Barang",
    "Stok",
    "Satuan",
    "Harga",
    "Aksi",
  ];

  const handleTambah = () => {
    console.log("Tambah data barang");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleView = (item) => {
    console.log("View", item);
  };

  const handleDelete = (item) => {
    console.log("Delete", item);
  };

  return (
    <MainLayout>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        {/* Header Halaman */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
          <h2 className="font-bold text-lg sm:text-xl">Daftar Data Barang</h2>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Tombol Print */}
            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm transition-colors flex items-center justify-center"
              title="Print Data"
            >
              <Printer size={20} />
            </button>

            {/* Tombol Tambah */}
            <button
              onClick={handleTambah}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded shadow transition-transform hover:scale-105"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Tambah</span>
            </button>
          </div>
        </div>

        {/* Area yang akan di-print */}
        <div id="printArea" className="table-container">
          <Table headers={headers}>
            {dataBarang.map((item, idx) => (
              <TableRowDA
                key={idx}
                item={item}
                onView={() => handleView(item)}
                onDelete={() => handleDelete(item)}
              />
            ))}
          </Table>
        </div>
      </div>

      {/* CSS Print */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #printArea, #printArea * {
              visibility: visible;
            }
            #printArea {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
          }
        `}
      </style>
    </MainLayout>
  );
}
