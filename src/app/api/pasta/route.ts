import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const pastas = await prisma.telegraphContent.findMany({
    where: {
      TelegramMessage: {
        some: {},
      },
    },
    select: {
      url: true,
      title: true,
      description: true,
      TelegramMessage: {
        select: {
          reactions: true,
          date: true,
          hashtags: true,
          views: true,
          forwards: true,
          message_id: true,
        },
      },
    },
    take: 50,
  });
  return NextResponse.json(pastas);
}
