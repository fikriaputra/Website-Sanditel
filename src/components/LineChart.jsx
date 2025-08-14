import { useState } from "react";
import {
  LineChart as LC,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const lineData = {
  2024: [
    { name: "Jan", masuk: 50, keluar: 15 },
    { name: "Feb", masuk: 30, keluar: 25 },
    { name: "Mar", masuk: 65, keluar: 30 },
    { name: "Apr", masuk: 80, keluar: 40 },
    { name: "Mei", masuk: 100, keluar: 50 },
  ],
  2025: [
    { name: "Jan", masuk: 10, keluar: 50 },
    { name: "Feb", masuk: 35, keluar: 18 },
    { name: "Mar", masuk: 40, keluar: 20 },
    { name: "Apr", masuk: 55, keluar: 30 },
    { name: "Mei", masuk: 65, keluar: 35 },
  ],
};

export default function LineChartComponent() {
  const years = Object.keys(lineData);
  const [year, setYear] = useState("2025");
  const data = lineData[year];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Total Transaksi ({year})</h3>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LC data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="masuk"
            stroke="#3b82f6"
            strokeWidth={2}
            name="Barang Masuk"
          />
          <Line
            type="monotone"
            dataKey="keluar"
            stroke="#ef4444"
            strokeWidth={2}
            name="Barang Keluar"
          />
        </LC>
      </ResponsiveContainer>
    </div>
  );
}
