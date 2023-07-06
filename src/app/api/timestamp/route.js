import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST(req) {
    const request = await req.json();
    const timerAction = request.timerAction;
    if (timerAction == "start") {
        await prisma.match.update({
            where: {
                id: 1
            },
            data: {
                startingTimestamp: new Date()
            }
        });
    } else if (timerAction == "pause") {
        await prisma.match.update({
            where: {
                id: 1
            },
            data: {
                lastTimestamp: new Date()
            }
        });
    } else {
        await prisma.match.update({
            where: {
                id: 1
            },
            data: {
                startingTimestamp: null,
                lastTimestamp: null
            }
        });
    }
    return NextResponse.json({ data: "success" }, { status: 200 });
}