import { useState } from "react";

export default function FormDataBarang({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    idBarang: "B000008",
    namaBarang: "",
    jenisBarang: "",
    satuanBarang: "",
    stok: "",
    harga: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      idBarang: "B000008",
      namaBarang: "",
      jenisBarang: "",
      satuanBarang: "",
      stok: "",
      harga: "",
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
      <h2 className="text-2xl font-bold mb-6">Form Tambah Barang</h2>

      {/* ID Barang */}
      <div className="mb-4">
        <label className="block font-medium mb-1">ID Barang</label>
        <input
          type="text"
          name="idBarang"
          value={formData.idBarang}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-500"
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
          placeholder="Nama Barang..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Jenis Barang */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Jenis Barang</label>
        <select
          name="jenisBarang"
          value={formData.jenisBarang}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">-- Pilih Jenis Barang --</option>
          <option value="Alat">Alat</option>
          <option value="Bahan">Bahan</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      {/* Satuan Barang */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Satuan Barang</label>
        <select
          name="satuanBarang"
          value={formData.satuanBarang}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">-- Pilih Satuan --</option>
          <option value="PCS">PCS</option>
          <option value="Box">Box</option>
          <option value="Kg">Kg</option>
        </select>
      </div>

      {/* Stok */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Stok</label>
        <input
          type="number"
          name="stok"
          value={formData.stok}
          onChange={handleChange}
          placeholder="Masukkan jumlah stok..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Harga */}
      <div className="mb-6">
        <label className="block font-medium mb-1">Harga</label>
        <input
          type="number"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          placeholder="Masukkan harga barang..."
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
