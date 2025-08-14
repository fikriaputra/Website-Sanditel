import { Plus } from "lucide-react";

export default function PageHeader({ title, buttonLabel, onButtonClick }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
      <h2 className="font-bold text-lg">{title}</h2>
      <button
        onClick={onButtonClick}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition-transform hover:scale-105"
      >
        <Plus size={18} />
        {buttonLabel}
      </button>
    </div>
  );
}
