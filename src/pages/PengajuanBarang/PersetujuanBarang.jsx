import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import FormPersetujuanBarang from "../../components/PengajuanBarang/FormPersetujuanBarang";

export default function PersetujuanBarang() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const pengajuan = state?.data;

  const handleSubmit = (formData) => {
    console.log("Data persetujuan:", formData);
    // TODO: kirim ke API
    navigate("/pengajuan-barang");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (!pengajuan) {
    return (
      <MainLayout>
        <div className="p-6 text-center text-gray-500">
          Data pengajuan tidak ditemukan.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <FormPersetujuanBarang
          initialData={pengajuan}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </MainLayout>
  );
}
