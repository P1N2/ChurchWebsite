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
  const res = await fetch("http://localhost:8000/api/members/", {
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
    <main className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
          Nos Responsables
        </h1>
        <MembersList members={members} />
      </div>
    </main>
  );
}
