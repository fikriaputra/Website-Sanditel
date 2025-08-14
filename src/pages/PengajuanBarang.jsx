import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import TableRow from "../components/TableRowPB";

export default function PengajuanBarang() {
  const [data, setData] = useState([
    { date: "2024-07-26", number: "SUB-20240726-001", status: "Pending" },
    { date: "2024-07-25", number: "SUB-20240725-002", status: "Completed" },
    { date: "2024-07-24", number: "SUB-20240724-003", status: "Rejected" },
    { date: "2024-07-23", number: "SUB-20240723-004", status: "Completed" },
    { date: "2024-07-22", number: "SUB-20240722-005", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-006", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-007", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-008", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-009", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-010", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-011", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-012", status: "Pending" },
    { date: "2024-07-22", number: "SUB-20240722-013", status: "Pending" },
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
          onButtonClick={() => alert("Tambah Barang")}
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
