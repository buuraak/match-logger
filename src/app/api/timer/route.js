import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function POST(req) {
    const { startingTimestamp, pausedTimestamp, timerAction  } = await req.json();

    switch(timerAction) {
        case "reset":
            await prisma.match.update({
                where: {
                    id: 1
                },
                data: {
                    startingTimestamp: startingTimestamp,
                    pausedTimestamp: pausedTimestamp
                }
            })
            break;
        case "start":
            await prisma.match.update({
                where: {
                    id: 1
                },
                data: {
                    startingTimestamp: startingTimestamp,
                    pausedTimestamp: pausedTimestamp
                }
            })
        case "pause":
            await prisma.match.update({
                where: {
                    id: 1
                },
                data: {
                    startingTimestamp: startingTimestamp,
                    pausedTimestamp: pausedTimestamp
                }
            })
    }

    return NextResponse.json({ data: "success" }, { status: 200 });
}