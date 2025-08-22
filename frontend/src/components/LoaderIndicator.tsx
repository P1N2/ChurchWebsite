"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingIndicator() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProgress(30); // démarre la barre à 30%

    // Simulation de progression fluide
    const interval = setInterval(() => {
      setProgress((old) => (old < 90 ? old + 10 : old));
    }, 200);

    // Quand la page est prête → remplir et cacher
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300); // petite pause pour la fluidité
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-1 bg-yellow-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
