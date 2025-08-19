// src/pages/StokOpname.jsx
import MainLayout from "../layouts/MainLayout";

export default function StokOpname() {
  return (
    <MainLayout>
      <div className="bg-white rounded-2xl shadow p-6 w-full max-w-5xl mx-auto">
        {/* Header tanpa tombol print */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-center">
            Stok Opname
          </h1>
        </div>

        {/* Input Barcode + Tombol Aksi */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Ketik nomor barcode di sini..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
              Scan Barcode
            </button>
            <button className="flex-1 md:flex-none bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg shadow">
              Unggah QR Code
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
