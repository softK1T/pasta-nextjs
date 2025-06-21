import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const stats = await prisma.telegraphContent.aggregate({
    where: {
      TelegramMessage: {
        some: {},
      },
    },
    _count: {
      url: true,
    },
  });

  const messageStats = await prisma.telegramMessage.aggregate({
    _count: {
      message_id: true,
    },
    _sum: {
      views: true,
      forwards: true,
    },
    _avg: {
      views: true,
      forwards: true,
    },
  });

  const recentPastas = await prisma.telegraphContent.count({
    where: {
      TelegramMessage: {
        some: {
          date: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
          },
        },
      },
    },
  });

  return NextResponse.json({
    totalPastas: stats._count.url,
    totalMessages: messageStats._count.message_id,
    totalViews: messageStats._sum.views || 0,
    totalForwards: messageStats._sum.forwards || 0,
    avgViews: Math.round(messageStats._avg.views || 0),
    avgForwards: Math.round(messageStats._avg.forwards || 0),
    recentPastas,
  });
}
