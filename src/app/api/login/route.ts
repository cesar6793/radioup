// src/app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";

const mockUser = {
  username: "admin",
  password: "password123", // Debe reemplazarse por un almacenamiento seguro en producción
};

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === mockUser.username && password === mockUser.password) {
    const response = NextResponse.json({ message: "Login successful" });
    
    response.cookies.set("session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hora
      path: "/",
    });

    return response;
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
}
