import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST(req) {
    const request = await req.json();
    const team = request.team;
    if (team == "home") {
        await prisma.match.update({
            where: {
                id: 1
            },
            data: {
                goalsHome: {
                    increment: 1
                }
            }
        });
        await prisma.action.create({
            data: {
                matchId: 1,
                action: "Doelpunt",
                timestamp: new Date(),
                team: "Thuis"
            }
        });
    } else {
        await prisma.match.update({
            where: {
                id: 1
            },
            data: {
                goalsAway: {
                    increment: 1
                }
            }
        });
        await prisma.action.create({
            data: {
                matchId: 1,
                action: "Doelpunt",
                timestamp: new Date(),
                team: "Uit"
            }
        });
    }
    return NextResponse.json({ data: "success" }, { status: 200 });
}