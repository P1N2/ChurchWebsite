import MembersList from "./MembersList";

type Member = {
  id: number;
  prenom: string;
  nom: string;
  role: string;
  bio: string;
  image: string;
};

async function getMembers(): Promise<Member[]> {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/members/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Impossible de récupérer les membres");
  }
  return res.json();
}

export default async function Page() {
  const members = await getMembers();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
          Nos Responsables
        </h1>
        <MembersList members={members} />
      </div>
    </main>
  );
}
