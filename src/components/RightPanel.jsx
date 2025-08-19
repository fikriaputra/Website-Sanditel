const RightPanel = () => {
  return (
    <div className="hidden md:flex w-1/2 bg-indigo-600 text-white items-center justify-center p-8 lg:p-10 relative rounded-l-[2rem] transition-all">
      <div className="absolute top-4 right-4 text-xs lg:text-sm text-white">
        📞 +94 0116 789 754
      </div>

      <div className="text-center">
     <img
  src="public\Key_Advantages_Of_Inventory_Management_Systems_in_Ecommerce_Management-removebg-preview.png"
  alt="Illustration"
  className="mx-auto w-full max-w-[250px] lg:max-w-sm mb-4"
/>

        <h1 className="text-xl lg:text-2xl font-bold">Manajemen Inventory Barang</h1>
        <p className="mt-3 text-xs lg:text-sm text-gray-300">
          Kelola, pantau, dan kontrol inventory barang <br className="hidden lg:block" />
          Anda secara real-time di satu tempat.
        </p>
      </div>
    </div>
  );
};

export default RightPanel;
