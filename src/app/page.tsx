import { Pasta, pastaCard } from "@/components/pastaCard";

async function fetchPastas() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pasta`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch pastas");
  }
  return response.json();
}

export default async function Home() {
  const pastas = await fetchPastas();

  console.log("Fetched pastas:", pastas[0].TelegramMessage[0]);
  return (
    <div className="justify-items-center min-h-screen p-8 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-1fr">
        {pastas.map((pasta: Pasta) => pastaCard(pasta))}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
