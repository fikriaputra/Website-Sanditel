// src/pages/EditDataBarang.jsx
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import FormDataBarang from "../components/FormDataBarang";

export default function FormEditDataBarang() {
  const { id } = useParams(); // ambil parameter id dari url
  const navigate = useNavigate();

  // sementara: data dummy, nanti bisa diganti fetch dari API atau context
  const dummyData = [
    { idBarang: "B000001", namaBarang: "Laptop", jenisBarang: "Elektronik", satuanBarang: "Unit", stok: 98 },
    { idBarang: "B000002", namaBarang: "Projector", jenisBarang: "Elektronik", satuanBarang: "Unit", stok: 12 },
    { idBarang: "B000003", namaBarang: "Office Chair", jenisBarang: "Furniture", satuanBarang: "Pcs", stok: 21 },
  ];

  const selectedBarang = dummyData.find((item) => item.idBarang === id);

  const handleSubmit = (updatedData) => {
    console.log("Update Data:", updatedData);
    // TODO: simpan ke backend / state global
    navigate("/data-barang"); // kembali ke daftar setelah update
  };

  const handleCancel = () => {
    navigate(-1); // kembali ke halaman sebelumnya
  };

  // 🔹 Tambahkan handleReset supaya tombol reset di form bisa dipakai juga
  const handleReset = () => {
    if (selectedBarang) {
      return selectedBarang; // reset ke data awal edit
    }
    return {
      idBarang: "B000000",
      namaBarang: "",
      jenisBarang: "",
      satuanBarang: "",
      stok: "",
    };
  };

  return (
    <MainLayout>
      <div className="flex justify-center mt-6 px-4 w-full">
        {selectedBarang ? (
          <FormDataBarang
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            initialData={selectedBarang}   // data default
            onReset={handleReset}          // 🔹 kirim fungsi reset
          />
        ) : (
          <div className="bg-white p-6 rounded-lg shadow text-center w-full max-w-md sm:max-w-lg">
            <p className="text-red-500 font-medium mb-4">
              Data barang dengan ID {id} tidak ditemukan
            </p>
            <button
              onClick={handleCancel}
              className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Kembali
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
