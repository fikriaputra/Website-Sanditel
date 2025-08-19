import MainLayout from "../layouts/MainLayout";
import FormPengajuanBarang from "../components/FormPengajuanBarang";

export default function AddPengajuanBarang() {
  const handleSubmit = (data) => {
    console.log("Pengajuan Barang:", data);
    alert("Pengajuan Barang berhasil disimpan!");
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-start p-6">
        <FormPengajuanBarang
          onSubmit={handleSubmit}
          onCancel={() => window.history.back()}
        />
      </div>
    </MainLayout>
  );
}
