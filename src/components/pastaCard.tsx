// components/PastaCard.tsx
import Link from "next/link";

type Reactions = Record<string, number>;

interface PastaCardProps {
  title?: string;
  text?: string;
  date?: Date | string;
  url?: string;
  views?: number;
  forwards?: number;
  hashtags?: string[];
  reactions?: Reactions | null;
}

function renderHashtags(tags?: string[]) {
  if (!tags?.length) return null;
  return (
    <ul className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-sm px-2 py-0.5 rounded bg-emerald-100 text-emerald-700"
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
}

function renderReactions(reactions?: Reactions | null) {
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

export default function PastaCard({
  title,
  text,
  date,
  url,
  views,
  forwards,
  hashtags,
  reactions,
}: PastaCardProps) {
  return (
    <article className="border rounded-lg shadow-md p-6 bg-white">
      <header className="mb-3">
        <h2 className="text-xl font-semibold leading-tight">
          {title || "Untitled pasta"}
        </h2>
        {date && (
          <time
            dateTime={new Date(date).toISOString()}
            className="block text-gray-500 text-sm"
          >
            {new Date(date).toLocaleString()}
          </time>
        )}
      </header>

      {text && (
        <p className="line-clamp-5 whitespace-pre-wrap text-gray-800">{text}</p>
      )}

      <div className="grid grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          👁️ <span>{views ?? 0}</span>
        </div>
        <div className="flex items-center gap-1">
          🔄 <span>{forwards ?? 0}</span>
        </div>
        {url && (
          <Link
            href={
              "https://translate.google.com/translate?sl=auto&tl=pl&u=" + url
            }
            target="_blank"
            className="text-blue-600 underline col-span-1"
          >
            Read on Telegraph →
          </Link>
        )}
      </div>

      {renderHashtags(hashtags)}
      {renderReactions(reactions)}
    </article>
  );
}
