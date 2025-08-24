import React from "react";

import Logo from "../../components/Login/Logo";
import RightPanel from "../../components/Login/RightPanel";
import ForgotPassword from "../../components/Login/ForgotPassword";

export default function ForgotPasswordPage() {
  const handleReset = (email) => {
    console.log("Reset password for:", email);
    // TODO: Integrasi API reset password
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 animate-fade-in">
      <Logo />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <ForgotPassword onSubmit={handleReset} />
      </div>

      <RightPanel />
    </div>
  );
}
