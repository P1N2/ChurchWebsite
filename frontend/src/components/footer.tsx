import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-yellow-100 via-white to-yellow-50 border-t border-yellow-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold text-yellow-700 mb-2">EEB RPCF</span>
          <p className="text-gray-600 text-sm mb-2">Église Évangélique Baptiste RPCF</p>
          <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
        </div>
        <div className="flex flex-col md:items-end items-center gap-2">
          <div className="flex gap-4 mb-2">
            <Link href="/" className="text-gray-500 hover:text-yellow-700 transition">Accueil</Link>
            <Link href="/ministries" className="text-gray-500 hover:text-yellow-700 transition">Ministères</Link>
            <Link href="/events" className="text-gray-500 hover:text-yellow-700 transition">Événements</Link>
            <Link href="/contact" className="text-gray-500 hover:text-yellow-700 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
