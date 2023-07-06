import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST(req) {
    const request = await req.json();
    const team = request.team;
    const card = request.card;
    if (team == "home") {
        await prisma.action.create({
            data: {
                matchId: 1,
                action: card,
                timestamp: new Date(),
                team: "Thuis"
            }
        });
    } else {
        await prisma.action.create({
            data: {
                matchId: 1,
                action: card,
                timestamp: new Date(),
                team: "Uit"
            }
        });
    }
    return NextResponse.json({ data: "success" }, { status: 200 });
}