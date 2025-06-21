"use client";

import React, { useEffect, useState } from "react";

/* ---- matches /api/pasta-stats response ---- */
type PastaStats = {
  totalPastas: number;
  totalMessages: number;
  totalViews: number;
  totalForwards: number;
  avgViews: number;
  avgForwards: number;
  recentPastas: number;
};

export default function PastaStatistics() {
  const [stats, setStats] = useState<PastaStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/pasta-stats");
        if (!res.ok) throw new Error("Failed to fetch pasta statistics");
        setStats(await res.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <p className="p-4">Loading pasta statistics…</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!stats) return <p className="p-4">No statistics available.</p>;

  return (
    <div className="grid gap-6 grid-cols-6 m-10">
      {/* card helper */}
      {(
        [
          { label: "Total Pastas", value: stats.totalPastas },
          { label: "Total Messages", value: stats.totalMessages },
          { label: "Total Views", value: stats.totalViews },
          { label: "Total Forwards", value: stats.totalForwards },
          { label: "Average Views", value: stats.avgViews },
          { label: "Average Forwards", value: stats.avgForwards },
          { label: "Pastas (7 days)", value: stats.recentPastas },
        ] as const
      ).map((c) => (
        <div
          key={c.label}
          className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col justify-between"
        >
          <h2 className="text-sm font-medium text-gray-500 mb-2">{c.label}</h2>
          <p className="text-3xl font-bold">{c.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
