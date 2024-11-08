"use client";
import type { Metadata } from "next";
import { getReport, uploadFile } from "@/services/apiService";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Dropzone from "@/components/dropzone";
import Boton from "@/components/boton";
import DashboardMedico from "@/components/dashboard";
import { base_path } from "../config/routers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  function convertirDecimalAPorcentaje(decimal:number, decimales = 0):number {
    const porcentaje = Number((decimal * 100).toFixed(decimales));
    return porcentaje;
  }
  const decimal = 0.567;
  const resultado = convertirDecimalAPorcentaje(decimal, 1);

  const handleDrop = (acceptedFiles: File[]) => {
    console.log('Files dropped:', acceptedFiles);

    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type.startsWith('image/')) {
        setFile(file);
        console.log('File set:', file);
      } else {
        console.error('El archivo no es una imagen.');
      }
    }
  };

  const handleAnalyzeClick = async () => {
    console.log('Analyze button clicked');

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        // Subir el archivo y obtener la URL
        const response = await uploadFile(formData);
        console.log('File uploaded:', response);
        setImageUrl(response.url);


        const model = await fetch(`${base_path}/upload/`, {
          method: 'POST',
          body: formData,
        });

        const modelResponse = await model.json()
        console.log(modelResponse)

        // Obtener el reporte usando la URL de la imagen
        const reportResponse = await getReport(response.url);
        console.log('Report received:', reportResponse);
        setReport(reportResponse.report);

        const predictionRate = convertirDecimalAPorcentaje(modelResponse.confidence,2) > 95 ? convertirDecimalAPorcentaje(modelResponse.confidence,2) - 5 : convertirDecimalAPorcentaje(modelResponse.confidence,2)
        setReport(reportResponse.report+`Se detecta que el paciente podria sufrir de ${modelResponse.label}
            \n \b\b\b   Confidencia de ${predictionRate}%
          `
        );
        // Mostrar el dashboard con la imagen y el reporte
        setShowDashboard(true);
      } catch (error) {
        console.error('Error uploading file or getting report:', error);
      }
    } else {
      console.error('No image selected. Please upload an image first.');
    }
  };

  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!showDashboard ? (
            <div style={{ textAlign: 'center' }}>
              <Dropzone onDrop={handleDrop} />
              <br />
              <Boton texto={"Analizar"} onClick={handleAnalyzeClick} />
            </div>
          ) : (
            <DashboardMedico imageUrl={imageUrl} report={report} />
          )}
        </div>
        <Footer />
      </body>
    </html>
  );
}
