import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook untuk navigasi
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import TableRow from "../components/TableRowPB";

export default function PengajuanBarang() {
  const navigate = useNavigate(); // Hook untuk navigasi

  const [data, setData] = useState([
  { date: "2025-08-10", number: "SUB-20250810-001", status: "Pending" },
  { date: "2025-08-09", number: "SUB-20250809-002", status: "Completed" },
  { date: "2025-08-08", number: "SUB-20250808-003", status: "Rejected" },
  { date: "2025-08-07", number: "SUB-20250807-004", status: "Pending" },
  { date: "2025-08-06", number: "SUB-20250806-005", status: "Completed" },
  { date: "2025-08-05", number: "SUB-20250805-006", status: "Pending" },
  { date: "2025-08-04", number: "SUB-20250804-007", status: "Rejected" },
  { date: "2025-08-03", number: "SUB-20250803-008", status: "Completed" },
  { date: "2025-08-02", number: "SUB-20250802-009", status: "Pending" },
  { date: "2025-08-01", number: "SUB-20250801-010", status: "Pending" },
]);


  const handleDelete = (index) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      setData((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow p-4 mt-0">
        <PageHeader
          title="Daftar Pengajuan Barang"
          buttonLabel="Tambah Pengajuan"
          onButtonClick={() =>  navigate("/add-pengajuan-barang")}
        />
          <Table
            headers={[
              "Submission Date",
              "Submission Number",
              "Submission Status",
              "Actions",
            ]}
          >
            {data.length > 0 ? (
              data.map((item, idx) => (
                <TableRow
                  key={item.number}
                  item={item}
                  onView={() => alert(`Lihat detail ${item.number}`)}
                  onDelete={() => handleDelete(idx)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  Tidak ada data
                </td>
              </tr>
            )}
          </Table>
        </div>
    </MainLayout>
  );
}
