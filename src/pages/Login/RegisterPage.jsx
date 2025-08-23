import Logo from "../../components/Login/Logo";
import RightPanel from "../../components/Login/RightPanel";
import RegisterForm from "../../components/Login/RegisterForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // <-- state untuk pesan sukses
  const navigate = useNavigate();

  const handleRegister = (data) => {
    // Reset pesan sukses
    setMessage("");

    if (data.error) {
      setError(data.error);
      return;
    }

    setError("");
    setLoading(true);

    // Simulasikan proses register
    setTimeout(() => {
      setLoading(false);
      console.log("Registered data:", data);

      // Pesan sukses muncul setelah loading selesai
      setMessage("Akun sudah terdaftar!");
      // Jangan navigasi otomatis, biarkan user klik Sign In sendiri
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Logo />
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <RegisterForm
          onRegister={handleRegister}
          loading={loading}
          error={error}
          message={message} // <-- kirim pesan ke RegisterForm
          goLogin={() => navigate("/")} // klik Sign In baru pindah
        />
      </div>
      <RightPanel />
    </div>
  );
};

export default RegisterPage;
