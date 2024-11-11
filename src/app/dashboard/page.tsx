"use client";
import { useState } from "react";
import '../globals.css';
import { uploadFile, getReport } from "@/services/apiService";  
import Header from "@/components/header";
import Footer from "@/components/footer";
import Dropzone from "@/components/dropzone";
import Boton from "@/components/boton";
import DashboardMedico from "@/src/components/analyze";  
import { base_path } from "@/src/config/routers";
import { TableRadiographies } from "@/src/components/table";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* <Header /> */}
      <button style={{
        marginTop:"50px"
      }}
      onClick={()=>router.push('/analyze')}
      >Analyze</button>

      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
       <TableRadiographies/>
      </main>
      <Footer />
    </div>
  );
}
