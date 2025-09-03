"use client";

import { motion } from "framer-motion";

// Tu peux remplacer `logoExiste` par une vraie vérification si tu veux
const logoExiste = false; // true si le logo est disponible

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER / LOGO */}
      <motion.header
        className="bg-white shadow py-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {logoExiste ? (
          <img
            src="/logo-eglise.png" // Logo disponible
            alt="Logo de l'église"
            className="mx-auto h-32 w-auto mb-4"
          />
        ) : (
          <div className="mx-auto mb-4 flex items-center justify-center h-32 w-32 rounded-full bg-indigo-500 text-white text-5xl">
            ⛪
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-800"> Lorem ipsum dolor sit amet.</h1>
        <p className="text-gray-600 mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laboriosam.</p>
      </motion.header>

      {/* SECTION CONTACT */}
      <motion.section
        className="container mx-auto mt-16 px-4 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Contactez-nous</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-2">Téléphone</h3>
            <p className="text-gray-700">📞  Lorem ipsum dolor sit amet.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-700">✉️ contact@eglise.com</p>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION FAIRE UN DON */}
      <motion.section
        className="container mx-auto mt-16 px-4 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Voulez-vous faire un don ?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-green-100 p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-2">Banque</h3>
            <p className="text-gray-700">Numéro :  Lorem ipsum dolor sit amet.</p>
          </motion.div>
          <motion.div
            className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-2">NITA</h3>
            <p className="text-gray-700">Numéro :  Lorem ipsum dolor sit amet.</p>
          </motion.div>
          <motion.div
            className="bg-yellow-100 p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-2">Mobile Money</h3>
            <p className="text-gray-700">Numéro : Lorem ipsum dolor sit amet.</p>
          </motion.div>
          <motion.div
            className="bg-pink-100 p-6 rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-bold mb-2">AMANA</h3>
            <p className="text-gray-700">Numéro :  Lorem ipsum dolor sit amet.</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
