import Image from "next/image";

// Remplace cette URL par celle de ton backend si besoin
const API_URL = "http://localhost:8000/api/ministries/";


interface Ministry {
  id: number;
  name: string;
  description?: string;
  image?: string;
}


async function getMinistries(): Promise<Ministry[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Erreur lors du chargement des ministères");
  return res.json();
}

export default async function MinisteresPage() {
  const ministries = await getMinistries();

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white pt-28 pb-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-yellow-800 mb-12 drop-shadow-xl tracking-wide" style={{textShadow: '2px 2px 8px #fff8, 0 2px 0 #b8860b'}}>
        Nos Ministères
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ministries.length === 0 && (
          <p className="col-span-full text-center text-gray-500">Aucun ministère trouvé.</p>
        )}
        {ministries.map((ministry: Ministry) => (
          <div
            key={ministry.id}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center border border-yellow-100 min-h-[320px]"
          >
            {ministry.image ? (
              <div className="w-32 h-32 mb-6 relative rounded-full overflow-hidden border-4 border-yellow-200 shadow">
                <Image
                  src={ministry.image.startsWith("http") ? ministry.image : `http://localhost:8000${ministry.image}`}
                  alt={ministry.name || "Image du ministère"} 
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-32 h-32 mb-6 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-400 text-6xl">
                <span>🕊️</span>
              </div>
            )}
            <h2 className="text-2xl font-bold text-yellow-700 mb-2 text-center">
              {ministry.name}
            </h2>
            <p className="text-gray-600 text-center mb-4">
              {ministry.description || "Pas de description disponible."}
            </p>
            {/* Ajoute d'autres infos si besoin */}
          </div>
        ))}
      </div>
    </main>
  );
}
