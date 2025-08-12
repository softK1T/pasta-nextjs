"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pasta, PastaCard } from "@/components/pastaCard";
import { SortControls } from "./SortControls";
import { TagFilter } from "./TagFilter";
import { usePastas } from "@/app/hooks/usePastas";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/components/translation-context";

type SortField = "reactions" | "views" | "forwards" | "date";
type SortDir = "asc" | "desc";

export default function Grid() {
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortField>("reactions");
  const [order, setOrder] = useState<SortDir>("desc");
  const { showTranslation } = useTranslation();

  const query = useMemo(
    () =>
      new URLSearchParams({
        sort,
        order,
        ...(picked.size && { tags: Array.from(picked).join(",") }),
      }).toString(),
    [sort, order, picked]
  );

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
      <header className="flex flex-wrap gap-4 justify-items-center self-center items-start mb-6">
        <SortControls
          sort={sort}
          order={order}
          setSort={setSort}
          setOrder={setOrder}
        />

        <TagFilter picked={picked} toggle={toggle} />

        {picked.size > 0 && (
          <Button
            variant="outline"
            onClick={() => setPicked(new Set())}
            className="border-border/50 bg-background/50 dark:bg-background/30 hover:bg-background/70 dark:hover:bg-background/50"
          >
            Clear filters
          </Button>
        )}
      </header>

      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-1fr">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 flex flex-col dark:bg-card/60"
              >
                <div className="space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex-1 space-y-2 mt-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                  <Skeleton className="h-4 w-3/6" />
                </div>
                <div className="mt-auto pt-4 space-y-2">
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-12 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-10 rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-6" />
                    <Skeleton className="h-4 w-10" />
                  </div>
                </div>
              </div>
            ))
          : pastas.map((p: Pasta) => (
              <PastaCard
                key={p.message_id}
                pasta={p}
                showTranslation={showTranslation}
              />
            ))}
      </main>
    </>
  );
}
