'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useFadeInOnScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "translate-y-0");
          } else {
            el.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
    observer.observe(el);

    return () => observer.disconnect();
  }, [ref]);
}

interface Theme {
  theme: string;
  annee: number;
  verset: string;
}

export default function AboutPage() {
  const histoireRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);

  const [theme, setTheme] = useState<Theme | null>(null);

  useFadeInOnScroll(histoireRef);
  useFadeInOnScroll(missionRef);
  useFadeInOnScroll(visionRef);

  useEffect(() => {
    async function fetchTheme() {
      try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/themeyears/`);
        const data: Theme[] = await res.json();
    
    const currentYear = new Date().getFullYear();
        const currentTheme = data.find(t => t.annee === currentYear) || null;
        setTheme(currentTheme);
      } catch (error) {
        console.error("Erreur de récupération du thème :", error);
        setTheme(null);
      }
    }
    fetchTheme();
  }, []);
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white px-4">
        <Image
          src="/images/church-bg.jpg"
          alt="Église"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Titre principal */}
          <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold drop-shadow-lg text-yellow-300">
            À Propos de Notre Église
          </h1>

          {/* Thème de l'année */}
          <p className="text-3xl md:text-3xl lg:text-3xl font-semibold drop-shadow-lg text-white text-center">
            THÈME DE L&#39;ANNÉE {new Date().getFullYear()} : {theme ? theme.theme : "Aucun thème disponible"}
          </p>

          {/* Verset */}
          {theme?.verset && (
            <p className="text-lg md:text-xl italic text-yellow-100 text-center max-w-2xl">
              &quot;{theme.verset}&quot;
            </p>
          )}
        </div>
      </section>

      {/* Histoire */} 
      <section ref={histoireRef} className="max-w-5xl mx-auto py-16 px-6"> 
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">Notre Histoire</h2>
        <p className="text-lg leading-relaxed text-gray-700"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit neque omnis iure velit consequuntur cumque, animi sint, perspiciatis facere veritatis natus, eaque vero voluptates sed distinctio recusandae necessitatibus repellendus ducimus alias architecto quae quis excepturi modi. Dignissimos nam laborum fugit error, soluta libero repellendus inventore vel repellat assumenda, tenetur, magni quisquam omnis dicta. Dicta maxime ut, sunt adipisci voluptatibus ad maiores doloribus ipsa fugit? Tempora pariatur quo fugiat officia id aspernatur rem rerum cupiditate, est, non repellat? Voluptatum voluptate earum impedit distinctio fugiat, ut quam repudiandae facilis commodi, iste cupiditate incidunt fugit pariatur eaque omnis repellat nobis molestias dolorem! 
        </p>
      </section> 

      {/* Mission & Vision */} 
      <section className="bg-yellow-50 py-16 px-6"> 
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"> 
          <div ref={missionRef}>
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Mission</h2> 
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quos, odit distinctio id reprehenderit similique esse beatae sequi? Laboriosam eum iste qui? Necessitatibus voluptatibus laudantium voluptas, doloremque expedita numquam. Illum dolor fugit quo incidunt. Aliquam sunt nesciunt sed voluptatem in quia velit alias ab ipsam quas laborum officiis, nam rerum, facilis perspiciatis impedit distinctio beatae maiores, sapiente esse. Adipisci, tenetur, expedita praesentium atque architecto accusamus est delectus non et sed reprehenderit! Et, aliquid? Minima debitis, officia blanditiis nulla fugiat tenetur! 
            </p> 
          </div> 
          <div ref={visionRef}>
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Vision</h2> 
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti odit suscipit et iusto, exercitationem voluptatibus vitae odio perspiciatis voluptates ad, magnam, accusamus quis sequi quam minus doloribus! Provident nam magnam ratione. Culpa, cumque, cupiditate aliquid fugit totam blanditiis beatae nemo, vero molestiae voluptates aspernatur. Dicta, possimus? Dolorum corporis qui deserunt possimus distinctio consequuntur laborum. Quam praesentium voluptatem, reprehenderit esse officiis numquam labore accusantium culpa est aliquid nam ullam saepe inventore repellendus eum repellat autem, amet non. Modi vero nisi eaque! 
            </p> 
          </div> 
        </div> 
      </section> 

      {/* Autres infos */} 
      <section className="max-w-5xl mx-auto py-16 px-6"> 
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">Compléments d’Informations</h2>
        <ul className="space-y-4 text-lg text-gray-700"> 
          <li>Localisation : Lorem ipsum dolor sit amet.</li> 
          <li>Activités principales : Lorem ipsum dolor sit amet.</li> 
        </ul> 
      </section>
    </main>
  );
}
