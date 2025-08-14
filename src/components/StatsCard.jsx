// src/components/StatsCard.jsx
import React from "react";

export default function StatsCard({ title, value, bgColor, icon: Icon }) {
  return (
    <div
      className="flex items-center p-5 rounded-2xl shadow-md cursor-pointer 
                 transition-all duration-300 ease-in-out 
                 hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: bgColor || "linear-gradient(135deg, #FFD700, #FFB400)",
        minWidth: "230px",
      }}
    >
      {/* Icon dalam lingkaran transparan */}
      <div className="flex-shrink-0 p-3 rounded-full bg-white/30 backdrop-blur-sm shadow-sm">
        {Icon && <Icon size={36} className="text-black" />}
      </div>

      {/* Teks di kanan */}
      <div className="ml-4">
        <p className="text-black text-3xl font-bold leading-tight">{value}</p>
        <p className="text-black/90 text-sm">{title}</p>
      </div>
    </div>
  );
}
