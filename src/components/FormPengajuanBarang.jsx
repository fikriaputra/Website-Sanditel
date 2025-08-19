import { useState } from "react";

export default function FormPengajuanBarang({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    submissionDate: "",
    submissionNumber: "SUB-20250810-001", // bisa digenerate otomatis
    submissionStatus: "Pending", // default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      submissionDate: "",
      submissionNumber: "SUB-20250810-001",
      submissionStatus: "Pending",
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
      <h2 className="text-2xl font-bold mb-6">Form Pengajuan Barang</h2>

      {/* Submission Date */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Submission Date</label>
        <input
          type="date"
          name="submissionDate"
          value={formData.submissionDate}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Submission Number */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Submission Number</label>
        <input
          type="text"
          name="submissionNumber"
          value={formData.submissionNumber}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-500"
        />
      </div>

      {/* Submission Status */}
      <div className="mb-6">
        <label className="block font-medium mb-1">Submission Status</label>
        <select
          name="submissionStatus"
          value={formData.submissionStatus}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Rejected">Rejected</option>
        </select>
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
