import { useState } from "react";
import { motion } from "framer-motion";
import LoginInput from "./LoginInput";

const LoginForm = ({ onLogin, loading, error, goRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return onLogin({ error: "Email dan password wajib diisi !!" });
    onLogin({ email, password });
  };

  return (
    <motion.div
      className="w-full max-w-md space-y-5 px-4 sm:px-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Sign in
      </motion.div>

      {error && (
        <motion.div
          className="text-sm text-red-500 bg-red-100 rounded p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      <LoginInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email or user name"
      />
      <LoginInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <div className="text-sm text-right text-blue-500 hover:underline cursor-pointer">
        Forgot password?
      </div>

      <motion.button
        onClick={handleLogin}
        className="w-full py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 transition disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        ) : (
          "Login"
        )}
      </motion.button>

      <div className="text-sm text-center text-gray-500">
        Don’t have an account?{" "}
        <span
          onClick={goRegister}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </div>
    </motion.div>
  );
};

export default LoginForm;
