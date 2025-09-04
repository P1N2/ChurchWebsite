'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Event = {
  id: number;
  titre: string;
  description: string;
  date_debut: string;
  date_fin: string;
  image: string | null;
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Hook pour apparition/disparition au scroll
function useFadeInOnScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-10");
          } else {
            el.classList.remove("opacity-100", "translate-y-0");
            el.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    // Initial state
    el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
    observer.observe(el);

    return () => observer.disconnect();
  }, [ref]);
}

// Composant pour une seule carte d'événement
function EventCard({ event }: { event: Event }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  useFadeInOnScroll(cardRef);

  return (
    <div
      ref={cardRef}
      className="flex flex-col w-full max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg
                 transform transition-transform duration-300 hover:scale-95 hover:shadow-xl"
    >
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {event.image ? (
          <Image
            src={event.image.startsWith("http") ? event.image : `http://localhost:8000${event.image}`}
            alt={event.titre}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-yellow-200 text-6xl">
            📸
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-3 rounded-xl">
          <p className="font-bold text-lg">{event.titre}</p>
          <p className="text-sm">{formatDate(event.date_debut)}</p>
        </div>
      </div>

      <div className="p-6 bg-gray-50">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-serif">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/`, { cache: "no-store" });
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des événements", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg animate-pulse">Chargement...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-4 md:px-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        Nos Événements
      </h1>

      <div className="flex flex-col gap-16">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
