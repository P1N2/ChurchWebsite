"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Member = {
  id: number;
  prenom: string;
  nom: string;
  role: string;
  bio: string;
  image: string;
};

function Bio({ bio }: { bio: string }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200;
  const isLong = bio.length > maxLength;

  return (
    <div className="text-gray-600 text-sm leading-relaxed">
      <p>
        {expanded || !isLong ? bio : bio.slice(0, maxLength) + "... "}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-yellow-600 hover:underline ml-1 font-medium"
          >
            {expanded ? "Voir moins" : "Voir plus"}
          </button>
        )}
      </p>
    </div>
  );
}

export default function MembersList({ members }: { members: Member[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
        >
          <div className="relative w-full h-64">
            <Image
              src={member.image || "/images/default-avatar.jpg"}
              alt={`${member.prenom} ${member.nom}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-xl font-bold text-gray-900">
              {member.prenom} {member.nom}
            </h2>
            <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
            <Bio bio={member.bio} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
