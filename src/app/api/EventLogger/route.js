import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function POST(req) {
    const request = await req.json();
    const team = request.team;
    const actionType = request.actionType;
    try {
        switch (actionType) {
            case "goal":
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
                break;
            case "card":
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
                break;
            case "penalty":
                if (team == "home") {
                    await prisma.action.create({
                        data: {
                            matchId: 1,
                            action: "Penalty",
                            timestamp: new Date(),
                            team: "Thuis"
                        }
                    });
                } else {
                    await prisma.action.create({
                        data: {
                            matchId: 1,
                            action: "Penalty",
                            timestamp: new Date(),
                            team: "Uit"
                        }
                    });
                }
                break;
        }
    } catch (error) {
        console.log(`Error at: ${actionType}, error: ${error}`);
        await prisma.$disconnect();
        return NextResponse.json({ "message": `Error at: ${actionType}, error: ${error}`, "status": 500 })
    }

    return NextResponse.json({ "message": `Successfuly logged ${actionType}`, "status": 200 })
}