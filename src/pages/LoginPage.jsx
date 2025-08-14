import Logo from "../components/Logo";
import RightPanel from "../components/RightPanel";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (data) => {
    if (data.error) {
      setError(data.error);
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Login data:", data);

      // ✅ Navigasi ke dashboard
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      <Logo />
      <div className="flex-1 flex items-center justify-center">
        <LoginForm
          onLogin={handleLogin}
          loading={loading}
          error={error}
          goRegister={() => navigate("/register")}
        />
      </div>
      <RightPanel />
    </div>
  );
};

export default LoginPage;
