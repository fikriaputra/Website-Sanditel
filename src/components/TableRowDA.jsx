import { Eye, Trash2 } from "lucide-react";

export default function TableRowDA({ item, onView, onDelete }) {
  // Badge warna status sama seperti TableRowPB
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
      case "completed":
        return "bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium";
      case "pending":
        return "bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium";
      case "inactive":
      case "rejected":
        return "bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium";
      default:
        return "bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-medium";
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      {Object.values(item).map((val, idx) => (
        <td
          key={idx}
          className={`p-3 text-sm ${
            idx === 0
              ? "font-semibold text-gray-800" // Kolom pertama tebal
              : "text-gray-600 font-medium"   // Kolom lainnya
          }`}
        >
          {String(val).toLowerCase() === "active" ||
          String(val).toLowerCase() === "pending" ||
          String(val).toLowerCase() === "inactive" ||
          String(val).toLowerCase() === "completed" ||
          String(val).toLowerCase() === "rejected" ? (
            <span className={getStatusBadge(val)}>{val}</span>
          ) : (
            val
          )}
        </td>
      ))}

      {(onView || onDelete) && (
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
          {onDelete && (
            <button
              onClick={onDelete}
              className="p-1.5 rounded-full hover:bg-red-100 text-red-500 transition-colors"
              title="Delete"
            >
              <Trash2 size={16} />
            </button>
          )}
        </td>
      )}
    </tr>
  );
}
