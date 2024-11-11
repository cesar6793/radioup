"use client";
import { useState } from "react";
import '../globals.css';
import { uploadFile, getReport } from "@/services/apiService";  
import Header from "@/components/header";
import Footer from "@/components/footer";
import Dropzone from "@/components/dropzone";
import Boton from "@/components/boton";
import DashboardMedico from "@/components/dashboard";  
import { base_path } from "@/src/config/routers";

export default function DashboardPage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  function convertirDecimalAPorcentaje(decimal:number, decimales = 0):number {
    const porcentaje = Number((decimal * 100).toFixed(decimales));
    return porcentaje;
  }
  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type.startsWith("image/")) {
        setFile(file);
      } else {
        console.error("El archivo no es una imagen.");
      }
    }
  };

  const handleAnalyzeClick = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await uploadFile(formData);
        setImageUrl(`${base_path}/files/${response.filename}`);
        const reportResponse = await getReport(response.url);
        
        // setReport(reportResponse.report);

        const predictionRate = convertirDecimalAPorcentaje(response.confidence,2) > 95 ? convertirDecimalAPorcentaje(response.confidence,2) - 5 : convertirDecimalAPorcentaje(response.confidence,2)
        setReport(`${reportResponse.report} \n Se detecta que el paciente podria sufrir de ${response.label}
            \n \b\b\b   Confidencia de ${predictionRate}%
          `
            
          
        ); 

        setShowDashboard(true);
      } catch (error) {
        console.error("Error uploading file or getting report:", error);
      }
    } else {
      console.error("No image selected. Please upload an image first.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* <Header /> */}
      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        {!showDashboard ? (
          <div style={{ textAlign: "center" }}>
            <Dropzone onDrop={handleDrop} />
            <br />
            <Boton texto={"Analizar"} onClick={handleAnalyzeClick} />
          </div>
        ) : (
          <DashboardMedico imageUrl={imageUrl} report={report} />
        )}
      </main>
      <Footer />
    </div>
  );
}
