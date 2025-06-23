import { Prisma } from "@prisma/client";

export function pastasQuery(opts: {
  sort: "reactions" | "views" | "forwards" | "date";
  dir: "ASC" | "DESC";
  limit: number;
  tags: string[];
}) {
  const sql = Prisma.sql;

  /* ─ column to order by ─ */
  const col = {
    reactions: sql`total_reactions`,
    views: sql`total_views`,
    forwards: sql`total_forwards`,
    date: sql`latest_date`,
  }[opts.sort];

  /* ─ optional tag filter ─ */
  const tagFilter = opts.tags.length
    ? sql`WHERE hashtags && ARRAY[${Prisma.join(
        opts.tags.map((t) => sql`${t}`)
      )}]::text[]`
    : sql``;

  return sql`
    WITH filtered AS (
      SELECT * FROM telegram_messages
      ${tagFilter}
    ),

    msg AS (
      SELECT
        telegraph_link                       AS url,
        SUM(reaction_total)::int             AS total_reactions,
        SUM(views)::int                      AS total_views,
        SUM(forwards)::int                   AS total_forwards,
        MAX(date)                            AS latest_date,
        MAX(message_id)::int                 AS message_id
      FROM filtered
      GROUP BY telegraph_link
    ),

    tags AS (
      SELECT telegraph_link AS url,
             array_agg(DISTINCT h)           AS hashtags
      FROM filtered
      JOIN LATERAL unnest(hashtags) h ON TRUE
      GROUP BY telegraph_link
    ),

    emoji_cnt AS (
      SELECT
        telegraph_link                       AS url,
        e.key                                AS emoji,
        SUM(e.value::int)                    AS cnt
      FROM filtered
      CROSS JOIN LATERAL jsonb_each_text(reactions) e(key, value)
      GROUP BY telegraph_link, e.key
    ),

    emoji AS (
      SELECT url,
             jsonb_object_agg(emoji, cnt)    AS reactions_json
      FROM emoji_cnt
      GROUP BY url
    )

    SELECT
      tc.url, tc.title, tc.description,
      m.total_reactions, m.total_views, m.total_forwards, m.latest_date,
      e.reactions_json, t.hashtags, m.message_id
    FROM telegraph_content tc
    JOIN msg   m USING (url)
    LEFT JOIN emoji e USING (url)
    LEFT JOIN tags  t USING (url)
    ORDER BY ${col} ${Prisma.raw(opts.dir)}
    LIMIT  ${opts.limit};
  `;
}
