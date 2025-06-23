// app/api/pastas/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { pastasQuery } from "@/lib/sql/pastas";

export const dynamic = "force-dynamic";

enum SortField {
  reactions = "reactions",
  views = "views",
  forwards = "forwards",
  date = "date",
}
enum SortOrder {
  asc = "asc",
  desc = "desc",
}

function parseTags(value: string | null) {
  return value
    ? value
        .split(",")
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean)
    : [];
}

export async function GET(req: Request) {
  const qp = new URL(req.url).searchParams;
  const sort = (qp.get("sort") ?? SortField.reactions) as SortField;
  const order = (qp.get("order") ?? SortOrder.desc) as SortOrder;
  const limit = Math.min(Number(qp.get("take")) || 50, 100);
  const tags = parseTags(qp.get("tags"));

  console.log(
    pastasQuery({
      sort,
      dir: order.toUpperCase() as "ASC" | "DESC",
      limit,
      tags,
    })
  );
  const rows = await prisma.$queryRaw(
    pastasQuery({
      sort,
      dir: order.toUpperCase() as "ASC" | "DESC",
      limit,
      tags,
    })
  );

  return NextResponse.json(rows);
}
