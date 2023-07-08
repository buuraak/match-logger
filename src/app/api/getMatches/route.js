import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(request) {
    let matches;
    try{
        matches = await prisma.match.findFirst({
            include: {
                actions: true
            }
        });
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
        return NextResponse.json({data: matches}, {status: 200});
    }
}