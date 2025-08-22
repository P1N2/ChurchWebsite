"use client";
import Footer from "./footer";
import { usePathname } from "next/navigation";

export default function FooterWrapper() {
  const pathname = usePathname();
if (pathname === "/") {
    return null;
}
  return <Footer />;
}