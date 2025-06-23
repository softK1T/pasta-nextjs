import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const take = Math.min(Number(searchParams.get("take")) || 250, 500);

  const rows = await prisma.$queryRawUnsafe(`
    SELECT
      tag      AS hashtag,
      COUNT(DISTINCT telegraph_link)::int AS pasta_cnt
    FROM telegram_messages
    CROSS JOIN LATERAL unnest(hashtags) tag           -- flatten the array[1]
    GROUP BY tag
    ORDER BY pasta_cnt DESC, tag ASC                  -- most-used first[3][4]
    LIMIT ${take};
  `);

  return NextResponse.json(rows);
}
