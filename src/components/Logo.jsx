const Logo = () => {
  return (
    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center space-x-2">
     <img
  src="/ChatGPT_Image.png"
  alt="Logo"
  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
/>
      <span className="text-xs sm:text-sm font-bold text-gray-700">SANDITEL</span>
    </div>
  );
};

export default Logo;
