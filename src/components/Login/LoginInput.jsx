const LoginInput = ({ label, type, value, onChange, placeholder, name, size = "normal" }) => {
  const paddingClass = size === "small" ? "px-3 py-2 text-sm" : "px-4 py-3";

  return (
    <div className="space-y-1 w-full">
      <label className="font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md bg-indigo-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${paddingClass} text-sm sm:text-base`}
      />
    </div>
  );
};

export default LoginInput;
