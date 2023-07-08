import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";


export async function DELETE(request) {
    const body = await request.json();
    const id = body.id;
    const action = body.action;

    switch (action) {
        case 'Doelpunt':
            const team = body.team;
            await prisma.action.delete({
                where: {
                    id: parseInt(id)
                }
            });
            if (team === 'Thuis') {
                await prisma.match.update({
                    where: {
                        id: 1
                    },
                    data: {
                        goalsHome: {
                            decrement: 1
                        }
                    }

                });
            } else {
                await prisma.match.update({
                    where: {
                        id: 1
                    },
                    data: {
                        goalsAway: {
                            decrement: 1
                        }
                    }

                });
            }
            break;
        default:
            await prisma.action.delete({
                where: {
                    id: parseInt(id)
                }
            })
    }
    await prisma.$disconnect();
    return NextResponse.json({ data: 'success' }, { status: 200 });
}