const Logo = () => {
  return (
    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center space-x-2 z-10">
      <img
        src="/Biro Umum Setda Jabar.png" 
        alt="Logo"
        className="h-7 w-7 sm:h-10 sm:w-10 object-contain"
      />
      <span className="text-xs sm:text-sm md:text-base font-bold text-gray-700">
        SANDITEL
      </span>
    </div>
  );
};

export default Logo;
