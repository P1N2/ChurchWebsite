"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Sermon {
  id: number;
  titre: string;
  predicateur: string;
  date: string;
  description: string;
  video_url?: string;
  audio_url?: string;
  notes_pdf?: string;
}

export default function SermonDetailPage() {
  const { id } = useParams();
  const [sermon, setSermon] = useState<Sermon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSermon() {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/sermons/${id}/`);
        if (!res.ok) throw new Error("Erreur lors du chargement");
        const data = await res.json();
        setSermon(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchSermon();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-yellow-600 animate-pulse">
          Chargement du sermon...
        </p>
      </div>
    );

  if (!sermon)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">Sermon introuvable</p>
      </div>
    );

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-2xl shadow-lg p-8 mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {sermon.titre}
        </h1>
        <p className="text-lg opacity-90">
          {new Date(sermon.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          — <span className="font-semibold">{sermon.predicateur}</span>
        </p>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{sermon.description}</p>
      </div>

      {/* Vidéo */}
      {sermon.video_url && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Vidéo</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-3">
            <iframe
              src={sermon.video_url.replace("watch?v=", "embed/")}
              title="Vidéo du sermon"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <a
            href={sermon.video_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Regarder sur YouTube
          </a>
        </div>
      )}

      {/* Audio */}
      {sermon.audio_url && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Audio</h2>
          <a
            href={sermon.audio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            🎧 Écouter / Télécharger l’audio
          </a>
        </div>
      )}

      {/* Notes PDF */}
      {sermon.notes_pdf && (
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Notes PDF</h2>
          <a
            href={sermon.notes_pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
          >
            📄 Télécharger les notes
          </a>
        </div>
      )}
    </main>
  );
}
