// src/components/TableRowLP.jsx
import { Eye } from "lucide-react";

export default function TableRowLP({ item, onView }) {
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
