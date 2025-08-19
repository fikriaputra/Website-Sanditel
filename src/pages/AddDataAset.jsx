import MainLayout from "../layouts/MainLayout";
import FormDataAset from "../components/FormDataAset";

export default function AddDataAset() {
  const handleSubmit = (data) => {
    console.log("Data Aset:", data);
    alert("Data Aset berhasil disimpan!");
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-start p-6">
        <FormDataAset
          onSubmit={handleSubmit}
          onCancel={() => window.history.back()}
        />
      </div>
    </MainLayout>
  );
}
