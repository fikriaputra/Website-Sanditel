// src/components/TableRowLP.jsx
import { Eye } from "lucide-react";

export default function TableRowLP({ item, onView }) {
  // Badge warna status (hanya "Selesai" & "Tidak Dikerjakan")
  const getStatusBadge = (status) => {
    if (!status) {
      return (
        <span className="px-3 py-1 rounded-full bg-gray-400 text-white text-xs font-medium">
          -
        </span>
      );
    }

    switch (status.toLowerCase()) {
      case "selesai":
        return (
          <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
            Selesai
          </span>
        );
      case "tidak dikerjakan":
        return (
          <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium">
            Tidak Dikerjakan
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-full bg-gray-400 text-white text-xs font-medium">
            {status}
          </span>
        );
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      {/* Nomor / ID */}
      <td className="p-3 text-sm font-semibold text-gray-800">
        {item.number || item.No}
      </td>

      {/* Tanggal */}
      <td className="p-3 text-sm text-gray-600 font-medium">
        {item.date || item.HariTanggal}
      </td>

      {/* Jenis Pekerjaan */}
      {item.JenisPekerjaan && (
        <td className="p-3 text-sm text-gray-600 font-medium">
          {item.JenisPekerjaan}
        </td>
      )}

      {/* Bagian */}
      {item.Bagian && (
        <td className="p-3 text-sm text-gray-600 font-medium">
          {item.Bagian}
        </td>
      )}

      {/* Petugas */}
      {item.Petugas && (
        <td className="p-3 text-sm text-gray-600 font-medium">
          {item.Petugas}
        </td>
      )}

      {/* Status */}
      <td className="p-3 text-sm">
        {getStatusBadge(item.Status || item.status)}
      </td>

      {/* Action (hanya View) */}
      <td className="p-3 flex gap-2">
        {onView && (
          <button
            onClick={onView}
            className="p-1.5 rounded-full hover:bg-blue-100 text-blue-500 transition-colors"
            title="View"
          >
            <Eye size={16} />
          </button>
        )}
      </td>
    </tr>
  );
}
