import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
    let matches;
    try{
        matches = await prisma.match.findFirst();
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
        return NextResponse.json({data: matches}, {status: 200});
    }
}