import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <p className="text-lg md:text-2xl mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quo.
        </p>
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
