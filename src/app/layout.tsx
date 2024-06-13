import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Dropzone from "@/components/dropzone";
import Boton from "@/components/boton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "radioup",
  description: "radiografias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Dropzone onDrop={undefined} />
        <Boton texto={"Analizar"} onClick={undefined} />
        {children}
        <Footer />
      </body>

    </html>
  );
}
