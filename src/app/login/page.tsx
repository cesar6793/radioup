// src/app/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleLoginSuccess = () => {
    document.cookie = "session=authenticated; path=/";  // Configura la cookie de sesión
    router.push("/dashboard");  // Redirige al dashboard
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <LoginForm onSuccess={handleLoginSuccess} setError={setError} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
