import PastaCard from "@/components/pastaCard";

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
      <h1 className="mt-0 pt-0 align-top text-3xl">Pasta Reader</h1>
      <p>immersive pasta reader</p>
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        {pastas.map((pasta: any) => (
          <PastaCard
            key={pasta.TelegramMessage[0].message_id}
            title={pasta.title}
            text={pasta.description}
            url={pasta.url}
            views={pasta.TelegramMessage[0].views}
            forwards={pasta.TelegramMessage[0].forwards}
            hashtags={pasta.TelegramMessage[0].hashtags}
            date={pasta.date_published}
            reactions={pasta.TelegramMessage[0].reactions}
          />
        ))}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
