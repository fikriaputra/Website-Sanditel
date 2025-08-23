// src/pages/EditDataBarang.jsx
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import FormDataBarang from "../../components/DataBarang/FormDataBarang";

export default function EditDataBarang() {
  const { id } = useParams(); // ambil parameter id dari url
  const navigate = useNavigate();

  // sementara: data dummy, nanti bisa diganti fetch dari API atau context
  const dummyData = [
    { idBarang: "B000001", namaBarang: "Laptop", jenisBarang: "Elektronik", satuanBarang: "Unit", stok: 98 },
    { idBarang: "B000002", namaBarang: "Projector", jenisBarang: "Elektronik", satuanBarang: "Unit", stok: 12 },
    { idBarang: "B000003", namaBarang: "Office Chair", jenisBarang: "Furniture", satuanBarang: "Pcs", stok: 21 },
  ];

  // langsung cari datanya berdasarkan id
  const selectedBarang = dummyData.find((item) => item.idBarang === id) || {
    idBarang: id, // kalau ga ketemu tetap pake id dari url
    namaBarang: "",
    jenisBarang: "",
    satuanBarang: "",
    stok: "",
  };

  const handleSubmit = (updatedData) => {
    console.log("Update Data:", updatedData);
    alert("Data Barang berhasil diperbarui!");
    // TODO: simpan ke backend / state global
    navigate("/data-barang"); // kembali ke daftar setelah update
  };

  const handleCancel = () => {
    navigate(-1); // kembali ke halaman sebelumnya
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-start p-6">
        <FormDataBarang
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          initialData={selectedBarang} // form langsung muncul
        />
      </div>
    </MainLayout>
  );
}
