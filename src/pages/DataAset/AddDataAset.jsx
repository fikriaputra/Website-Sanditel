// src/pages/AddDataAset.jsx
import MainLayout from "../../layouts/MainLayout";
import FormDataAset from "../../components/DataAset/FormDataAset";

export default function AddDataAset() {
  const handleSubmit = (data) => {
    console.log("Data Aset:", data);
    alert("Data Aset berhasil disimpan!");
  };

  return (
    <MainLayout>
      {/* Scrollable container untuk mobile */}
      <div className="flex justify-center items-start p-4 sm:p-6 overflow-auto min-h-screen">
        <FormDataAset
          onSubmit={handleSubmit}
          onCancel={() => window.history.back()}
        />
      </div>
    </MainLayout>
  );
}
