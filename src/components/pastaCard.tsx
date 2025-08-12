import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { openPastaTranslation } from "@/lib/translation";

type TelegramMessage = {
  message_id: number;
  views: number;
  forwards: number;
  reactions: Record<string, number>;
  hashtags: string[];
};

export type Pasta = {
  title?: string;
  description: string;
  url: string;
  TelegramMessage: TelegramMessage[];
  message_id: number;
  total_views: number;
  total_forwards: number;
  reactions_json?: Record<string, number>;
  hashtags?: string[];
  total_reactions?: number;
};

export function PastaCard({
  pasta,
  showTranslation = false,
}: {
  pasta: Pasta;
  showTranslation?: boolean;
}) {
  return (
    <Card className="group flex h-full grid-rows-[auto_1fr_auto] flex-col bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-card/90 hover:border-border/80 dark:shadow-lg dark:hover:shadow-2xl">
      <CardHeader className="flex-none">
        <CardTitle className="line-clamp-2 min-h-[3.25rem] font-semibold text-card-foreground">
          {pasta.title || "Untitled Pasta"}
        </CardTitle>

        <CardDescription className="text-sm flex gap-4 text-muted-foreground">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted/60 dark:bg-muted/40 text-muted-foreground">
            views: {pasta.total_views.toLocaleString()}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted/60 dark:bg-muted/40 text-muted-foreground">
            forwards: {pasta.total_forwards.toLocaleString()}
          </span>
        </CardDescription>
        <CardAction className="shrink-0 flex gap-2">
          {showTranslation && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => openPastaTranslation(pasta.url, "uk")}
              className="h-6 px-2 text-xs border-border/50 hover:bg-accent/50"
              title="Translate to Ukrainian"
            >
              <Globe className="h-3 w-3" />
            </Button>
          )}
          <a
            href={pasta.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2 py-1 text-s font-medium bg-blue-50/80 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-100/80 dark:hover:bg-blue-950/70 transition-colors border border-blue-200/40 dark:border-blue-800/40"
          >
            Telegraph
          </a>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1 p-4 pt-0 row-[2] overflow-hidden pb-0 mb-0">
        <p className="line-clamp-6 whitespace-pre-wrap leading-relaxed text-card-foreground">
          {pasta.description}
        </p>
      </CardContent>

      <CardFooter className="mt-auto min-h-[3rem] border-t border-border pt-2 flex flex-col gap-1">
        {renderReactions(pasta.reactions_json)}
        {renderHashtags(pasta.hashtags)}
      </CardFooter>
    </Card>
  );
}

export function renderHashtags(tags?: string[], max = 6) {
  if (!tags?.length) return null;

  const shown = tags.slice(0, max);
  const hidden = tags.length - shown.length;

  return (
    <div className="line-clamp-2 overflow-hidden">
      <div className="flex flex-wrap gap-1">
        {shown.map((tag) => (
          <span
            key={tag}
            className="rounded bg-emerald-50/80 dark:bg-emerald-950/50 px-2 py-0.5 text-sm text-emerald-700 dark:text-emerald-400 border border-emerald-200/40 dark:border-emerald-800/40"
          >
            #{tag}
          </span>
        ))}

        {hidden > 0 && (
          <span
            title={tags.slice(max).join("  ")}
            className="rounded bg-emerald-50/80 dark:bg-emerald-950/50 px-2 py-0.5 text-sm text-emerald-700 dark:text-emerald-400 border border-emerald-200/40 dark:border-emerald-800/40"
          >
            +{hidden}
          </span>
        )}
      </div>
    </div>
  );
}

export function renderReactions(reactions?: Record<string, number>, max = 4) {
  if (!reactions || !Object.keys(reactions).length) return null;
  const pairs = Object.entries(reactions).sort((a, b) => b[1] - a[1]);
  const shown = pairs.slice(0, max);
  const hidden = pairs.slice(max);
  const hiddenTotal = hidden.reduce((sum, [, count]) => sum + count, 0);

  return (
    <ul className="flex gap-3 mt-3 text-base">
      {shown.map(([emoji, count]) => (
        <li key={emoji} className="flex items-center gap-1">
          <span>{emoji}</span>
          <span className="font-medium">{count}</span>
        </li>
      ))}
      {hidden.length > 0 && (
        <li className="flex items-center gap-1">
          <span>+{hiddenTotal} </span>
        </li>
      )}
    </ul>
  );
}
