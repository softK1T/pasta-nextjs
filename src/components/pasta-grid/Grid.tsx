"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pasta, pastaCard } from "@/components/pastaCard";
import { SortControls } from "./SortControls";
import { TagFilter } from "./TagFilter";
import { usePastas } from "@/app/hooks/usePastas";

type SortField = "reactions" | "views" | "forwards" | "date";
type SortDir = "asc" | "desc";

export default function Grid() {
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortField>("reactions");
  const [order, setOrder] = useState<SortDir>("desc");

  const query = new URLSearchParams({
    sort,
    order,
    ...(picked.size && { tags: Array.from(picked).join(",") }),
  }).toString();

  const { data: pastas = [], isLoading } = usePastas(query);

  const toggle = (t: string) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(t)) {
        next.delete(t);
      } else {
        next.add(t);
      }
      return next;
    });

  return (
    <>
      <header className="flex flex-wrap gap-4 justify-items-center self-center items-start mb-4 ">
        <SortControls
          sort={sort}
          order={order}
          setSort={setSort}
          setOrder={setOrder}
        />

        <TagFilter picked={picked} toggle={toggle} />

        {picked.size > 0 && (
          <Button variant="link" onClick={() => setPicked(new Set())}>
            clear
          </Button>
        )}
      </header>

      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-1fr">
        {isLoading && <Badge className="text-sm">Loading…</Badge>}

        {pastas.map((p: Pasta) => pastaCard(p))}
      </main>
    </>
  );
}
