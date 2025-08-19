import { useState } from "react";

export default function FormBarangMasuk({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    noTransaksi: "T-BK-2508010001", // bisa digenerate otomatis
    tglMasuk: "",
    supplier: "",
    namaBarang: "",
    jumlahMasuk: "",
    user: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      noTransaksi: "T-BK-2508010001",
      tglMasuk: "",
      supplier: "",
      namaBarang: "",
      jumlahMasuk: "",
      user: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
    >
      <h2 className="text-2xl font-bold mb-6">Form Barang Masuk</h2>

      {/* No Transaksi */}
      <div className="mb-4">
        <label className="block font-medium mb-1">No Transaksi</label>
        <input
          type="text"
          name="noTransaksi"
          value={formData.noTransaksi}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-500"
        />
      </div>

      {/* Tanggal Masuk */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Tanggal Masuk</label>
        <input
          type="date"
          name="tglMasuk"
          value={formData.tglMasuk}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Supplier */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Supplier</label>
        <input
          type="text"
          name="supplier"
          value={formData.supplier}
          onChange={handleChange}
          placeholder="Masukkan nama supplier..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Nama Barang */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Nama Barang</label>
        <input
          type="text"
          name="namaBarang"
          value={formData.namaBarang}
          onChange={handleChange}
          placeholder="Masukkan nama barang..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Jumlah Masuk */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Jumlah Masuk</label>
        <input
          type="number"
          name="jumlahMasuk"
          value={formData.jumlahMasuk}
          onChange={handleChange}
          placeholder="Masukkan jumlah barang masuk..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* User */}
      <div className="mb-6">
        <label className="block font-medium mb-1">User</label>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleChange}
          placeholder="Masukkan nama user..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Tombol */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Reset
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Simpan
          </button>
        </div>
      </div>
    </form>
  );
}
