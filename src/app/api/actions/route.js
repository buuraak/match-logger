import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function GET(request) {
    const actions = await prisma.action.findMany(
        {
            where: {
                matchId: 1
            },
            orderBy: {
                timestamp: "asc"
            }
        }
    );

    return NextResponse.json({ data: actions }, { status: 200 });
}