import React from "react";

export default function TableStok({ title, data }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow overflow-x-auto h-full flex flex-col">
      <h3 className="mb-4 font-bold">{title}</h3>
      <div className="flex-grow overflow-y-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Barang</th>
              <th className="p-3 text-left">Stok</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-3 border-t border-gray-200">{row.barang}</td>
                <td className="p-3 border-t border-gray-200">{row.stok}</td>
                <td className="p-3 border-t border-gray-200">
                  {row.stok > 0 ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                      Out of Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
