import { useState } from "react";

export default function FormDataAset({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    number: "",
    assetName: "",
    brandCode: "",
    category: "",
    status: "Active",
    barcodeUpdateLog: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      number: "",
      assetName: "",
      brandCode: "",
      category: "",
      status: "Active",
      barcodeUpdateLog: "",
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
      <h2 className="text-2xl font-bold mb-6">Form Data Aset</h2>

      {/* Number */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Number</label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Masukkan nomor urut..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Asset Name */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Asset Name</label>
        <input
          type="text"
          name="assetName"
          value={formData.assetName}
          onChange={handleChange}
          placeholder="Masukkan nama aset..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Brand/Code */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Brand/Code</label>
        <input
          type="text"
          name="brandCode"
          value={formData.brandCode}
          onChange={handleChange}
          placeholder="Masukkan brand atau kode..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">Pilih kategori...</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Barcode Update Log */}
      <div className="mb-6">
        <label className="block font-medium mb-1">Barcode Update Log</label>
        <input
          type="date"
          name="barcodeUpdateLog"
          value={formData.barcodeUpdateLog}
          onChange={handleChange}
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
