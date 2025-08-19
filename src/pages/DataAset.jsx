import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook untuk navigasi
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import TableRow from "../components/TableRowDA";
import { Filter, Barcode, Plus } from "lucide-react";

export default function DataAset() {
  const navigate = useNavigate(); // Hook untuk navigasi

  const [assets, setAssets] = useState([
  { number: 1, name: "Laptop Dell", brandCode: "Dell-LT-001", category: "Electronics", status: "Active", barcodeLog: "2025-08-01" },
  { number: 2, name: "Projector Epson", brandCode: "Epson-PR-002", category: "Electronics", status: "Inactive", barcodeLog: "2025-07-25" },
  { number: 3, name: "Office Chair Ergo", brandCode: "Ergo-CH-003", category: "Furniture", status: "Active", barcodeLog: "2025-07-20" },
  { number: 4, name: "Meeting Desk", brandCode: "IKEA-DS-004", category: "Furniture", status: "Active", barcodeLog: "2025-08-02" },
  { number: 5, name: "Printer HP", brandCode: "HP-PR-005", category: "Electronics", status: "Active", barcodeLog: "2025-07-15" },
  { number: 6, name: "Scanner Canon", brandCode: "Canon-SC-006", category: "Electronics", status: "Inactive", barcodeLog: "2025-07-10" },
  { number: 7, name: "Conference Table", brandCode: "IKEA-TB-007", category: "Furniture", status: "Active", barcodeLog: "2025-08-05" },
  { number: 8, name: "Whiteboard", brandCode: "WB-008", category: "Furniture", status: "Active", barcodeLog: "2025-08-03" },
  { number: 9, name: "Air Conditioner", brandCode: "LG-AC-009", category: "Electronics", status: "Inactive", barcodeLog: "2025-07-30" },
  { number: 10, name: "CCTV Camera", brandCode: "Hikvision-CC-010", category: "Electronics", status: "Active", barcodeLog: "2025-08-04" },
]);


  const [searchTerm, setSearchTerm] = useState("");
  const [sortCategory, setSortCategory] = useState(null);

  const getStatusBadge = (status) => {
    return status === "Active"
      ? "bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
      : "bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold";
  };

  let filteredAssets = assets.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brandCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortCategory) {
    filteredAssets = filteredAssets.filter(
      (item) => item.category === sortCategory
    );
  }

  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow p-4">
        {/* Header dengan tombol berderet */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
          <h2 className="font-bold text-lg">Daftar Data Aset</h2>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/add-data-aset")}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              <Plus size={18} /> Add Asset
            </button>
            <button
              onClick={() => setSortCategory(sortCategory ? null : "Electronics")}
              className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              <Filter size={18} /> Sort by Category
            </button>
            <button
              onClick={() => alert("Scan Barcode")}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              <Barcode size={18} /> Scan Barcode
            </button>
          </div>
        </div>

        <Table
          headers={[
            "Number",
            "Asset Name",
            "Brand/Code",
            "Category",
            "Status",
            "Barcode Update Log",
            "Actions",
          ]}
        >
          {filteredAssets.length > 0 ? (
            filteredAssets.map((item) => (
              <TableRow
                key={item.number}
                item={{
                  ...item,
                  status: (
                    <span className={getStatusBadge(item.status)}>
                      {item.status}
                    </span>
                  ),
                }}
                onView={() => alert(`Lihat detail aset ${item.name}`)}
                onDelete={() => alert(`Hapus aset ${item.name}`)}
              />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4 text-gray-500">
                Tidak ada data
              </td>
            </tr>
          )}
        </Table>
      </div>
    </MainLayout>
  );
}
