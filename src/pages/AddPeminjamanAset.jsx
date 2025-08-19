import MainLayout from "../layouts/MainLayout";
import FormPeminjamanAset from "../components/FormPeminjamanAset";

export default function AddPeminjamanAset() {
  const handleSubmit = (data) => {
    console.log("Peminjaman Aset:", data);
    alert("Data peminjaman aset berhasil disimpan!");
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-start p-6">
        <FormPeminjamanAset
          onSubmit={handleSubmit}
          onCancel={() => window.history.back()}
        />
      </div>
    </MainLayout>
  );
}
