import MainLayout from "../../layouts/MainLayout";
import FormBarangMasuk from "../../components/BarangMasuk/FormBarangMasuk";

export default function AddBarangMasuk() {
  const handleSubmit = (data) => {
    console.log("Barang Masuk:", data);
    alert("Barang Masuk berhasil disimpan!");
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-start p-6">
        <FormBarangMasuk
          type="masuk"
          onSubmit={handleSubmit}
          onCancel={() => window.history.back()}
        />
      </div>
    </MainLayout>
  );
}
