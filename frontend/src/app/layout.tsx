// src/app/layout.tsx (Server Component, pas de "use client")
import "./globals.css";
import Navbar from "../components/navbar";
import FooterWrapper from "@/components/footer-wrapper";
import LoadingIndicator from "@/components/LoaderIndicator";

export const metadata = {
  title: "EEB RPCF",
  description: "Site officiel de l'Église Évangélique Baptiste RPCF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100">
        <Navbar />
        <LoadingIndicator /> 
        <main>{children}</main>
        <FooterWrapper/>
      </body>
    </html>
  );
}
