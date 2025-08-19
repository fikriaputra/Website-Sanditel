export default function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex flex-wrap gap-2 justify-between items-center lg:ml-64 fixed top-0 left-0 right-0 z-50">
      <h1 className="text-lg md:text-xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-gray-600 text-sm md:text-base">Halo, Admin</span>
        <img
          src="public/ChatGPT_Image_8_Agu_2025__23.59.29-removebg-preview (1).png"
          alt="User"
          className="rounded-full w-8 h-8"
        />
      </div>
    </div>
  );
}
