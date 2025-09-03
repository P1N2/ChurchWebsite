"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface VersePray {
  verse?: string;
  pray?: string;
  date: string;
}
export default function Home() {
  const [verseDuJour, setVerseDuJour] = useState<VersePray | null>(null);

  useEffect(() => {
    async function fetchVerse() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/verseprays/");
        const data: VersePray[] = await res.json();

        if (!data || data.length === 0) return;

        // Tri par date décroissante
        const sorted = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        const today = new Date().toISOString().split("T")[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

        // Cherche le verset d'aujourd'hui, sinon hier
        const verseToday =
          sorted.find((v) => v.date.startsWith(today)) ||
          sorted.find((v) => v.date.startsWith(yesterday)) ||
          null;

        setVerseDuJour(verseToday);
      } catch (error) {
        console.error("Erreur de récupération :", error);
      }
    }

    fetchVerse();
  }, []);
  return (
    <main className="relative w-full h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/church-bg3.jpg"
          alt="Église"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      <section className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aliquam. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum.
        </h2>
         {verseDuJour ? (
          <div className="bg-black/50 p-6 rounded-lg shadow-lg animate-fadeIn">
            <p className="text-xl md:text-2xl mb-4 font-semibold">
              Verset du jour :
            </p>
            <p className="text-lg md:text-xl mb-6">{verseDuJour.verse}</p>
            <p className="text-xl md:text-2xl mb-4 font-semibold">Prière :</p>
            <p className="text-lg md:text-xl">{verseDuJour.pray}</p>
          </div>
        ) : (
          <p className="text-lg md:text-xl bg-black/50 p-4 rounded-lg">
            Aucun verset disponible
          </p>
        )}
        <Link
          href="/about"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition"
        >
          Voir plus
        </Link>
      </section>
    </main>
  );
}
