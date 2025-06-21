import { googleTranslateUrl } from "@/lib/googleTranslate";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./ui/card";

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
  TelegramMessage: TelegramMessage[]; // API returns an array
};

export function pastaCard(pasta: Pasta) {
  return (
    <Card
      key={pasta.TelegramMessage[0].message_id}
      className="group flex h-full grid grid-rows-[auto_1fr_auto] flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-300"
    >
      <CardHeader className="flex-none">
        <CardTitle className="line-clamp-2 min-h-[3.25rem] font-semibold">
          {pasta.title || "Untitled Pasta"}
        </CardTitle>

        <CardDescription className="text-sm flex gap-4">
          <p>views: {pasta.TelegramMessage[0].views}</p>
          <p>forwards: {pasta.TelegramMessage[0].forwards}</p>
        </CardDescription>
        <CardAction className="shrink-0">
          <a
            href={googleTranslateUrl("pl", pasta.url)}
            target="_blank"
            className="inline-flex items-center px-2 py-1 text-s font-medium bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
          >
            Telegraph
          </a>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1 p-4 pt-0 row-[2] overflow-hidden pb-0 mb-0">
        <p className="line-clamp-6 whitespace-pre-wrap leading-relaxed text-gray-800">
          {pasta.description}
        </p>
      </CardContent>

      <CardFooter className="mt-auto min-h-[3rem] border-t pt-2 flex flex-col gap-1">
        {renderReactions(pasta.TelegramMessage[0].reactions)}
        {renderHashtags(pasta.TelegramMessage[0].hashtags)}
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
            className="rounded bg-emerald-50 px-2 py-0.5 text-sm text-emerald-700"
          >
            #{tag}
          </span>
        ))}

        {hidden > 0 && (
          <span
            title={tags.slice(max).join("  ")}
            className="rounded bg-emerald-50 px-2 py-0.5 text-sm text-emerald-700"
          >
            +{hidden}
          </span>
        )}
      </div>
    </div>
  );
}

export function renderReactions(reactions?: Record<string, number>) {
  if (!reactions || !Object.keys(reactions).length) return null;
  const pairs = Object.entries(reactions).sort((a, b) => b[1] - a[1]);

  return (
    <ul className="flex gap-3 mt-3 text-base">
      {pairs.map(([emoji, count]) => (
        <li key={emoji} className="flex items-center gap-1">
          <span>{emoji}</span>
          <span className="font-medium">{count}</span>
        </li>
      ))}
    </ul>
  );
}
