import Logo from "../components/Logo";
import RightPanel from "../components/RightPanel";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // untuk navigasi

  const handleRegister = (data) => {
    if (data.error) {
      setError(data.error);
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Registered data:", data);
      navigate("/"); // setelah register langsung ke login
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      <Logo />
      <div className="flex-1 flex items-center justify-center">
        <RegisterForm
          onRegister={handleRegister}
          loading={loading}
          error={error}
          goLogin={() => navigate("/")} // klik "Sign In" langsung ke login
        />
      </div>
      <RightPanel />
    </div>
  );
};

export default RegisterPage;
