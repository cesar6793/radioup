// src/components/LoginForm.tsx
"use client";
import { login } from "@/src/services/apiService";
import { useState } from "react";

interface LoginFormProps {
  onSuccess: () => void;
  setError: (error: string) => void;
}

export default function LoginForm({ onSuccess, setError }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    login(username,password).then(onSuccess).catch(e=>{
      setError("Credenciales incorrectas");
    })
   
    // if (username === "admin" && password === "password123") {
    //   onSuccess();
    // } else {
    //   setError("Credenciales incorrectas");
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
