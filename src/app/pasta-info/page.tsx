"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Eye,
  Share2,
  MessageSquare,
  Calendar,
  BarChart3,
} from "lucide-react";

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

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-8">
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <p className="text-destructive text-center">Error: {error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="container mx-auto px-6 py-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center">
              No statistics available.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Creepypastas",
      value: stats.totalPastas,
      icon: TrendingUp,
      description: "Total number of creepypastas in the database",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Total Messages",
      value: stats.totalMessages,
      icon: MessageSquare,
      description: "Total Telegram messages processed",
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Total Views",
      value: stats.totalViews,
      icon: Eye,
      description: "Combined view count across all pastas",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Total Forwards",
      value: stats.totalForwards,
      icon: Share2,
      description: "Combined forward count across all pastas",
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      title: "Average Views",
      value: Math.round(stats.avgViews),
      icon: BarChart3,
      description: "Average views per creepypasta",
      color: "text-indigo-600 dark:text-indigo-400",
    },
    {
      title: "Recent Pastas (7 days)",
      value: stats.recentPastas,
      icon: Calendar,
      description: "New creepypastas added in the last week",
      color: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Creepypasta Statistics
        </h1>
        <p className="text-muted-foreground">
          Comprehensive analytics and insights about the creepypasta collection
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat) => (
          <Card
            key={stat.title}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stat.value.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>About This Collection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This database contains a curated collection of creepypastas
              sourced from various Telegram channels and communities. Each entry
              includes detailed statistics about views, forwards, and reactions
              from the original Telegram messages.
            </p>
            <p className="text-muted-foreground">
              The statistics are updated regularly and provide insights into
              which stories resonate most with the community. Use the filters
              and sorting options on the main page to discover the most popular
              or recent creepypastas.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
