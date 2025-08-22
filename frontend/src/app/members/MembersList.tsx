'use client';
import Image from "next/image";
import { useState } from "react";

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
            className="text-blue-600 hover:underline ml-1"
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
    <div className="space-y-8">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div className="relative w-full md:w-1/3 h-64 md:h-auto">
            <Image
              src={member.image || "/images/default-avatar.jpg"}
              alt={`${member.prenom} ${member.nom}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800">
              {member.prenom} {member.nom}
            </h2>
            <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
            <Bio bio={member.bio} />
          </div>
        </div>
      ))}
    </div>
  );
}
