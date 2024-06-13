"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Dropzone from "@/components/dropzone";
import Boton from "@/components/boton";
import DashboardMedico from "@/components/dashboard";

const inter = Inter({ subsets: ["latin"] });
/*
export const metadata: Metadata = {
  title: "radioup",
  description: "radiografias",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleDrop = (acceptedFiles: File[]) => {
    console.log('Files dropped:', acceptedFiles); // Debug statement

    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      if (file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setImageUrl(imageUrl);
        console.log('Image URL set:', imageUrl); // Debug statement

        // Don't set showDashboard to true here
      } else {
        console.error('El archivo no es una imagen.');
      }
    }
  };

  const handleAnalyzeClick = () => {
    console.log('Analyze button clicked'); // Debug statement

    if (imageUrl) {
      setShowDashboard(true);
    } else {
      console.error('No image URL set. Please upload an image first.');
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
            <DashboardMedico imageUrl={imageUrl} />
          )}
        </div>
        <Footer />
      </body>
    </html>
  );
}