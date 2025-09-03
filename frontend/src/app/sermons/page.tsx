"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Couleurs aléatoires
const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
];

interface Sermon {
  id: number;
  titre: string;
  predicateur: string;
  date: string;
  description?: string;
  video_url?: string;
  audio_url?: string;
  notes_pdf?: string;
}

export default function SermonPage() {
  const [sermons, setSermons] = useState<Sermon[]>([]);

  useEffect(() => {
    async function fetchSermons() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sermons/`);
        const data = await res.json();

        // Tri par date décroissante
        const sorted = data.sort(
          (a: Sermon, b: Sermon) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setSermons(sorted);
      } catch (error) {
        console.error("Erreur de récupération :", error);
      }
    }
    fetchSermons();
  }, []);

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Sermons
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sermons.map((sermon) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Link key={sermon.id} href={`/sermons/${sermon.id}`}>
              <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition cursor-pointer">
                <div
                  className={`${randomColor} text-white p-6 flex items-center justify-center h-32`}
                >
                  <h2 className="text-xl font-semibold text-center">
                    {sermon.titre}
                  </h2>
                </div>
                <div className="p-4 bg-white text-gray-700 text-center text-sm font-medium">
                  {new Date(sermon.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
