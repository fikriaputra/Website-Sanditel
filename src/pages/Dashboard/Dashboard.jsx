// src/pages/Dashboard.jsx
import { Boxes, PackageCheck, Warehouse, Users } from "lucide-react";
import StatsCard from "../../components/Dashboard/StatsCard";
import LineChart from "../../components/Dashboard/LineChart";
import PieChart from "../../components/Dashboard/PieChart";
import TableStok from "../../components/Dashboard/TableStok";
import TableTransaksi from "../../components/Dashboard/TableTransaksi";
import MainLayout from "../../layouts/MainLayout";

export default function Dashboard() {
  const stokMinimum = [
    { barang: "Barang A", stok: 0 },
    { barang: "Barang B", stok: 5 },
    { barang: "Barang B", stok: 0 },
    { barang: "Barang B", stok: 10 },
  ];

  const transaksiTerakhir = {
    masuk: [
      { barang: "Barang C", jumlah: 10, tanggal: "2025-08-01" },
      { barang: "Barang Z", jumlah: 15, tanggal: "2025-08-02" },
      { barang: "Barang A", jumlah: 0, tanggal: "2025-08-03" },
      { barang: "Barang K", jumlah: 5, tanggal: "2025-08-04" },
    ],
    keluar: [
      { barang: "Barang A", jumlah: 4, tanggal: "2025-08-02" },
      { barang: "Barang G", jumlah: 1, tanggal: "2025-08-10" },
      { barang: "Barang L", jumlah: 2, tanggal: "2025-08-11" },
      { barang: "Barang Y", jumlah: 7, tanggal: "2025-08-23" },
    ],
  };

  return (
    <MainLayout>
      <div className="p-2 space-y-4">
        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Data Barang"
            value="102"
            bgColor="linear-gradient(135deg, #94F9F0 0%, #66E4D7 100%)"
            icon={Boxes}
          />
          <StatsCard
            title="Total Data Aset"
            value="70"
            bgColor="linear-gradient(135deg, #C4D9F9 0%, #B3CBF8 100%)"
            icon={PackageCheck}
          />
          <StatsCard
            title="Total Stok Barang"
            value="100"
            bgColor="linear-gradient(135deg, #FAD0D9 0%, #F5B6C3 100%)"
            icon={Warehouse}
          />
          <StatsCard
            title="Total Pengguna"
            value="17"
            bgColor="linear-gradient(135deg, #CFC9F9 0%, #AFA8F9 100%)"
            icon={Users}
          />
        </div>

        {/* Chart grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <LineChart />
          <PieChart />
        </div>

        {/* Tables grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch w-full">
          <div className="overflow-x-auto">
            <TableTransaksi
              title="Transaksi Barang Terakhir"
              data={transaksiTerakhir}
            />
          </div>
          <div className="overflow-x-auto">
            <TableStok title="Stok Barang" data={stokMinimum} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
