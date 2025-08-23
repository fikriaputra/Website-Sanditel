import MainLayout from "../../layouts/MainLayout";
import FormBarangKeluar from "../../components/BarangKeluar/FormBarangKeluar";

export default function AddBarangKeluar() {
  const handleSubmit = (data) => {
    console.log("Barang Keluar:", data);
    alert("Barang Keluar berhasil disimpan!");
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-start p-6">
        <FormBarangKeluar
          type="keluar"
          onSubmit={handleSubmit}
          onCancel={() => window.history.back()}
        />
      </div>
    </MainLayout>
  );
}
